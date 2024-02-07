'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import calcLogo from '/public/calcLogo.png';
import fileConverterLogo from '/public/fileConverterLogo.png';
import youtubeToMp3Logo from '/public/youtubeToMp3Logo.png';
import qrCodeGeneratorLogo from '/public/qrCodeGeneratorLogo.png';
import NavigationBar from "@/app/components/homepage/NavigationBar";
import Header from "@/app/components/public/Header";

const Layout: React.FC = () => {
    // Set 'all' as the default value to show all icons initially
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

            <main className="p-5 m-auto">
                <div className="text-center p-5 m-auto" id="calcolatori">
                    {(activeSection === 'all' || activeSection === 'converter') && (
                        <a href="/tools/converter" className="inline-block m-2.5 no-underline text-gray-800">
                            <Image src={fileConverterLogo} alt="taco converter" width={100} height={100}/>
                        </a>
                    )}
                    {(activeSection === 'all' || activeSection === 'converter') && (
                        <a href="#/tools/youtubeMp3Converter"
                           className="inline-block m-2.5 no-underline text-gray-800">
                            <Image src={youtubeToMp3Logo} alt="taco youtube to mp3" width={100} height={100}/>
                        </a>
                    )}
                    {/* Add similar conditions for other icons/sections */}
                    {(activeSection === 'all' || activeSection === 'generator') && (
                        <a href="#/tools/qrCodeGenerator" className="inline-block m-2.5 no-underline text-gray-800">
                            <Image src={qrCodeGeneratorLogo} alt="taco qr code generator" width={100} height={100}/>
                        </a>
                    )}
                    {(activeSection === 'all' || activeSection === 'other') && (
                        <a href="/tools/calc" className="inline-block m-2.5 no-underline text-gray-800">
                            <Image src={calcLogo} alt="calc" width={100} height={100}/>
                        </a>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Layout;
