'use client'
import React from 'react';
import {NextPage} from "next";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import Engine from "@/app/components/account/Engine";
import SignInLayout from "@/app/components/account/sign-in/Layout";
import TacoButton from "@/app/components/public/TacoButton";
import TacoPage from "@/app/components/public/TacoPage";

const Layout: NextPage = () => {

    const {isAuthenticated, logout, name, surname, email, apiKey} = Engine();
    const {darkMode} = DarkModeEngine();

    return (
        <TacoPage title={isAuthenticated ? "taco | account" : "taco | sign-in"}>
            {isAuthenticated ? (<div className="text-center p-5 m-auto">
                <div className="mx-auto max-w-md space-y-8">
                    <div
                        className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>
                        <h1 className="font-bold text-2xl mb-6">See your account details</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <label htmlFor="name"
                                       className="font-bold min-w-[50px] md:min-w-[75px]">Name</label>
                                <input
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full pr-10`}
                                    disabled
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <label htmlFor="surname"
                                       className="font-bold min-w-[50px] md:min-w-[75px]">Surname</label>
                                <input
                                    id="surname"
                                    placeholder="Surname"
                                    value={surname}
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full pr-10`}
                                    disabled
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <label htmlFor="email"
                                       className="font-bold min-w-[50px] md:min-w-[75px]">E-Mail</label>
                                <input
                                    id="email"
                                    placeholder="E-Mail"
                                    value={email}
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full pr-10`}
                                    disabled
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <label htmlFor="api_key"
                                       className="font-bold min-w-[50px] md:min-w-[75px]">API Key</label>
                                <input
                                    id="api_key"
                                    placeholder="API Key"
                                    value={apiKey}
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full pr-10`}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="block text-center mt-4">
                            <TacoButton type={"button"} onClick={logout} text={"Logout"}/>
                        </div>
                    </div>
                </div>
            </div>) : (<SignInLayout></SignInLayout>)}
        </TacoPage>
    );
};

export default Layout;


