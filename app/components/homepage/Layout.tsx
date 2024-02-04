import React from 'react';
import Image from 'next/image';
import calcLogo from '../../../public/calcLogo.png';
import fileConverterLogo from '../../../public/fileConverterLogo.png';
import youtubeToMp3Logo from '../../../public/youtubeToMp3Logo.png';
import qrCodeGeneratorLogo from '../../../public/qrCodeGeneratorLogo.png';
import Footer from "@/app/components/public/Footer";
import TacoLogo from "@/app/components/public/TacoLogo";
import NavBar from "@/app/components/homepage/NavBar";

const Layout: React.FC = () => {
    return (
        <>
            <header className="bg-gray-100 py-2.5 shadow">
                <title>taco | homepage</title>
                <TacoLogo></TacoLogo>
                <NavBar></NavBar>
            </header>

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

                {/* Altre sezioni per altre categorie */}
            </main>

            <Footer></Footer>
        </>
    );
};

export default Layout;
