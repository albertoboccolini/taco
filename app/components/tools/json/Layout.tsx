'use client'

import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import TacoButton from "@/app/components/public/TacoButton";
import tacoJsonLogo from "@/public/tacoJsonLogo.png";
import Engine from "@/app/components/tools/json/Engine";

const Layout: NextPage = () => {

    const {darkMode} = DarkModeEngine();
    const {input, handleInputChange, formatAndValidateJSON, copyToClipboard} = Engine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title="taco | json formatter" onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl`}>
                            <Image src={tacoJsonLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco json"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl mb-6">taco json</h1>
                            <textarea
                                className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} rounded-xl shadow-xl px-8 py-6 w-full h-64`}
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Enter JSON here..."
                            />
                            <div className="block text-center mt-4">
                                <TacoButton type="button" onClick={formatAndValidateJSON}
                                            text="Validate & Format"/>
                                <TacoButton type="button" onClick={copyToClipboard} text="Copy to clipboard"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;

