'use client'

import React from 'react';
import tacoCompareLogo from '@/public/tacoCompareLogo.png';
import TacoButton from '@/app/components/public/TacoButton';
import TacoTextArea from "@/app/components/public/TacoTextArea";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";
import Engine from "@/app/components/tools/compare/Engine";

const Layout: React.FC = () => {

    const {handleTextChange, computeDiff, textA, textB, diffOutput, renderDiffOutput, darkMode} = Engine();

    return (
        <TacoPage title={"taco | compare"}>
            <TacoCard logo={tacoCompareLogo} toolName={"taco compare"}>
                <div className="flex-row flex gap-x-4 w-full h-full mb-4">
                    <TacoTextArea
                        value={textA}
                        onChange={(e: any) => handleTextChange(e, 'A')}
                        placeholder="Enter text A"
                    />
                    <TacoTextArea
                        value={textB}
                        onChange={(e: any) => handleTextChange(e, 'B')}
                        placeholder="Enter text B"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <TacoButton type="button" onClick={computeDiff} text="Compare"/>
                </div>
                <div className="mt-4">
                    {diffOutput ? <div
                        className={`${darkMode ? "bg-taco-dark-primary" : "bg-white"} rounded-lg shadow-xl p-4`}>
                        {renderDiffOutput()}
                    </div> : null}
                </div>
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;
