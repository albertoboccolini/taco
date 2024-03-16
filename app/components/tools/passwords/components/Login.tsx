import React from 'react';
import {FaEye, FaEyeSlash} from "react-icons/fa";
import TacoButton from "@/app/components/public/TacoButton";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Login = ({
                   visibleMainPassword,
                   mainPassword,
                   updateMainPassword,
                   toggleMainPasswordVisibility,
                   unlockPasswords
               }: any) => {
    const {darkMode} = DarkModeEngine();
    return (
        <>
            <div
                className="text-center mb-6 mx-auto flex justify-center items-center space-x-2">
                <input type={visibleMainPassword ? 'text' : 'password'}
                       value={mainPassword}
                       onChange={(e) => updateMainPassword(e.target.value)}
                       className={`${darkMode ? 'bg-taco-background-dark text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full max-w-xs`}/>
                <button onClick={toggleMainPasswordVisibility}
                        className="text-gray-500 flex-shrink-0">
                    {visibleMainPassword ? <FaEyeSlash width={200} height={200}/> : <FaEye/>}
                </button>
            </div>
            <div className="mt-4 text-center">
                <TacoButton type={"button"} onClick={unlockPasswords} text={"Unlock"}/>
            </div>
        </>
    );
};

export default Login;
