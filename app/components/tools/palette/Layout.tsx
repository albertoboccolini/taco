'use client'

import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import TacoButton from "@/app/components/public/TacoButton";
import Image from "next/image";
import paletteLogo from "/public/paletteLogo.png";
import {Engine} from "@/app/components/tools/palette/Engine";
import SearchEngine from "@/app/components/homepage/SearchEngine";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Layout: NextPage = () => {

    const {selectedColor, setSelectedColor, generatedColors, handleGenerateColors, isLight, downloadPalette} = Engine();
    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | palette"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl`}>
                            <Image src={paletteLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco palette"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl mb-6">taco palette</h1>
                            <div className="grid grid-cols-1 gap-4 mb-6">
                                <div
                                    className="relative flex flex-col items-center justify-center p-4 rounded-md border-none"
                                    style={{backgroundColor: selectedColor}}>
                                    <input type="color" value={selectedColor}
                                           onChange={(e) => setSelectedColor(e.target.value)}
                                           className="w-full h-16 cursor-pointer opacity-0 absolute"/>
                                    <div className="w-fit h-16 rounded border-none"/>
                                    <span className="mt-2 text-sm text-gray-500"
                                          style={{color: isLight(selectedColor) ? '#000000' : '#FFFFFF'}}>{selectedColor.toUpperCase()}</span>
                                </div>
                                {/* Skip the first generated color if it's the same as the selectedColor */}
                                {generatedColors.slice(1).map((color, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 rounded-md border-none"
                                        style={{backgroundColor: color}}>
                                        <div className="w-16 h-16 rounded"/>
                                        <span className="mt-2 text-sm"
                                              style={{color: isLight(color) ? '#000000' : '#FFFFFF'}}>{color.toUpperCase()}</span>
                                    </div>
                                ))}
                            </div>
                            <TacoButton type={"button"} text={"Generate"} onClick={handleGenerateColors}/>
                            <TacoButton type={"button"} text={"Download"} onClick={downloadPalette}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;




