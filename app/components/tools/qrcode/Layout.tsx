'use client'

import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import tacoQRLogo from "@/public/tacoQRLogo.png";
import Image from "next/image";
import {Engine} from "@/app/components/tools/qrcode/Engine";
import TacoButton from "@/app/components/public/TacoButton";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Layout: NextPage = () => {

    const {string, setString, qrCode, handleGenerate, downloadQRCode} = Engine();
    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | qrcode"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl`}>
                            <section className="flex w-full flex-col items-center gap-4">
                                <div className="mb-4 flex w-full justify-center">
                                    <Image src={tacoQRLogo}
                                           alt="taco QR"
                                           width={100} height={100}
                                           className="m-auto"/>
                                </div>
                                <h1 className="text-2xl font-bold">taco QR</h1>
                                <p className="text-center text-sm text-gray-400">
                                    Enter something and press &quot;Generate&quot; to create a QR code.
                                </p>
                                <input placeholder="Something..."
                                       className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} mt-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md px-4 py-2 shadow-lg`}
                                       type="text"
                                       value={string}
                                       onChange={(e) => setString(e.target.value)}/>
                                <div className="block text-center mt-4">
                                    <TacoButton type={"button"} onClick={handleGenerate} text={"Generate"}/>
                                    <TacoButton type={"button"} onClick={downloadQRCode} text={"Download"}/>
                                </div>
                                {qrCode}
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;