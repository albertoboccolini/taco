'use client'

import React from 'react';
import {NextPage} from "next";
import {Engine} from "@/app/components/tools/converter/Engine";
import Image from 'next/image';
import fileConverterImage from '../../../../public/fileConverterLogo.png';
import Footer from "@/app/components/public/Footer";
import TacoLogo from "@/app/components/public/TacoLogo";


const Layout: NextPage = () => {

    const {
        conversionType,
        conversionManager,
        handleFileChange,
        handleApiKeyChange,
        handleConversionManagerChange,
        handleConversionTypeChange,
        submitFileForConversion,
        downloadConvertedFile
    } = Engine();

    return (
        <div className="font-roboto text-gray-800 bg-white m-0 p-0">
            <header className="bg-gray-100 py-2.5 shadow">
                <title>taco | converter</title>
                <TacoLogo></TacoLogo>
            </header>
            <main className="p-10 m-auto max-w-4xl">
                <div className="text-center p-5 m-auto">
                    <Image src={fileConverterImage} className="font-bold text-2xl text-center m-auto"
                           alt="File Converter" width={100} height={100}/>
                    <h1 className="font-bold text-2xl mb-6">taco converter</h1>
                    <form onSubmit={submitFileForConversion}>
                        <input type="file" onChange={handleFileChange}
                               className="block m-auto py-2 px-4 border border-gray-300 rounded-lg w-60"/>
                        <input type="text" onChange={handleApiKeyChange} placeholder="Api Key"
                               className="block m-auto py-2 px-4 mt-4 border border-gray-300 rounded-lg w-60"/>
                        <div className="block gap-10">
                            <select value={conversionManager}
                                    onChange={handleConversionManagerChange}
                                    className="block m-auto mt-4 py-2 bg-white h-full border border-gray-300 rounded-lg w-60">
                                <option value="CloudConvert">CloudConvert</option>
                                {/* Altri formati di conversione */}
                            </select>
                            <select value={conversionType}
                                    onChange={handleConversionTypeChange}
                                    className="block m-auto mt-4 py-2 bg-white h-full border border-gray-300 rounded-lg w-60">
                                <option value="PDF">PDF</option>
                                <option value="DOCX">DOCX</option>
                                <option value="PNG">PNG</option>
                                <option value="JPG">JPG</option>
                                {/* Altri formati di conversione */}
                            </select>
                        </div>
                        <div className="block gap-10">
                            <button type="submit"
                                    className="bg-black hover:bg-white w-52 m-4 text-white font-bold py-3 px-6 rounded-lg mt-6 transition duration-300 ease-in-out transform hover:scale-125">
                                Convert
                            </button>
                            <button type="button" onClick={downloadConvertedFile}
                                    className="bg-black hover:bg-white w-52 m-4 text-white font-bold py-3 px-6 rounded-lg mt-6 transition duration-300 ease-in-out transform hover:scale-125 disabled:opacity-5">
                                Download
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer></Footer>
        </div>);
};

export default Layout;

