'use client'

import React, {useState} from 'react';
import fileConverterLogo from '/public/fileConverterLogo.png';
import calcLogo from '/public/calcLogo.png';
import encoderLogo from '/public/encoderLogo.png';
import passwordLogo from '/public/passwordLogo.png';
import qrCodeGeneratorLogo from '/public/qrCodeGeneratorLogo.png';
import paletteLogo from '/public/paletteLogo.png';
import Header from "@/app/components/public/Header";
import Tool from "@/app/components/homepage/Tool";

const Layout: React.FC = () => {

    return (
        <div className="text-gray-800 bg-white m-0 p-0">
            <Header title={"taco | homepage"}/>
            <main className="text-center p-5 m-auto">
                <Tool logo={fileConverterLogo} toolLink={"/tools/converter"}></Tool>
                <Tool logo={qrCodeGeneratorLogo} toolLink={"/tools/qrcode"}></Tool>
                <Tool logo={passwordLogo} toolLink={"/tools/passwords"}></Tool>
                <Tool logo={encoderLogo} toolLink={"/tools/encoder"}></Tool>
                <Tool logo={paletteLogo} toolLink={"/tools/palette"}></Tool>
                <Tool logo={calcLogo} toolLink={"/tools/calc"}></Tool>
            </main>
        </div>
    );
};

export default Layout;
