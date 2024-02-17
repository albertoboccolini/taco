import React from 'react';
import { NextPage } from "next";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import passwordLogo from "/public/passwordLogo.png";

const Layout: NextPage = () => {
    return (
        <div className="text-gray-800 bg-white m-0 p-0">
            <div className="shadow">
                <Header title={"taco | passwords"}/>
            </div>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-left p-5 m-auto">
                    <div className="mx-auto max-w-4xl space-y-8">
                        <div className="rounded-xl bg-white px-8 py-6 shadow-xl">
                            <Image src={passwordLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco converter"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl mb-6">taco passwords</h1>
                            <table className="w-full text-sm">
                                <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-800">
                                    <th className="p-2 text-left">Website</th>
                                    <th className="p-2 text-left">Username</th>
                                    <th className="p-2 text-left">Password</th>
                                    <th className="p-2 text-left">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                                    <td className="p-2">example.com</td>
                                    <td className="p-2">user@example.com</td>
                                    <td className="p-2">********</td>
                                    <td className="p-2">
                                        <div className="flex text-center">
                                            <button type="submit"
                                                    className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                                Copy
                                            </button>
                                            <button type="button"
                                                    className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                                Modify
                                            </button>
                                            <button type="button"
                                                    className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div></div>
                    </div>
            </main>
        </div>
    );
};

export default Layout;
