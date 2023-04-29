import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Lottie from "react-lottie";
import animationData from '../assest/93112-security.json';
import { useNavigate } from "react-router-dom";

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
        <div className="flex flex-wrap">
            <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
            />
            <div className="container" ></div>
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

            <div className="bg-blue-400 w-[280px] h-[220px] p-4 m-4">
                <h3 className="text-3xl font-bold text-white text-center">decryption</h3>
                <ol>
                    <li>Text</li>
                    <li>Image</li>
                    <li>File</li>
                </ol>
            </div>

            <div className="bg-blue-400 w-[280px] h-[220px] p-4 m-4">
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

            <div className="bg-blue-400 w-[280px] h-[220px] p-4 m-4">
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
    )
} 

export default Home;