import React, { useEffect, useRef } from "react";
// import lottie from "lottie-web";
// import Lottie from "react-lottie";
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
                <h1 className="text-4xl  mt-[160px] min-w-[400px]">
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
                    {/* <Lottie 
                        options={defaultOptions}
                        height={400}
                        width={400}
                    /> */}
                </div>
            </div>
            <div className="flex flex-wrap m-[auto] justify-center">
                <div 
                    className="bg-blue-400 cursor-pointer w-[280px] h-[220px] p-4 m-4"
                    onClick={() => navigate('/encryption')}
                >
                    <h3 className="text-3xl font-bold text-white text-center">Encryption</h3>
                    <ol>
                        <li>Text</li>
                        <li>Image</li>
                        <li>File</li>
                    </ol>
                </div>

                <div 
                    className="bg-blue-400 w-[280px] h-[220px] p-4 m-4"
                    onClick={() => navigate('/decryption')}
                >
                    <h3 className="text-3xl font-bold text-white text-center">decryption</h3>
                    <ol>
                        <li>Text</li>
                        <li>Image</li>
                        <li>File</li>
                    </ol>
                </div>

                <div 
                    className="bg-blue-400 w-[280px] h-[220px] p-4 m-4"
                    onClick={() => navigate('/password-generator')}
                >
                    <h3 className="text-3xl font-bold text-white text-center">Password Generator</h3>
                    <ol>
                        <li>Text</li>
                        <li>Image</li>
                        <li>File</li>
                    </ol>
                </div>

                <div className="bg-blue-400 w-[280px] h-[220px] p-4 m-4">
                    <h3 className="text-3xl font-bold text-white text-center">Password Strength Checker</h3>
                    <ol>
                        <li>Text</li>
                        <li>Image</li>
                        <li>File</li>
                    </ol>
                </div>

                <div 
                    onClick={() => navigate('/password-manager')}
                    className="bg-blue-400 w-[280px] h-[220px] p-4 m-4"
                >
                    <h3 className="text-3xl font-bold text-white text-center">Password Manager</h3>
                    <ol>
                        <li>Text</li>
                        <li>Image</li>
                        <li>File</li>
                    </ol>
                </div>

                <div className="bg-blue-400 w-[280px] h-[220px] p-4 m-4">
                    <h3 className="text-3xl font-bold text-white text-center">Access request</h3>
                    <ol>
                        <li>Text</li>
                        <li>Image</li>
                        <li>File</li>
                    </ol>
                </div>

                <div className="bg-blue-400 w-[280px] h-[220px] p-4 m-4">
                    <h3 className="text-3xl font-bold text-white text-center">Documents Manager</h3>
                    <ol>
                        <li>Text</li>
                        <li>Image</li>
                        <li>File</li>
                    </ol>
                </div>

                <div className="bg-blue-400 w-[280px] h-[220px] p-4 m-4">
                    <h3 className="text-3xl font-bold text-white text-center">History</h3>
                    <ol>
                        <li>Text</li>
                        <li>Image</li>
                        <li>File</li>
                    </ol>
                </div>

            </div>

            
        </div>
    )
} 

export default Home;