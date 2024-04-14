'use client'

import React from 'react';
import {NextPage} from "next";
import TacoCard from "@/app/components/public/TacoCard";
import tacoRemoverLogo from "@/public/tacoRemoverLogo.png";
import TacoFileUploader from "@/app/components/public/TacoFileUploader";
import TacoButton from "@/app/components/public/TacoButton";
import Image from "next/image";
import TacoPage from "@/app/components/public/TacoPage";
import Engine from "@/app/components/tools/remover/Engine";

const Layout: NextPage = () => {
    const {file, handleImageChange, removeBackground, downloadImage, image, processedImage} = Engine();

    return (
        <TacoPage title={"taco | remover"}>
            <TacoCard logo={tacoRemoverLogo} toolName={"taco remover"}>
                <TacoFileUploader selectedFile={file} accept="image/*" handleFileChange={handleImageChange}/>
                <div className="block text-center mt-4">
                    <TacoButton type="button" onClick={removeBackground} text="Remove Background"/>
                    <TacoButton type="button" onClick={downloadImage} text="Download Image"/>
                </div>
                {image && (
                    <div className="mt-4 flex items-center justify-center">
                        <Image src={processedImage != '' ? processedImage : image}
                               width={56}
                               height={42}
                               alt={processedImage != '' ? "processedImage" : "image"}
                               className="w-56 h-42 lg:w-full lg:h-full m-auto"
                        />
                    </div>
                )}
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;

