'use client'

import React from 'react';
import {NextPage} from "next";
import {Engine} from "@/app/components/tools/converter/Engine";
import Image from 'next/image';
import fileConverterImage from '/public/fileConverterLogo.png';
import Header from "@/app/components/public/Header";
import TacoButton from "@/app/components/public/TacoButton";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Layout: NextPage = () => {

    const {
        conversionType,
        selectedFile,
        handleFileChange,
        handleConversionTypeChange,
        submitFileForConversion,
        downloadConvertedFile,
        UploadCloudIcon
    } = Engine();

    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | converter"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <form onSubmit={submitFileForConversion}>
                        <div className="mx-auto max-w-md space-y-8">
                            <div
                                className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl`}>
                                <Image src={fileConverterImage}
                                       className="font-bold text-2xl text-center m-auto"
                                       alt="taco converter"
                                       width={100} height={100}/>
                                <h1 className="font-bold text-2xl mb-6">taco converter</h1>
                                <div className="space-y-6">
                                    <div>
                                        <div
                                            className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div className="space-y-1 text-center">
                                                <UploadCloudIcon className="mx-auto h-12 w-12 text-gray-400"/>
                                                <div className="flex text-sm text-black">
                                                    <label
                                                        className="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        htmlFor="file-upload"
                                                    >
                                                        <span
                                                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'}`}>{selectedFile?.name ? selectedFile.name : "Select a file"}</span>
                                                        <input className="sr-only" id="file-upload" name="file-upload"
                                                               onChange={handleFileChange}
                                                               type="file"/>
                                                    </label>
                                                    <p className="pl-1"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <select value={conversionType}
                                                onChange={handleConversionTypeChange}
                                                className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-gray-200 text-black'} p-2 block m-auto mt-4 py-2 h-full rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg`}>
                                            <option value="PDF">PDF</option>
                                            {/* Other conversion formats */}
                                        </select>
                                    </div>
                                    <div className="block text-center mt-4">
                                        <TacoButton type={"submit"} text={"Convert"}/>
                                        <TacoButton type={"button"} onClick={downloadConvertedFile} text={"Download"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

        </div>
    );
};

export default Layout;

