import React from 'react';
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import TacoButton from "@/app/components/public/TacoButton";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import tacoPasswordsLogo from "@/public/tacoPasswordsLogo.png";
import TacoCard from "@/app/components/public/TacoCard";
import { Engine } from "@/app/components/tools/passwords/Engine";

const PasswordManager = () => {
    const { darkMode } = DarkModeEngine();

    const {
        passwords,
        addPassword,
        updatePassword,
        visiblePasswords,
        togglePasswordVisibility,
        savePassword,
        deletePassword,
        updatePasswordToDB,
        updatedPasswords,
        editState
    } = Engine();
    return (
        <TacoCard logo={tacoPasswordsLogo} toolName={"taco passwords"} cardDimension={"8xl"}>
            {
                passwords.length > 0 ? (
                    <div>
                        {passwords.map((password: any, index: any) => (
                            <div key={index}
                                className={`sm:flex-row flex items-center justify-center h-1/2 sm:gap-y-1 gap-x-4 gap-y-2 flex-col m-4 px-8 py-8 sm:py-2 ${darkMode ? "bg-taco-dark-primary/50" : "bg-white"} shadow-xl rounded-lg`}>
                                <input placeholder="Website"
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} h-1/2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md px-4 py-2.5 shadow-lg`}
                                    type="text" value={updatedPasswords[index]['website'] != password.website ? updatedPasswords[index]['website'] : password.website}
                                    onChange={(e) => updatePassword(index, 'website', e.target.value)} />
                                <input placeholder="Username"
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} h-1/2 w-full max-w-xs sm:max-w-sm rounded-md px-4 py-2.5 shadow-lg`}
                                    autoComplete='off'
                                    type="text" value={updatedPasswords[index]['username'] != password.username ? updatedPasswords[index]['username'] : password.username}
                                    onChange={(e: any) => updatePassword(index, 'username', e.target.value)} />
                                <div className="relative w-full h-1/2 max-w-2xl my-2">
                                    <input
                                        placeholder="Password"
                                        type={visiblePasswords[index] ? 'text' : 'password'}
                                        autoComplete='off'
                                        className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} py-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md px-4 shadow-lg`}
                                        value={updatedPasswords[index]['password'] != password.password ? updatedPasswords[index]['password'] : password.password}
                                        onChange={(e) => updatePassword(index, 'password', e.target.value)}
                                    />
                                    <button onClick={() => togglePasswordVisibility(index)}
                                        className="absolute inset-y-0 sm:right-0 right-3 pr-4 flex items-center text-gray-500">
                                        {visiblePasswords[index] ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <div className="flex flex-col w-full justify-center items-center">
                                    <TacoButton type="button"
                                        onClick={() => editState[index] ? updatePasswordToDB(index) : savePassword(index)}
                                        text={editState[index] ? 'Update' : 'Save'}
                                    />
                                    <TacoButton type="button" onClick={() => deletePassword(index)} text="Delete" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className="text-center flex flex-col gap-y-4 justify-center items-center font-normal text-gray-400 mx-auto p-5">
                        No passwords found.
                    </div>
                )
            }
            <TacoButton type={"button"} onClick={addPassword} text={"Add Password"} />
        </TacoCard>

    )
}

export default PasswordManager;