import { useState } from "react";
import { usePosts } from "../firebase";
import CryptoJS from 'crypto-js';

const Decryption = () =>{
    const posts = usePosts();
    const [cipherText, setCipherText] = useState(null);
    const [secretKey, setScretKey] = useState(null);
    const [decryptedText, setDecryptedText] = useState(null);

    const handleSubmit = () => {
        setDecryptedText(null);
        posts.map((item, index) => {
            if(cipherText == item.ciphertext && secretKey == item.secretKey){
                const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
                const temp =  bytes.toString(CryptoJS.enc.Utf8);
                setDecryptedText(temp)
                console.log("text", decryptedText)
                // return decryptedText;
            }
        })

        console.log("please check your key")

    }

    return(
        <div className="bg-blue-400 p-4 w-[500px] flex flex-col">
            
        <input 
            className="m-2 h-[45px] px-2"
            type="text"
            placeholder="Cipher Text"
            onChange={(e) => setCipherText(e.target.value)}
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
        {decryptedText &&
        <div className="bg-white min-h-[45px] m-2 p-2 my-6">
            <h3>{decryptedText}</h3>
        </div>}
    </div>
    )
}

export default Decryption;