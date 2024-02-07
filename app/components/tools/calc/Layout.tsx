'use client'

import React from 'react';
import {NextPage} from "next";
import {Engine} from "@/app/components/tools/calc/Engine";
import Header from "@/app/components/public/Header";

const Layout: NextPage = () => {

    const {input, result, setInput, handleInputChange, calculateResult, clearInput, buttons} = Engine();

    return (
        <div className="text-gray-800 bg-white m-0 p-0">
            <div className="shadow">
                <Header title={"taco | calc"}/>
            </div>

            <main className="p-4 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="m-auto">
                        <div className="flex flex-col items-center justify-center mb-4">
                            <input
                                type="text"
                                value={input} placeholder="taco calc"
                                onChange={(e) => setInput(e.target.value)}
                                className="w-full bg-gray-200 text-gray-800 text-right h-16 rounded-md border-0 p-4 mb-2 shadow-inner disabled:bg-gray-200 disabled:cursor-not-allowed"
                                disabled
                            />
                            <div
                                className="text-lg font-semibold text-gray-700 bg-gray-100 w-full h-16 rounded-md p-4 shadow">{result.toString()}</div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-4">
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (button === 'C') clearInput();
                                        else if (button === '=') calculateResult();
                                        else handleInputChange(button);
                                    }}
                                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold h-12 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                                >
                                    {button}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;
