'use client'

import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import tacoDropLogo from '@/public/tacoDropLogo.png';
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Layout: NextPage = () => {

    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | encoder"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl`}>
                            <Image src={tacoDropLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco encoder"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl mb-6">taco drop</h1>

                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default Layout;

