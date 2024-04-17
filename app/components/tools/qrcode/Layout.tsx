'use client'

import React from 'react';
import {NextPage} from "next";
import tacoQRLogo from "@/public/tacoQRLogo.png";
import {Engine} from "@/app/components/tools/qrcode/Engine";
import TacoButton from "@/app/components/public/TacoButton";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import TacoCard from "@/app/components/public/TacoCard";
import TacoPage from "@/app/components/public/TacoPage";

const Layout: NextPage = () => {

    const {string, setString, qrCode, handleGenerate, downloadQRCode} = Engine();
    const {darkMode} = DarkModeEngine();

    return (
        <TacoPage title={"taco | qrcode"}>
            <TacoCard logo={tacoQRLogo} toolName={"taco QR"}>
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
                <div className="flex items-center justify-center mt-4">
                    {qrCode}</div>
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;