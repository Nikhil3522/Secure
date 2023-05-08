import { useState } from "react";
import loadingBtn from '../assest/1484.gif';
import CryptoJS from 'crypto-js';
import { app, auth } from '../firebase';
import { getDatabase, push, ref, set } from 'firebase/database';
import Cookies from "js-cookie";
import {storage} from "../firebase"
import { ref as sRef, uploadBytesResumable, getDownloadURL  } from 'firebase/storage';

const DocManager = () => {
    const userId = Cookies.get('userId');
    const [optionType, setOptionType] = useState(1);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("title value");
    const [desc, setDesc] = useState(null);
    const [pass, setPassword] = useState(null);
    const [file, setFile] = useState(null);
    const [encrypted, setEncrypted] = useState(null);
    const db = getDatabase(app);

    const getTodayDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const day = now.getDate().toString().padStart(2, "0");
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };

    const handleUpload = async () => {
        setLoading(true);
        if(title == null || file == null){
            alert("Please fill title and file")
            return;
        }

        var storageRef;

        storageRef = sRef(storage, `/documents/${file.name}`);
            
        const uploadTask = uploadBytesResumable(storageRef, title);

        await uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                    // update progress
                    console.log("percent", percent);
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        const temp =`${url}`;
                        console.log("URL ----> ", temp);
                        handleSubmit(url);
                    });
                }
            ); 
        console.log("success! image/file upload");
    }


    const handleSubmit = async (url) => {
        if(title != null && file != null){
            var ciphertext;

        console.log("NURL", url);
        ciphertext = CryptoJS.AES.encrypt(url, pass).toString();
        console.log("CURL", ciphertext);

        setEncrypted(ciphertext);

        const data = {
            title: title,
            desciption: desc,
            fileEncrpted: ciphertext,
            secretKey: pass,
        }

        const postsRef = ref(db, `Documents/${userId}`);
        push(postsRef, data)
        .then(() => {
            const historyRef = ref(db, `History/${userId}`);
            push(historyRef, {
                message: `You Encrypted "${title}" to ${ciphertext} the secret key is ${pass}.`,
                date: getTodayDateTime()
            });
          })
          .catch((error) => {
            console.error('Error writing data:', error);
          });
          setLoading(false);
        }else{
            if(title == null){
                alert("Please Enter the title")
            }else{
                alert("Please select file")
            }
        }
    }


    return (
        <div className="p-4 w-[500px] flex flex-col m-[auto]">
            <h1 className='text-center my-6 text-4xl text-white'>
                Document Manager
            </h1>
            
            <div className="flex justify-between bg-pink-200 mb-8 px-8 py-2 rounded-xl text-white font-bold">
                <div 
                    className={`${optionType === 1 && 'text-blue-500'} cursor-pointer hover:font-extrabold `}
                    onClick={() => setOptionType(1)}
                >
                    Add Document
                </div>
                <div 
                    className={`${optionType === 2 && 'text-blue-500'} cursor-pointer hover:font-extrabold`}
                    onClick={() => setOptionType(2)}
                >
                    Show Document
                </div>
            </div>

            <div className="flex flex-col">
                <input 
                    className="m-2 h-[45px] px-2 w-[97%]"
                    type="text"
                    placeholder="Title"
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <input 
                    className="m-2 h-[45px] px-2 w-[97%]"
                    type="text"
                    placeholder="Description"
                    onChange={(e) => {setDesc(e.target.value)}}
                />
                <input 
                    className="m-2 h-[45px] px-2 w-[97%]"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <input 
                    className="m-2 h-[45px] px-2 w-[97%]"
                    type="file"
                    accept="application/pdf, application/vnd.ms-excel, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) =>setFile(e.target.files[0])}
                />
                <button
                    className="bg-green-400 hover:bg-green-500 p-2 rounded-lg cursor-pointer text-white w-[100px] max-h-[40px] m-[auto]"
                    type="submit"
                    value="Submit"
                    onClick={() => handleUpload()}
                >
                    {loading ?
                        <img className="mt-[-20px] ml-2" src={loadingBtn} alt="loading indicator" />
                    : 'Submit'}
                </button>
            </div>
            {encrypted &&
            <div className="bg-white min-h-[45px] m-2 p-2 my-6 break-words">
                <h3>{encrypted}</h3>
            </div>}
                
        </div>
    )
}

export default DocManager;