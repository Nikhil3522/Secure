import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';

export default function Signup(){
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email : '',
        password : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const [displayErrorShow, setDisplayErrorShow] = useState('none');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!userData.name || !userData.username || !userData.email || !userData.password){
            // console.log(userData);
            setErrorMsg('Fill all fields');
            setDisplayErrorShow('');
            return;
        }

        if(userData.password.length < 6){
            setErrorMsg('Password should be at least 6 characters');
            setDisplayErrorShow('');
            return;
        }

        setDisplayErrorShow('none');
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((res) => {
                const user = res.user;
                updateProfile(user, {
                    displayName: userData.name,
                })
                navigate('/login')
                // console.log(user);
            })
            .catch((err) => (
                console.log('not ok', err.message),
                setErrorMsg(err.message),
                setDisplayErrorShow('')
            ))
    }
    return(
        <div className="bg-blue-400 w-[500px]  p-4 d-flex">
            <h6 className="text-center text-4xl">Create account</h6>
            <div className="w-[80%] m-[auto] mt-[40px]">
                <form>
                    <label>
                        <h6>Your name</h6>
                        <input 
                            className="w-[100%] h-[45px] mb-4"
                            type="text" 
                            name="name" 
                            placeholder="Type your name here"
                            onChange={(event) => 
                                setUserData((prev) => ({ ...prev, name: event.target.value}))
                            }
                        />
                    </label>
                    <label>
                        <h6>Username</h6>
                        <input 
                            className="w-[100%] h-[45px] mb-4"
                            type="text" 
                            name="username" 
                            placeholder="Type your username here" 
                            onChange={(event) => 
                                setUserData((prev) => ({ ...prev, username: event.target.value}))
                            }
                        />
                    </label>
                    <label>
                        <h6>Email</h6>
                        <input 
                            className="w-[100%] h-[45px] mb-4"
                            type="email" 
                            name="email" 
                            placeholder="Type your email here" 
                            onChange={(event) => 
                                setUserData((prev) => ({ ...prev, email: event.target.value}))
                            }
                        />
                    </label>
                    <label>
                        <h6>Password</h6>
                        <input 
                            className="w-[100%] h-[45px] mb-4"
                            type="password" 
                            name="password" 
                            placeholder="Type your password here" 
                            onChange={(event) => (
                                setUserData((prev) => ({ ...prev, password: event.target.value}))
                            )}
                        />
                    </label>
                    <div className="errorDiv" style={{display:displayErrorShow}}>
                            <h5>{errorMsg}</h5>
                    </div>
                    <br/>
                    <input 
                        className="bg-green-400 p-3 rounded-[6px]"  
                        type="submit" 
                        value="Register"
                        onClick={handleSubmit}
                        />
                </form>
            </div>
        </div>
    )
}