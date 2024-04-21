'use client'

import React from 'react';
import tacoConverterLogo from '@/public/tacoConverterLogo.png';
import tacoCalcLogo from '@/public/tacoCalcLogo.png';
import tacoEncoderLogo from '@/public/tacoEncoderLogo.png';
import tacoPasswords from '@/public/tacoPasswordsLogo.png';
import tacoQRLogo from '@/public/tacoQRLogo.png';
import tacoPaletteLogo from '@/public/tacoPaletteLogo.png';
import tacoDropLogo from '@/public/tacoDropLogo.png';
import tacoTomatoLogo from '@/public/tacoTomatoLogo.png';
import tacoJsonLogo from '@/public/tacoJsonLogo.png';
import tacoIPLogo from '@/public/tacoIPLogo.png';
import Header from "@/app/components/public/Header";
import Tool from "@/app/components/homepage/Tool";
import SearchEngine from "@/app/components/homepage/SearchEngine";

const Layout: React.FC = () => {

    const tools = [
        {
            logo: tacoConverterLogo,
            toolLink: "/tools/converter",
            toolName: "taco converter",
            category: "converter",
            tags: ["taco", "file", "image", "format", "document converter", "pdf converter"]
        },
        {
            logo: tacoQRLogo,
            toolLink: "/tools/qrcode",
            toolName: "taco QR",
            category: "generator",
            tags: ["taco", "QR code", "security", "scan", "mobile marketing", "contactless information sharing"]
        },
        {
            logo: tacoDropLogo,
            toolLink: "/tools/drop",
            toolName: "taco drop",
            category: "generator",
            tags: ["taco", "air drop", "sharing tool", "link", "qr code", "file"],
        },
        {
            logo: tacoEncoderLogo,
            toolLink: "/tools/encoder",
            toolName: "taco encoder",
            category: "converter",
            tags: ["taco", "data encoding", "security", "code obfuscation", "encryption", "text obfuscation"]
        },
        {
            logo: tacoIPLogo,
            toolLink: "/tools/public-ip",
            toolName: "taco IP",
            category: "generator",
            tags: ["public ip", "network details", "my ip", "personal address", "network security", "internet connectivity"]
        },
        {
            logo: tacoTomatoLogo,
            toolLink: "/tools/tomato",
            toolName: "taco tomato",
            category: "other",
            tags: ["taco", "tomato technique", "tomato", "timer app", "study", "educational"]
        },
        {
            logo: tacoPasswords,
            toolLink: "/tools/passwords",
            toolName: "taco passwords",
            category: "other",
            tags: ["taco", "password generator", "security", "strong passwords", "account security", "password manager"]
        },
        {
            logo: tacoJsonLogo,
            toolLink: "/tools/json",
            toolName: "taco JSON",
            category: "formatter",
            tags: ["taco", "json validator", "json formatter", "code review", "api tools", "body"]
        },
        {
            logo: tacoPaletteLogo,
            toolLink: "/tools/palette",
            toolName: "taco palette",
            category: "generator",
            tags: ["taco", "color scheme", "design tool", "palette generator", "web design", "interior design inspiration"]
        },
        {
            logo: tacoCalcLogo,
            toolLink: "/tools/calc",
            toolName: "taco calc",
            category: "other",
            tags: ["taco", "calculator", "math tool", "computation", "financial calculations", "educational tool"]
        },
    ];


    const {filteredTools, setSearchValue} = SearchEngine(tools);

    return (
        <div className="m-0 p-0">
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
