import { useState } from "react";
import loadingBtn from '../assest/1484.gif';

const DocManager = () => {
    const [optionType, setOptionType] = useState(1);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [password, setPassword] = useState(null);
    const [file, setFile] = useState(null);

    const handleSubmit = () => {
        if(title != null && file != null){
            alert("s")
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
                    onClick={(e) => {setTitle(e.target.value)}}
                />
                <input 
                    className="m-2 h-[45px] px-2 w-[97%]"
                    type="text"
                    placeholder="Description"
                    onClick={(e) => {setDesc(e.target.value)}}
                />
                <input 
                    className="m-2 h-[45px] px-2 w-[97%]"
                    type="password"
                    placeholder="Password"
                    onClick={(e) => {setPassword(e.target.value)}}
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
                    onClick={() => handleSubmit()}
                >
                    {loading ?
                        <img className="mt-[-20px] ml-2" src={loadingBtn} alt="loading indicator" />
                    : 'Submit'}
                </button>
            </div>
                
        </div>
    )
}

export default DocManager;