'use client'

import React from 'react';
import { NextPage } from "next";
import TacoButton from "@/app/components/public/TacoButton";
import tacoPaletteLogo from "@/public/tacoPaletteLogo.png";
import { Engine } from "@/app/components/tools/palette/Engine";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";
import TacoInputColor from '../../public/TacoInputColor';

const Layout: NextPage = () => {

    const { selectedColor, setSelectedColor, generatedColors, handleGenerateColors, downloadPalette } = Engine();

    return (
        <TacoPage title={"taco | palette"}>
            <TacoCard logo={tacoPaletteLogo} toolName={"taco palette"} cardDimension={"md"}>
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <TacoInputColor selectedColor={selectedColor} onChange={(e: any) => setSelectedColor(e.target.value)} />
                    {generatedColors.slice(1).map((color, index) => (
                        <TacoInputColor key={index} selectedColor={color} disabled={true} />
                    ))}
                </div>
                <TacoButton type={"button"} text={"Generate"} onClick={handleGenerateColors} />
                <TacoButton type={"button"} text={"Download"} onClick={downloadPalette} />
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;




