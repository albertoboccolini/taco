'use client'

import React, {ReactNode, useState} from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import qrCodeGeneratorLogo from "/public/qrCodeGeneratorLogo.png";
import Image from "next/image";
import {Engine} from "@/app/components/tools/qrcode/Engine";

const Layout: NextPage = () => {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState<ReactNode>(null);

    const {generateQRCode} = Engine();

    const handleGenerate = () => {
        const qrCodeComponent = generateQRCode(url);
        setQrCode(qrCodeComponent);
    };

    return (
        <div className="text-gray-800 bg-white m-0 p-0">
            <div className="shadow">
                <Header title={"taco | qrcode"}/>
            </div>
            <main className="container mx-auto flex flex-col items-center space-y-8 px-4 py-8 md:max-w-4xl">
                <section className="flex w-full flex-col items-center gap-4">
                    <div className="mb-4 flex w-full justify-center">
                        <Image src={qrCodeGeneratorLogo}
                               alt="File Converter"
                               width={100} height={100}
                               className="m-auto"/>
                    </div>
                    <h1 className="text-2xl font-bold text-black">taco QR</h1>
                    <p className="text-center text-sm text-gray-400">
                        Enter something and press &quot;Generate&quot; to create a QR code.
                    </p>
                    <input placeholder="Something to encode"
                           className="mt-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md bg-white px-4 py-2 shadow-lg"
                           type="text"
                           value={url}
                           onChange={(e) => setUrl(e.target.value)}/>
                    <button onClick={handleGenerate}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 mx-2 my-2">
                        Generate
                    </button>
                    {qrCode}
                </section>
            </main>
        </div>
    );
};

export default Layout;