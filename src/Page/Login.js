import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Loader from "../Component/Loader";
import Cookies from 'js-cookie';

export default function Login(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [enterData, setEnterData] = useState({
        email : '',
        password : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const [displayErrorShow, setDisplayErrorShow] = useState('none');

    const handleSubmission = (event) => {
        setLoading(true)
        event.preventDefault();
        if(!enterData.email || !enterData.password){
            setErrorMsg('Fill all fiels');
            setDisplayErrorShow('');
            return;
        }
        setDisplayErrorShow('none');

        signInWithEmailAndPassword(auth, enterData.email, enterData.password)
            .then(async (res) => {
                console.log('logged in');
                Cookies.set('userEmail', enterData.email);
                navigate('/home');
            })
            .catch((err) => {
                console.log(err);
            })

    }
    return(
        (loading) ? <Loader /> :
        <div className=" w-[500px] h-[400px] p-4 d-flex m-[auto]">
            
            <h3 className="text-center text-4xl">Login</h3>
            <div className="w-[80%] m-[auto] mt-[40px]">
                <form>
                    <label>
                        <h6>Username</h6>
                        <input 
                            className="w-[100%] h-[45px] mb-4"
                            type="email" 
                            name="email" 
                            placeholder="username" 
                            onChange={(event) => 
                                setEnterData((prev) => ({ ...prev, email: event.target.value}))
                            }
                        />
                    </label>
                    <label>
                        <h6>Password</h6>
                        <input 
                            className="w-[100%] h-[45px] mb-8"
                            type="password" 
                            name="password" 
                            placeholder="Type your password here" 
                            onChange={(event) => 
                                setEnterData((prev) => ({ ...prev, password: event.target.value}))
                            }
                        />
                    </label>
                    <div className="errorDiv" style={{display:displayErrorShow}}>
                            <h5>{errorMsg}</h5>
                    </div>
                    <br/>
                    <input 
                        className="bg-green-400 p-3 rounded-[6px]" 
                        type="submit" 
                        value="Login"
                        onClick={handleSubmission}
                    />
                </form>
            </div>
        </div>
    )
}