'use client'

import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import qrCodeGeneratorLogo from "/public/qrCodeGeneratorLogo.png";
import Image from "next/image";
import {Engine} from "@/app/components/tools/qrcode/Engine";

const Layout: NextPage = () => {

    const {string, setString, qrCode, handleGenerate} = Engine();
    
    return (
        <div className="text-gray-800 bg-white m-0 p-0">
            <div className="shadow">
                <Header title={"taco | qrcode"}/>
            </div>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div className="rounded-xl bg-white px-8 py-6 shadow-xl">
                            <section className="flex w-full flex-col items-center gap-4">
                                <div className="mb-4 flex w-full justify-center">
                                    <Image src={qrCodeGeneratorLogo}
                                           alt="taco QR"
                                           width={100} height={100}
                                           className="m-auto"/>
                                </div>
                                <h1 className="text-2xl font-bold text-black">taco QR</h1>
                                <p className="text-center text-sm text-gray-400">
                                    Enter something and press &quot;Generate&quot; to create a QR code.
                                </p>
                                <input placeholder="Something..."
                                       className="mt-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md bg-white px-4 py-2 shadow-lg"
                                       type="text"
                                       value={string}
                                       onChange={(e) => setString(e.target.value)}/>
                                <div className="block text-center mt-4">
                                    <button type="submit" onClick={handleGenerate}
                                            className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                        Generate
                                    </button>
                                    <button type="button"
                                            className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                        Download
                                    </button>
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