'use client'
import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import Engine from "@/app/components/account/Engine";
import SignInLayout from "@/app/components/account/sign-in/Layout";
import TacoButton from "@/app/components/public/TacoButton";

const Layout: NextPage = () => {

    const {isAuthenticated, logout} = Engine();
    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | drop"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                {isAuthenticated ? (<div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>

                            <div className="block text-center mt-4">
                                <TacoButton type={"button"} onClick={logout} text={"Logout"}/>
                            </div>
                        </div>
                    </div>
                </div>) : (<SignInLayout></SignInLayout>)}
            </main>
        </div>
    );
};

export default Layout;


