'use client'
import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import Engine from "@/app/components/account/Engine";
import SignInLayout from "@/app/components/account/sign-in/Layout";

const Layout: NextPage = () => {

    const {isAuthenticated} = Engine();
    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | drop"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                {isAuthenticated ? (<></>) : (<SignInLayout></SignInLayout>)}
            </main>
        </div>
    );
};

export default Layout;


