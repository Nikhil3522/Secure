import React, { useState, useEffect } from "react";
import CryptoJS from 'crypto-js';
import { app, auth } from '../firebase';
import { getDatabase, push, ref, set } from 'firebase/database';
import Cookies from "js-cookie";
import {storage} from "../firebase"
import { ref as sRef, uploadBytesResumable, getDownloadURL  } from 'firebase/storage';


const Encryption = () => {
    const userId = Cookies.get('userId');
    const [secretKey, setScretKey] = useState(null);
    const [text, setText] = useState(null);
    const [encrypted, setEncrypted] = useState(null);
    const [encryptType, setEncryptType] = useState(2);
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
        if(!text || !secretKey){
            alert("Please fill text and secretkey")
            return;
        }
            
            var storageRef;

            if(encryptType == 2){
                storageRef = sRef(storage, `/image/${text.name}`);
            }else{
                storageRef = sRef(storage, `/files/${text.name}`);
            }
            const uploadTask = uploadBytesResumable(storageRef, text);

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
                                const temp =`${url}`
                                handleSubmit(url);

                            });
                        }
                    ); 
            console.log("success! image/file upload");
        }

    const handleSubmit = (url) => {
        if(!text || !secretKey){
            alert("Please fill text and secretkey")
            return;
        }

        var ciphertext;
        if(encryptType === 2 || encryptType===3){
            console.log("NURL", url);
            ciphertext = CryptoJS.AES.encrypt(url, secretKey).toString();
            console.log("CURL", ciphertext);
        }else{
            console.log("Ntext", text);
            ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
            console.log("Ctext", ciphertext);
        }

        setEncrypted(ciphertext);
        const data = {
            ciphertext: ciphertext,
            secretKey: secretKey,
        }
        const postsRef = ref(db, 'Encrypt');
        push(postsRef, data)
        .then(() => {
            const historyRef = ref(db, `History/${userId}`);
            push(historyRef, {
                message: `You Encrypted "${text}" to ${ciphertext} the secret key is ${secretKey}.`,
                date: getTodayDateTime()
            });
          })
          .catch((error) => {
            console.error('Error writing data:', error);
          });
    }

return (
    <div className="p-4 w-[500px] flex flex-col m-[auto]">
        <h1 className='text-center my-6 text-4xl text-white'>
            Encryption
        </h1>
        <div className="flex justify-between bg-pink-200 mb-8 px-8 py-2 rounded-xl text-white font-bold">
            <div 
                className={`${encryptType === 1 && 'text-blue-500'} cursor-pointer hover:font-extrabold `}
                onClick={() => setEncryptType(1)}
            >
                TEXT
            </div>
            <div 
                className={`${encryptType === 2 && 'text-blue-500'} cursor-pointer hover:font-extrabold`}
                onClick={() => setEncryptType(2)}
            >
                IMAGE
            </div>
            <div 
                className={`${encryptType === 3 && 'text-blue-500'} cursor-pointer hover:font-extrabold`}
                onClick={() => setEncryptType(3)}
            >
                FILE
            </div>
        </div>
        {
            encryptType == 1 ?
            // Text
                <input 
                    className="m-2 h-[45px] px-2"
                    type="text"
                    placeholder="Message"
                    onChange={(e) =>setText(e.target.value)}
                />
            :
            encryptType == 2 ?
            // Image
                <input 
                    className="m-2 h-[45px] px-2"
                    type="file"
                    accept="image/*"
                    placeholder="Message"
                    onChange={(e) =>setText(e.target.files[0])}
                />
            :
            // File
                <input 
                    className="m-2 h-[45px] px-2"
                    type="file"
                    accept="application/pdf, application/vnd.ms-excel, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    placeholder="Message"
                    onChange={(e) =>setText(e.target.files[0])}
                />
        }
        
        <input 
            className="m-2 h-[45px] px-2"
            type="text"
            placeholder="Key"
            onChange={(e) => setScretKey(e.target.value)}
        />
        <input 
            className="bg-green-400 hover:bg-green-500 p-2 rounded-lg cursor-pointer text-white w-[100px] m-[auto]"
            type="submit"
            value="Submit"
            onClick={encryptType == 1 ? handleSubmit : encryptType ==2 ? handleUpload: handleUpload}
        />
        {encrypted &&
        <div className="bg-white min-h-[45px] m-2 p-2 my-6 break-words">
            <h3>{encrypted}</h3>
        </div>}
    </div>
)
}

export default Encryption;