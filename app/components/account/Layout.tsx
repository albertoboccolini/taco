'use client'
import React from 'react';
import { NextPage } from "next";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import Engine from "@/app/components/account/Engine";
import SignInLayout from "@/app/components/account/sign-in/Layout";
import TacoButton from "@/app/components/public/TacoButton";
import TacoPage from "@/app/components/public/TacoPage";
import TacoInput from '../public/TacoInput';
import TacoInputPassword from '../public/TacoInputPassword';

const Layout: NextPage = () => {

    const { isAuthenticated, logout, name, surname, email, apiKey, password, togglePasswordVisibility, visiblePassword } = Engine();
    const { darkMode } = DarkModeEngine();

    return (
        <TacoPage title={isAuthenticated ? "taco | account" : "taco | sign-in"}>
            {isAuthenticated ? (<div className="text-center p-5 m-auto">
                <div className="mx-auto max-w-md space-y-8">
                    <div
                        className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>
                        <h1 className="font-bold text-2xl mb-6">See your account details</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <label
                                    className="font-bold min-w-[50px] md:min-w-[75px] mt-4 mx-4">Name:</label>
                                <TacoInput
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    disabled
                                    type={"text"}
                                    maxLength={256}
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <label
                                    className="font-bold min-w-[50px] md:min-w-[75px] mt-4 mx-4">Surname:</label>
                                <TacoInput
                                    id="surname"
                                    placeholder="Surname"
                                    value={surname}
                                    disabled
                                    type={"text"}
                                    maxLength={256}
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <label
                                    className="font-bold min-w-[50px] md:min-w-[75px] mt-4 mx-4">E-Mail:</label>
                                <TacoInput
                                    id="email"
                                    placeholder="E-Mail"
                                    value={email}
                                    disabled
                                    type={"text"}
                                    maxLength={256}
                                />
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <label
                                    className="font-bold min-w-[50px] md:min-w-[75px] mx-4">Password:</label>
                                <TacoInputPassword disabled maxLength={30} visiblePassword={visiblePassword} value={password} autoComplete='off' onChange={() => { }} onClick={togglePasswordVisibility} />
                            </div>
                            <div className="flex items-center gap-4">
                                <label
                                    className="font-bold min-w-[50px] md:min-w-[75px] mt-4 mx-4">API Key:</label>
                                <TacoInput
                                    id="api_key"
                                    placeholder="API Key"
                                    value={apiKey}
                                    disabled
                                    type={"text"}
                                    maxLength={256}
                                />
                            </div>
                        </div>

                        <div className="block text-center mt-4">
                            <TacoButton type={"button"} onClick={logout} text={"Logout"} />
                        </div>
                    </div>
                </div>
            </div>) : (<SignInLayout></SignInLayout>)}
        </TacoPage>
    );
};

export default Layout;