import React from 'react';
import Image from 'next/image';
import calcLogo from '/public/calcLogo.png';
import fileConverterLogo from '/public/fileConverterLogo.png';
import youtubeToMp3Logo from '/public/youtubeToMp3Logo.png';
import qrCodeGeneratorLogo from '/public/qrCodeGeneratorLogo.png';
import NavigationBar from "@/app/components/homepage/NavigationBar";
import Header from "@/app/components/public/Header";

const Layout: React.FC = () => {
    return (
        <div className="text-gray-800 bg-white m-0 p-0">

            <div className="shadow">
                <Header title={"taco | homepage"}/>
                <NavigationBar></NavigationBar>
            </div>

            <main className="p-5 m-auto">
                <div className="text-center p-5 m-auto" id="calcolatori">
                    <a href="" target="_blank" className="inline-block m-2.5 no-underline text-gray-800">
                        <Image src={calcLogo} className="" alt="Calcolatore" width={100} height={100}/>
                    </a>
                    <a href="../../tools/converter"
                       className="inline-block m-2.5 no-underline text-gray-800">
                        <Image src={fileConverterLogo} className="" alt="File Converter" width={100} height={100}/>
                    </a>
                    <a href="" target="_blank"
                       className="inline-block m-2.5 no-underline text-gray-800">
                        <Image src={youtubeToMp3Logo} className="" alt="Youtube to Mp3" width={100} height={100}/>
                    </a>
                    <a href="" target="_blank"
                       className="inline-block m-2.5 no-underline text-gray-800">
                        <Image src={qrCodeGeneratorLogo} className="" alt="Qr Code generator" width={100} height={100}/>
                    </a>
                    {/* Altri tool nella categoria Calcolatori */}
                </div>
            </main>

        </div>
    );
};

export default Layout;
