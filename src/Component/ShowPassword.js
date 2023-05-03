import { useEffect, useState } from "react";

const ShowPassword = (props) => {
    const [show, setShow] = useState(false);
    const [temp, setTemp] = useState(null);

    // useEffect(() => {
    //     const temp = props.item.password.map((item) => {
    //        return "*"
    //     }
    // }, [])
    return (
        <div className="mt-4 bg-[#FFFFFF] bg-opacity-35 rounded-xl p-4">
            <h1 className="font-bold text-2xl">{props.item.title}</h1>
            <h1>URL: <a href={props.item.URL}>{props.item.URL}</a> </h1>
            <h1>UserName: {props.item.Username}</h1>
            <div className="flex">
                <h1>
                    Password: {show ? 
                        `${props.item.password}` 
                        : 
                        "******" }
                </h1>
                <button 
                    className="ml-2 border-2"
                    onClick={() => {setShow(!show)}}
                >
                    {!show ? 'Show' : 'Hide'}
                </button>
            </div>
            
        </div>
    )
}

export default ShowPassword;