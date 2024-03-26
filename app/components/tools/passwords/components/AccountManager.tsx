import React from 'react';
import {FaEye, FaEyeSlash} from "react-icons/fa";
import TacoButton from "@/app/components/public/TacoButton";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const AccountManager = ({
                   visibleMainPassword,
                   mainPassword,
                   updateMainPassword,
                   toggleMainPasswordVisibility,
                   unlockPasswords,
                   isRegistered,
                   clearStorage
               }: any) => {
    const {darkMode} = DarkModeEngine();

    return (
        <>
            <div
                className="text-center mb-6 mx-auto flex justify-center items-center space-x-2">
                <input type={visibleMainPassword ? 'text' : 'password'}
                       value={mainPassword}
                       placeholder={isRegistered ? "Insert main password" : "Create a main password"}
                       onChange={(e) => updateMainPassword(e.target.value)}
                       className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full max-w-xs`}/>
                <button onClick={toggleMainPasswordVisibility}
                        className="text-gray-500 flex-shrink-0">
                    {visibleMainPassword ? <FaEyeSlash width={200} height={200}/> : <FaEye/>}
                </button>
            </div>
            <div className="mt-4 text-center">
                <TacoButton type={"button"} onClick={unlockPasswords} text={isRegistered ? "Unlock" : "Register"}/>
            </div>
            {isRegistered ?
                <div className="flex items-center justify-center gap-1 text-sm mt-4"><p className="text-gray-400">forgot
                    main password?</p>
                    <button className="text-blue-400 underline" title={"this action removes all saved passwords."}
                            onClick={clearStorage}>clear
                        storage
                    </button>
                </div> : <></>}
        </>
    );
};

export default AccountManager;
