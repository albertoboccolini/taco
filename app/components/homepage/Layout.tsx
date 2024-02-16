'use client'

import React, {useState} from 'react';
import fileConverterLogo from '/public/fileConverterLogo.png';
import calcLogo from '/public/calcLogo.png';
import encoderLogo from '/public/encoderLogo.png';
import qrCodeGeneratorLogo from '/public/qrCodeGeneratorLogo.png';
import NavigationBar from "@/app/components/homepage/NavigationBar";
import Header from "@/app/components/public/Header";
import Tool from "@/app/components/homepage/Tool";

const Layout: React.FC = () => {

    const [activeSection, setActiveSection] = useState('all');

    const handleSectionChange = (section: string) => {
        setActiveSection(section);
    };


    return (
        <div className="text-gray-800 bg-white m-0 p-0">
            <div className="shadow">
                <Header title={"taco | homepage"}/>
                <NavigationBar onSectionChange={handleSectionChange}></NavigationBar>
            </div>

            <main className="text-center p-5 m-auto">
                <Tool logo={fileConverterLogo} toolLink={"/tools/converter"} category={"converter"}
                      activeSection={activeSection}></Tool>
                <Tool logo={qrCodeGeneratorLogo} toolLink={"/tools/qrcode"} category={"generator"}
                      activeSection={activeSection}></Tool>
                <Tool logo={calcLogo} toolLink={"/tools/calc"} category={"other"}
                      activeSection={activeSection}></Tool>
                <Tool logo={encoderLogo} toolLink={"/tools/encoder"} category={"converter"}
                      activeSection={activeSection}></Tool>
            </main>
        </div>
    );
};

export default Layout;
