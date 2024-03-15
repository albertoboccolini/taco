'use client'

import React from 'react';
import fileConverterLogo from '/public/fileConverterLogo.png';
import calcLogo from '/public/calcLogo.png';
import encoderLogo from '/public/encoderLogo.png';
import passwordLogo from '/public/passwordLogo.png';
import qrCodeGeneratorLogo from '/public/qrCodeGeneratorLogo.png';
import paletteLogo from '/public/paletteLogo.png';
import Header from "@/app/components/public/Header";
import Tool from "@/app/components/homepage/Tool";
import SearchEngine from "@/app/components/homepage/SearchEngine";

const Layout: React.FC = () => {

    const tools = [
        {logo: fileConverterLogo, toolLink: "/tools/converter", toolName: "taco converter", category: "converter"},
        {logo: qrCodeGeneratorLogo, toolLink: "/tools/qrcode", toolName: "taco qr code", category: "generator"},
        {logo: encoderLogo, toolLink: "/tools/encoder", toolName: "taco encoder", category: "converter"},
        {logo: passwordLogo, toolLink: "/tools/passwords", toolName: "taco passwords", category: "other"},
        {logo: paletteLogo, toolLink: "/tools/palette", toolName: "taco palette", category: "generator"},
        {logo: calcLogo, toolLink: "/tools/calc", toolName: "taco calc", category: "other"}
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
