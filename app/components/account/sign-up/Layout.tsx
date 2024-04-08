'use client'
import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import TacoButton from "@/app/components/public/TacoButton";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Engine} from "@/app/components/account/sign-up/Engine";

const Layout: NextPage = () => {

    const {
        updateEmail,
        updateName,
        name,
        updateSurname,
        surname,
        email,
        visiblePassword,
        password,
        updatePassword,
        togglePasswordVisibility,
        signUp
    } = Engine();
    const {darkMode} = DarkModeEngine();

    return (

        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | drop"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>
                            <h1 className="font-bold text-2xl mb-6">Welcome to taco</h1>
                            <p className="text-center text-sm text-gray-400">
                                We need some of your data, after sign-up process, we can do some great things together.
                            </p>
                            <div className="flex flex-col mt-8 items-center space-y-4">
                                <input
                                    placeholder="Name"
                                    onChange={(e) => updateName(e.target.value)}
                                    value={name}
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full max-w-xs`}
                                    type="text"/>
                                <input
                                    placeholder="Surname"
                                    onChange={(e) => updateSurname(e.target.value)}
                                    value={surname}
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full max-w-xs`}
                                    type="text"/>
                                <input
                                    placeholder="E-Mail"
                                    onChange={(e) => updateEmail(e.target.value)}
                                    value={email}
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full max-w-xs`}
                                    type="email"/>
                                <div className="relative w-full max-w-xs">
                                    <input type={visiblePassword ? 'text' : 'password'}
                                           value={password}
                                           placeholder="Password"
                                           onChange={(e) => updatePassword(e.target.value)}
                                           className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full pr-10`}
                                    />
                                    <button onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                        {visiblePassword ? <FaEyeSlash/> : <FaEye/>}
                                    </button>
                                </div>
                            </div>
                            <div className="block text-center mt-4">
                                <TacoButton type={"button"} onClick={signUp} text={"Sign-up"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default Layout;

