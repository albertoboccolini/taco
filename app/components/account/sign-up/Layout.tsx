'use client'
import React from 'react';
import { NextPage } from "next";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import TacoButton from "@/app/components/public/TacoButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Engine } from "@/app/components/account/sign-up/Engine";
import TacoPage from "@/app/components/public/TacoPage";
import TacoInput from '../../public/TacoInput';
import TacoInputPassword from '../../public/TacoInputPassword';

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
    const { darkMode } = DarkModeEngine();

    return (

        <TacoPage title={"taco | sign-up"}>
            <div className="text-center p-5 m-auto">
                <div className="mx-auto max-w-md space-y-8">
                    <div
                        className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>
                        <h1 className="font-bold text-2xl mb-6">Welcome to taco</h1>
                        <p className="text-center text-sm text-gray-400">
                            We need some of your data, after sign-up process, we can do some great things together.
                        </p>
                        <div className="flex flex-col mt-8 items-center space-y-4">
                            <TacoInput
                                placeholder="Name"
                                onChange={(e: any) => updateName(e.target.value)}
                                value={name}
                                type="text"
                                maxLength={256}
                                disabled={false}
                                id={"name"}
                            />
                            <TacoInput
                                placeholder="Surname"
                                onChange={(e: any) => updateSurname(e.target.value)}
                                value={surname}
                                type="text"
                                maxLength={256}
                                disabled={false}
                                id={"Surname"}
                            />
                            <TacoInput
                                placeholder="E-Mail"
                                onChange={(e: any) => updateEmail(e.target.value)}
                                value={email}
                                type="email"
                                maxLength={256}
                                disabled={false}
                                id={"email"}
                            />
                            <TacoInputPassword visiblePassword={visiblePassword} maxLength={30} value={password} onChange={(e: any) => updatePassword(e.target.value)} onClick={togglePasswordVisibility} />
                        </div>
                        <div className="block text-center mt-4">
                            <TacoButton type={"button"} onClick={signUp} text={"Sign-up"} />
                        </div>
                        <div className="flex items-center justify-center gap-1 text-sm mt-4"><p
                            className="text-gray-400">Are you already our friend?</p>
                            <button className="text-blue-400 underline" title={"account | sign-in"}
                                onClick={() => window.location.href = "/account"}>sign-in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </TacoPage>

    );
};

export default Layout;