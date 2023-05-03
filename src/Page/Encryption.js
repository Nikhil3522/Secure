import React, { useState, useEffect } from "react";
import CryptoJS from 'crypto-js';
import { app, auth } from '../firebase';
import { getDatabase, push, ref, set } from 'firebase/database';

const Encryption = () => {
    const [secretKey, setScretKey] = useState(null);
    const [text, setText] = useState(null);
    const [encrypted, setEncrypted] = useState(null);
    const db = getDatabase(app);


    const handleSubmit = () => {
        if(!text || !secretKey){
            alert("Please fill text and secretkey")
            return;
        }
        const ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
        setEncrypted(ciphertext);
        const data = {
            ciphertext: ciphertext,
            secretKey: secretKey,
        }
        const postsRef = ref(db, 'Encrypt');
        push(postsRef, data)
        // .then(() => {
        //     console.log('Data written successfully:', data);
        //   })
        //   .catch((error) => {
        //     console.error('Error writing data:', error);
        //   });
    }

return (
    <div className="p-4 w-[500px] flex flex-col m-[auto]">
        <input 
            className="m-2 h-[45px] px-2"
            type="text"
            placeholder="Message"
            onChange={(e) => setText(e.target.value)}
        />
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
            onClick={handleSubmit}
        />
        {encrypted &&
        <div className="bg-white min-h-[45px] m-2 p-2 my-6 break-words">
            <h3>{encrypted}</h3>
        </div>}
    </div>
)
}

export default Encryption;