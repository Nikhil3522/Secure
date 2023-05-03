import {useEffect, useState} from "react";
import { app, auth, usePosts } from '../firebase';
import { getDatabase, push, ref } from 'firebase/database';
import ShowPassword from "../Component/ShowPassword";
import Cookies from "js-cookie";

const PassManager = () => {
    const userId = Cookies.get('userId');
    const DBData = usePosts(`Password/${userId}`);
    const db = getDatabase(app);
    const [title, setTitle] = useState(null);
    const [URL, setURL] = useState(null);
    const [Username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

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


    const handleSubmit = () => {
        if(title, password){
            const data = {
                title,
                URL,
                Username,
                password
            }
            console.log("data", data);
            const postsRef = ref(db, `Password/${userId}`);
            push(postsRef, data)
            .then(() => {
                const historyRef = ref(db, `History/${userId}`);
                push(historyRef, {
                    message: "You save your password!",
                    date: getTodayDateTime()
                });
              })
              .catch((error) => {
                console.error('Error writing data:', error);
              });
        }else{
            alert("Title and Password can't be empty")
        }
    }


    return (
        <div className="p-4 w-[500px] flex flex-col m-[auto]">
            <h1 className='text-center my-6 text-4xl text-white'>
                Passsword Manager
            </h1>
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
            {DBData && DBData.map((item, index) => (
                <ShowPassword item={item} key={index}/>
                // <div className="mt-4 bg-blue-300 p-4">
                //     <h1 className="font-bold text-2xl">{item.title}</h1>
                //     <h1>URL: {item.URL}</h1>
                //     <h1>UserName: {item.Username}</h1>
                //     <h1>Password: {item.password}</h1>
                // </div>
            ))}
        </div>
    )
}

export default PassManager;