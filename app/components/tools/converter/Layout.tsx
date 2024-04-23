'use client'

import React from 'react';
import {NextPage} from "next";
import {Engine} from "@/app/components/tools/converter/Engine";
import tacoConverterLogo from '@/public/tacoConverterLogo.png';
import TacoButton from "@/app/components/public/TacoButton";
import TacoFileUploader from "@/app/components/public/TacoFileUploader";
import TacoSelect from "@/app/components/public/TacoSelect";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";

const Layout: NextPage = () => {

    const {
        conversionType,
        selectedFile,
        handleFileChange,
        handleConversionTypeChange,
        submitFileForConversion,
        downloadConvertedFile,
    } = Engine();

    return (
        <TacoPage title={"taco | converter"}>
            <TacoCard logo={tacoConverterLogo} toolName={"taco converter"}>
                <form onSubmit={submitFileForConversion}>
                    <div className="space-y-6">
                        <TacoFileUploader accept={null} selectedFile={selectedFile} handleFileChange={handleFileChange}/>
                        <div className="flex justify-center mt-4">
                            <TacoSelect onChange={handleConversionTypeChange} value={conversionType}
                                        values={["PDF"]}/>
                        </div>
                        <div className="block text-center mt-4">
                            <TacoButton type={"submit"} text={"Convert"}/>
                            <TacoButton type={"button"} onClick={downloadConvertedFile} text={"Download"}/>
                        </div>
                    </div>
                </form>
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;

