import { useState } from "react";
import { usePosts } from "../firebase";
import CryptoJS from 'crypto-js';
import DecryptResult from "../Component/DecryptResult";

const Decryption = () =>{
    const posts = usePosts('Encrypt');
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
        <div className="p-4 w-[500px] flex flex-col m-[auto]">
            <h1 className='text-center my-6 text-4xl text-white'>
                Decryption
            </h1>
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
        <div className="bg-white min-h-[85px] m-2 p-2 my-6">
            <DecryptResult url={decryptedText}/>
            {/* {(decryptedText.includes(".jpg")) ?
             <h3>URLImage :- {decryptedText}</h3>
                // <img src={decryptedText} /> :
                :
            (decryptedText.includes(".pdf") || decryptedText.includes(".png") || decryptedText.includes(".gif")) != null ?
            <div>
                <h3>URLImage :- {decryptedText}</h3>
                <object data={decryptedText} type="application/pdf" width="100%" height="100%">
                    <p>Alternative text - include a link <a href={decryptedText}>to the PDF!</a></p>
                </object> 
            </div>
            
            :
                <h3>URL :- {decryptedText}</h3>
            } */}
            {/* {decryptedText.match(/\.(pdf)$/) != null && */}
            {/* <object data={decryptedText} type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object> */}
            
        </div>}
    </div>
    )
}

export default Decryption;