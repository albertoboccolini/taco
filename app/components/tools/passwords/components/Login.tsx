import React from 'react';
import Image from "next/image";
import passwordLogo from "/public/passwordLogo.png";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const Login = ({
                   visibleMainPassword,
                   mainPassword,
                   updateMainPassword,
                   toggleMainPasswordVisibility,
                   unlockPasswords
               }) => {
    return (
        <>
            <div
                className="text-center mb-6 mx-auto flex justify-center items-center space-x-2">
                <input type={visibleMainPassword ? 'text' : 'password'}
                       value={mainPassword}
                       onChange={(e) => updateMainPassword(e.target.value)}
                       className="border shadow-md rounded-lg py-2 px-4 font-normal w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"/>
                <button onClick={toggleMainPasswordVisibility}
                        className="text-gray-500 flex-shrink-0">
                    {visibleMainPassword ? <FaEyeSlash width={200} height={200}/> : <FaEye/>}
                </button>
            </div>
            <div className="mt-4 text-center">
                <button type="submit" onClick={unlockPasswords}
                        className=" my-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Unlock
                </button>
            </div>
        </>
    );
};

export default Login;
