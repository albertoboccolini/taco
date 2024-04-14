'use client'

import Image, {StaticImageData} from "next/image";
import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

interface TacoCardProps {
    children: React.ReactNode;
    logo: StaticImageData;
    toolName: string;
}

const TacoCard: React.FC<TacoCardProps> = ({children, logo, toolName}) => {

    const {darkMode} = DarkModeEngine();

    return (
        <div className="text-center p-5 m-auto">
            <div className="mx-auto max-w-md space-y-8">
                <div
                    className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl`}>
                    <Image src={logo}
                           className="font-bold text-2xl text-center m-auto"
                           alt={toolName}
                           width={100} height={100}/>
                    <h1 className="font-bold text-2xl mb-6">{toolName}</h1>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TacoCard;