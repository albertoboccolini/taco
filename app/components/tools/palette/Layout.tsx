'use client'

import React from 'react';
import {NextPage} from "next";
import TacoButton from "@/app/components/public/TacoButton";
import tacoPaletteLogo from "@/public/tacoPaletteLogo.png";
import {Engine} from "@/app/components/tools/palette/Engine";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";

const Layout: NextPage = () => {

    const {selectedColor, setSelectedColor, generatedColors, handleGenerateColors, isLight, downloadPalette} = Engine();

    return (
        <TacoPage title={"taco | palette"}>
            <TacoCard logo={tacoPaletteLogo} toolName={"taco palette"}>
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
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;




