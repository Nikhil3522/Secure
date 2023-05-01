import {useState} from "react";
import { app, auth } from '../firebase';
import { getDatabase, push, ref } from 'firebase/database';


const PassManager = () => {
    const db = getDatabase(app);
    const [title, setTitle] = useState(null);
    const [URL, setURL] = useState(null);
    const [Username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = () => {
        if(title, password){
            const data = {
                title,
                URL,
                Username,
                password
            }
            console.log("data", data);
            const postsRef = ref(db, 'Password');
            push(postsRef, data)
        }else{
            alert("Title and Password can't be empty")
        }
    }


    return (
        <div className="bg-blue-400 p-4 w-[500px] flex flex-col">
            <input 
                className="m-2 h-[45px] px-2"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                className="m-2 h-[45px] px-2"
                type="text"
                placeholder="URL"
                onChange={(e) => setURL(e.target.value)}
            />
            <input 
                className="m-2 h-[45px] px-2"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                className="m-2 h-[45px] px-2"
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                className="bg-green-400 hover:bg-green-500 p-2 rounded-lg cursor-pointer text-white w-[100px] m-[auto]"
                type="submit"
                value="Submit"
                onClick={handleSubmit}
            />
            {/* {encrypted &&
            <div className="bg-white min-h-[45px] m-2 p-2 my-6 break-words">
                <h3>{encrypted}</h3>
            </div>} */}
        </div>
    )
}

export default PassManager;