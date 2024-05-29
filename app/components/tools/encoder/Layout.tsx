'use client'

import React from 'react';
import { NextPage } from "next";
import tacoEncoderLogo from '@/public/tacoEncoderLogo.png';
import { Engine } from "@/app/components/tools/encoder/Engine";
import TacoButton from "@/app/components/public/TacoButton";
import TacoSelect from "@/app/components/public/TacoSelect";
import TacoTextArea from "@/app/components/public/TacoTextArea";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";

const Layout: NextPage = () => {

    const { handleEncode, handleDecode, text, setText, handleEncodeTypeChange, encodeType } = Engine();

    return (
        <TacoPage title={"taco | encoder"}>
            <TacoCard logo={tacoEncoderLogo} toolName={"taco encoder"} cardDimension={"md"}>
                <div className="grid gap-2">
                    <div className="flex flex-col gap-1.5">
                        <TacoTextArea value={text} onChange={(e: any) => setText(e.target.value)}
                            placeholder={"Something..."} />
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex justify-center mt-8">
                        <TacoSelect onChange={handleEncodeTypeChange} value={encodeType}
                            values={["Base64"]} />
                    </div>
                    <div className="block text-center mt-4">
                        <TacoButton type={"button"} onClick={handleEncode} text={"Encode"} />
                        <TacoButton type={"button"} onClick={handleDecode} text={"Decode"} />
                    </div>
                </div>
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;