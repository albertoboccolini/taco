'use client'

import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import passwordLogo from "/public/passwordLogo.png";
import {Engine} from "@/app/components/tools/passwords/Engine";
import {FaEye, FaEyeSlash} from 'react-icons/fa';

const Layout: NextPage = () => {

    const {
        passwords,
        savePasswords,
        updatePassword,
        addPassword,
        deletePassword,
        visiblePasswords,
        togglePasswordVisibility,
        mainPassword,
        toggleMainPasswordVisibility,
        visibleMainPassword,
        updateMainPassword,
        unlockPasswords,
        isAuthenticated
    } = Engine();

    return (
        <div className="bg-white text-gray-800 m-0 p-0">
            <div className="shadow">
                <Header title={"taco | passwords"}/>
            </div>
            {!isAuthenticated ? (
                <main className="m-auto max-w-4xl p-4 sm:p-10">
                    <div className="text-center p-5 m-auto">
                        <div className="space-y-8 mx-auto max-w-4xl">
                            <div className="bg-white rounded-xl shadow-xl px-8 py-6">
                                <Image src={passwordLogo}
                                       className="m-auto text-2xl font-bold"
                                       alt="taco converter"
                                       width={100} height={100}/>
                                <h1 className="text-2xl font-bold text-center mb-6">taco passwords</h1>
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
                                            className="mx-2 my-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                        Unlock
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>) : (<main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-left p-5 m-auto">
                    <div className="mx-auto max-w-4xl space-y-8">
                        <div className="rounded-xl bg-white px-8 py-6 shadow-xl">
                            <Image src={passwordLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco converter"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl text-center mb-6">taco passwords</h1>
                            <p className="text-center text-sm mb-8 text-gray-400">
                                Passwords stored in local storage may be easily decrypted in a data breach, use taco
                                passwords at your own risk.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-800">
                                        <th className="p-2 text-left">Website</th>
                                        <th className="p-2 text-left">Username</th>
                                        <th className="p-2 text-left">Password</th>
                                        <th className="p-2 text-left">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {passwords.length > 0 ? (
                                        passwords.map((password, index) => (
                                            <tr key={index}
                                                className="border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                                                <td className="p-2">
                                                    <input type="text"
                                                           className="shadow-md border h-8 font-normal rounded-lg w-full"
                                                           value={password.website}
                                                           onChange={(e) => updatePassword(index, 'website', e.target.value)}/>
                                                </td>
                                                <td className="p-2">
                                                    <input type="text" value={password.username}
                                                           className="shadow-md border h-8 font-normal rounded-lg w-full"
                                                           onChange={(e) => updatePassword(index, 'username', e.target.value)}/>
                                                </td>
                                                <td className="p-2 flex items-center">
                                                    <input type={visiblePasswords[index] ? 'text' : 'password'}
                                                           value={password.password}
                                                           onChange={(e) => updatePassword(index, 'password', e.target.value)}
                                                           className="shadow-md border h-8 font-normal rounded-lg w-full"/>
                                                    <button onClick={() => togglePasswordVisibility(index)}
                                                            className="text-gray-500 ml-2">
                                                        {visiblePasswords[index] ? <FaEyeSlash/> : <FaEye/>}
                                                    </button>
                                                </td>
                                                <td className="p-2">
                                                    <div className="flex items-center justify-start space-x-2">
                                                        <button type="button" onClick={() => savePasswords(index)}
                                                                className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg">Save
                                                        </button>
                                                        <button type="button" onClick={() => deletePassword(index)}
                                                                className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg">Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4}
                                                className="text-center font-normal text-gray-400 mx-auto p-5">
                                                No passwords found.
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="block text-center mt-4">
                            <button type="submit" onClick={addPassword}
                                    className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                Add Password
                            </button>
                        </div>
                    </div>
                </div>
            </main>)}
        </div>
    );
};

export default Layout;
