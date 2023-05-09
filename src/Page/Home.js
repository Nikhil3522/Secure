import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Lottie from "react-lottie";
import animationData from '../assest/93112-security.json';
import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className="flex flex-col">
            <div className="flex m-[auto] w-[800px] ">
                <h1 className="text-4xl text-white min-h-[200px]  mt-[160px] min-w-[400px]">
                    <Typewriter
                        words={['Secure your digital world with our encryption solutions',
                                'Protect your data, secure your privacy',
                                'Say goodbye to weak passwords',
                                'Your data, your control',
                                'Empowering you with the tools to stay safe',
                                'Privacy in a digital age',
                                'Encrypt your messages, protect your privacy',
                                'Secure your online life with ease'
                            ]}
                        cursor
                        cursorStyle='|'
                        typeSpeed={40}
                        deleteSpeed={0}
                        loop={0}
                    />
                </h1>
                
                <div className="container " >
                    <Lottie 
                        options={defaultOptions}
                        height={400}
                        width={400}
                    />
                </div>
            </div>
            <div className="flex flex-wrap m-[auto] justify-center">
                <div 
                    className=" cursor-pointer w-[280px] h-[220px] p-4 m-4 overlay"
                    onClick={() => navigate('/encryption')}
                >
                    <h3 className="text-3xl font-bold text-white text-center overlay__title">Encryption</h3>
                </div>

                <div 
                    className="cursor-pointer w-[280px] h-[220px] p-4 m-4 overlay"
                    onClick={() => navigate('/decryption')}
                >
                    <h3 className="text-3xl font-bold text-white text-center">Decryption</h3>
                </div>

                <div 
                    className="cursor-pointer w-[280px] h-[220px] p-4 m-4 overlay"
                    onClick={() => navigate('/password-generator')}
                >
                    <h3 className="text-3xl font-bold text-white text-center">Password Generator</h3>
                </div>

                <div 
                    className="cursor-pointer w-[280px] h-[220px] p-4 m-4 overlay"
                    onClick={() => navigate('/pass-strength-checker')}
                >
                    <h3 className="text-3xl font-bold text-white text-center">Password Strength Checker</h3>
                </div>

                <div 
                    onClick={() => navigate('/password-manager')}
                    className="cursor-pointer w-[280px] h-[220px] p-4 m-4 overlay"
                >
                    <h3 className="text-3xl font-bold text-white text-center">Password Manager</h3>
                </div>

                <div 
                    onClick={() => navigate('/access')}
                    className="cursor-pointer w-[280px] h-[220px] p-4 m-4 overlay">
                    <h3 className="text-3xl font-bold text-white text-center">Access request</h3>
                </div>

                <div 
                    onClick={() => navigate('/document-manager')}
                    className="cursor-pointer w-[280px] h-[220px] p-4 m-4 overlay"
                    >
                    <h3 className="text-3xl font-bold text-white text-center">Documents Manager</h3>
                </div>

                <div 
                    className="cursor-pointer w-[280px] h-[220px] p-4 m-4 overlay"
                    onClick={() => navigate('/history')}
                >
                    <h3 className="text-3xl font-bold text-white text-center">History</h3>
                </div>

            </div>

            
        </div>
    )
} 

export default Home;