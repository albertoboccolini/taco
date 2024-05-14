'use client'

import React from 'react';
import {NextPage} from "next";

;
import TacoButton from "@/app/components/public/TacoButton";
import Engine from "@/app/components/tools/public-ip/Engine";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";
import tacoIPLogo from "@/public/tacoIPLogo.png";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Layout: NextPage = () => {

    const {ipDetails, copyPublicIPToClipboard, downloadPDF} = Engine();
    const {darkMode} = DarkModeEngine();

    return (
        <TacoPage title={"taco | public-ip"}>
            <TacoCard logo={tacoIPLogo} toolName={"taco IP"} cardDimension={"md"}>
                <p className="text-center text-sm text-gray-400">
                    If you don&#39;t see the information correctly, <br/>
                    try disabling AD Block and refreshing the page.
                </p>
                <div
                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} rounded-xl py-8 mx-0 lg:mx-6 mt-4 shadow-xl`}>
                    {ipDetails ? (
                        Object.entries(ipDetails).filter(([key, _]) => key.toLowerCase() !== 'readme').map(([key, value]) => (
                            <p key={key}
                               className="capitalize font-semibold">{`${ key === "ip" ? key.toUpperCase() : key.toLowerCase()}: ${value}`}</p>
                        ))
                    ) : (
                        <p className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} font-semibold`}>Loading...</p>
                    )}
                </div>
                <div className="block text-center mt-4">
                    <TacoButton text="Copy IP" onClick={copyPublicIPToClipboard} type="button"/>
                    <TacoButton text="Download details" onClick={downloadPDF} type="button"/>
                </div>
            </TacoCard>
        </TacoPage>

    );
};

export default Layout;

