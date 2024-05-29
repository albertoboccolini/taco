'use client'
import React from 'react';
import { NextPage } from "next";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import TacoButton from "@/app/components/public/TacoButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Engine } from "@/app/components/account/sign-in/Engine";
import TacoInput from '../../public/TacoInput';
import TacoInputPassword from '../../public/TacoInputPassword';

const Layout: NextPage = () => {

    const {
        updateEmail,
        email,
        visiblePassword,
        password,
        updatePassword,
        togglePasswordVisibility,
        authenticate
    } = Engine();
    const { darkMode } = DarkModeEngine();

    return (

        <div className="text-center p-5 m-auto">
            <div className="mx-auto max-w-md space-y-8">
                <div
                    className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>
                    <h1 className="font-bold text-2xl mb-6">Welcome back to taco</h1>
                    <p className="text-center text-sm text-gray-400">
                        Please enter your e-mail and password so we can verify everything is good and we can back work
                        together.
                    </p>
                    <div className="flex flex-col mt-8 items-center space-y-4">
                        <TacoInput
                            placeholder="E-Mail"
                            onChange={(e: any) => updateEmail(e.target.value)}
                            value={email}
                            type="email"
                            id={"e-mail"}
                            maxLength={128}
                        />
                        <TacoInputPassword visiblePassword={visiblePassword} maxLength={30} value={password} onChange={(e: any) => updatePassword(e.target.value)} onClick={togglePasswordVisibility} />
                    </div>
                    <div className="block text-center mt-4">
                        <TacoButton type={"button"} onClick={authenticate} text={"Sign-in"} />
                    </div>
                    <div className="flex items-center justify-center gap-1 text-sm mt-4"><p
                        className="text-gray-400">Are you new around there?</p>
                        <button className="text-blue-400 underline" title={"account | sign-up"}
                            onClick={() => window.location.href = "/account/sign-up"}>sign-up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;