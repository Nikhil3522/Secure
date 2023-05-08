import { useEffect, useState } from "react";
import CryptoJS from 'crypto-js';
import lockGif from '../assest/icons8-lock.gif';

const ShowDocument = (props) => {
    const item = props.item;
    const [ filePath, setFilePath ] = useState(null);

    useEffect(() => {
        var decryptFilePath;
        if(item.secretKey){
            decryptFilePath = CryptoJS.AES.decrypt(item.fileEncrpted, item.secretKey).toString(CryptoJS.enc.Utf8);
        }else{
            decryptFilePath = item.fileEncrpted;
        }
        setFilePath(decryptFilePath);
    }, []);

    return (
        <a
            target="_blank"
            href={filePath}
            className="mt-4 bg-blue-300 p-4 rounded-xl text-white cursor-pointer"
        >
            <div className="w-[100%]">
                {console.log("file path UI ", filePath)}
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl">{item.title}</h1>
                    {item.secretKey &&
                        <img src={lockGif} width="30px" />
                    }
                </div>
                <h1>{item.desciption}</h1>
            </div>
        </a>
        // <div>doc</div>
    )
}

export default ShowDocument;