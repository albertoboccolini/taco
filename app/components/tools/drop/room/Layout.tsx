'use client'

import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import tacoDropLogo from "@/public/tacoDropLogo.png";
import TacoButton from "@/app/components/public/TacoButton";
import React from "react";
import Engine from "@/app/components/tools/drop/room/Engine";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Layout: NextPage = () => {

    const {fileName, fileURL, handleDownload} = Engine();
    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | drop"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>
                            <Image src={tacoDropLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco encoder"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl mb-6">{fileName || "Waiting for file..."}</h1>
                            {fileURL ? (
                                <TacoButton type={"button"} text={"Download"} onClick={handleDownload}/>) : null}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Layout;