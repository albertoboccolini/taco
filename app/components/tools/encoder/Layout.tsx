'use client'

import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import encoderLogo from '/public/encoderLogo.png';

const Layout: NextPage = () => {

    return (
        <div className="text-gray-800 bg-white m-0 p-0">

            <div className="shadow">
                <Header title={"taco | encoder"}/>
            </div>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div className="rounded-xl bg-white px-8 py-6 shadow-xl">
                            <Image src={encoderLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco converter"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl mb-6">taco encoder</h1>
                            <div className="grid gap-2">
                                <div className="flex flex-col gap-1.5">
                                        <textarea
                                            className="mt-4 w-full max-w-xl sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md bg-white px-4 py-2 shadow-lg"
                                            id="output" placeholder="Something..."/>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="block rounded-lg">
                                    <select
                                        className="block m-auto mt-4 py-2 bg-white h-full border border-gray-300 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                                        <option value="BASE64">Base64</option>
                                    </select>
                                </div>
                                <div className="block text-center mt-4">
                                    <button type="submit"
                                            className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                        Encode
                                    </button>
                                    <button type="button"
                                            className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                        Decode
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default Layout;

