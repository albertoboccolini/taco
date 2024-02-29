'use client'

import React, {useState} from 'react'; // Importa useState da React
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import TacoButton from "@/app/components/public/TacoButton";
import Image from "next/image";
import paletteLogo from "/public/paletteLogo.png";
import {Engine} from "@/app/components/tools/palette/Engine";

const Layout: NextPage = () => {

    const {selectedColor, setSelectedColor, generatedColors, handleGenerateColors, isLight} = Engine();

    return (
        <div className="text-gray-800 bg-white m-0 p-0">
            <div className="shadow">
                <Header title={"taco | palette"}/>
            </div>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div className="rounded-xl bg-white px-8 py-6 shadow-xl">
                            <Image src={paletteLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco palette"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl mb-6">taco palette</h1>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                {/* Selettore di colore modificabile */}
                                <div
                                    className="flex flex-col items-center justify-center p-4 rounded-md border border-gray-200 dark:border-gray-800">
                                    <input type="color" value={selectedColor}
                                           onChange={(e) => setSelectedColor(e.target.value)}
                                           className="w-16 h-16 rounded border border-gray-300 dark:border-gray-700 cursor-pointer"/>
                                    <span className="mt-2 text-sm text-gray-500">Select Color</span>
                                </div>
                                {/* Colori generati non modificabili */}
                                {generatedColors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 rounded-md border border-gray-200 dark:border-gray-800"
                                        style={{backgroundColor: color}}>
                                        <div className="w-16 h-16 rounded"/>
                                        <span className="mt-2 text-sm"
                                              style={{color: isLight(color) ? '#000000' : '#FFFFFF'}}>{color.toUpperCase()}</span>
                                    </div>
                                ))}
                            </div>
                            <TacoButton type={"button"} text={"Generate"} onClick={handleGenerateColors}/>
                            <TacoButton type={"button"} text={"Download"}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;



