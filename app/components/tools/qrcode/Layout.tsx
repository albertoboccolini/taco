'use client'

import React from 'react';
import { NextPage } from "next";
import tacoQRLogo from "@/public/tacoQRLogo.png";
import { Engine } from "@/app/components/tools/qrcode/Engine";
import TacoButton from "@/app/components/public/TacoButton";
import TacoCard from "@/app/components/public/TacoCard";
import TacoPage from "@/app/components/public/TacoPage";
import TacoInput from '../../public/TacoInput';

const Layout: NextPage = () => {

    const { string, setString, qrCode, handleGenerate, downloadQRCode } = Engine();

    return (
        <TacoPage title={"taco | qrcode"}>
            <TacoCard logo={tacoQRLogo} toolName={"taco QR"} cardDimension={"md"}>
                <p className="text-center text-sm text-gray-400">
                    Enter something and press &quot;Generate&quot; to create a QR code.
                </p>
                <TacoInput placeholder={"Something..."} type={"text"} value={string} onChange={(e: any) => setString(e.target.value)} maxLength={256} />
                <div className="block text-center mt-4">
                    <TacoButton type={"button"} onClick={handleGenerate} text={"Generate"} />
                    <TacoButton type={"button"} onClick={downloadQRCode} text={"Download"} />
                </div>
                <div className="flex items-center justify-center mt-4">
                    {qrCode}</div>
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;