'use client'

import React from 'react';
import { NextPage } from "next";
import TacoButton from "@/app/components/public/TacoButton";
import tacoJsonLogo from "@/public/tacoJsonLogo.png";
import Engine from "@/app/components/tools/json/Engine";
import TacoTextArea from "@/app/components/public/TacoTextArea";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";

const Layout: NextPage = () => {

    const { input, handleInputChange, formatAndValidateJSON, copyToClipboard } = Engine();

    return (
        <TacoPage title={"taco | json"}>
            <TacoCard logo={tacoJsonLogo} toolName={"taco JSON"} cardDimension={"md"}>
                <TacoTextArea value={input} onChange={handleInputChange} placeholder={"Enter JSON here..."} />
                <div className="block text-center mt-4">
                    <TacoButton type="button" onClick={formatAndValidateJSON}
                        text="Validate & Format" />
                    <TacoButton type="button" onClick={copyToClipboard} text="Copy to clipboard" />
                </div>
            </TacoCard>
        </TacoPage>

    );
};

export default Layout;