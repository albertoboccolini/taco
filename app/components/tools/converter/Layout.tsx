'use client'

import React from 'react';
import {NextPage} from "next";
import {Engine} from "@/app/components/tools/converter/Engine";
import Image from 'next/image';
import fileConverterImage from '/public/fileConverterLogo.png';
import Header from "@/app/components/public/Header";

const Layout: NextPage = () => {

    const {
        conversionType,
        handleFileChange,
        handleConversionTypeChange,
        submitFileForConversion,
        downloadConvertedFile
    } = Engine();

    return (
        <div className="text-gray-800 bg-white m-0 p-0">

            <div className="shadow">
                <Header title={"taco | converter"}/>
            </div>

            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <Image src={fileConverterImage} className="font-bold text-2xl text-center m-auto"
                           alt="File Converter" width={100} height={100}/>
                    <h1 className="font-bold text-2xl mb-6">taco converter</h1>
                    <form onSubmit={submitFileForConversion}>
                        <input type="file" onChange={handleFileChange}
                               className="block m-auto py-2 px-4 border border-gray-300 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"/>
                        <div className="block">
                            <select value={conversionType}
                                    onChange={handleConversionTypeChange}
                                    className="block m-auto mt-4 py-2 bg-white h-full border border-gray-300 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                                <option value="PDF">PDF</option>
                                <option value="DOCX">DOCX</option>
                                <option value="PNG">PNG</option>
                                <option value="JPG">JPG</option>
                                {/* Other conversion formats */}
                            </select>
                        </div>
                        <div className="block text-center mt-4">
                            <button type="submit"
                                    className="bg-black hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                Convert
                            </button>
                            <button type="button" onClick={downloadConvertedFile}
                                    className="bg-black hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                                Download
                            </button>
                        </div>
                    </form>
                </div>
            </main>

        </div>
    );
};

export default Layout;

