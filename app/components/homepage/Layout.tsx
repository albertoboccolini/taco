'use client'

import React from 'react';
import tacoConverterLogo from '@/public/tacoConverterLogo.png';
import tacoCalcLogo from '@/public/tacoCalcLogo.png';
import tacoEncoderLogo from '@/public/tacoEncoderLogo.png';
import tacoPasswords from '@/public/tacoPasswordsLogo.png';
import tacoQRLogo from '@/public/tacoQRLogo.png';
import tacoPaletteLogo from '@/public/tacoPaletteLogo.png';
import Header from "@/app/components/public/Header";
import Tool from "@/app/components/homepage/Tool";
import SearchEngine from "@/app/components/homepage/SearchEngine";

const Layout: React.FC = () => {

    const tools = [
        {logo: tacoConverterLogo, toolLink: "/tools/converter", toolName: "taco converter", category: "converter"},
        {logo: tacoQRLogo, toolLink: "/tools/qrcode", toolName: "taco QR", category: "generator"},
        {logo: tacoEncoderLogo, toolLink: "/tools/encoder", toolName: "taco encoder", category: "converter"},
        {logo: tacoPasswords, toolLink: "/tools/passwords", toolName: "taco passwords", category: "other"},
        {logo: tacoPaletteLogo, toolLink: "/tools/palette", toolName: "taco palette", category: "generator"},
        {logo: tacoCalcLogo, toolLink: "/tools/calc", toolName: "taco calc", category: "other"}
    ];

    const {filteredTools, setSearchValue} = SearchEngine(tools);

    return (
        <div className="text-gray-200 m-0 p-0">
            <Header title={"taco | homepage"}
                    onSearchChange={setSearchValue}/>
            <main className="text-center p-5 m-auto">
                {filteredTools.map((tool: any, index: any) => (
                    <Tool key={index} logo={tool.logo} toolLink={tool.toolLink} toolName={tool.toolName}></Tool>
                ))}
            </main>
        </div>
    );
};

export default Layout;
