'use client'

import { NextPage } from "next";
import tacoDropLogo from "@/public/tacoDropLogo.png";
import TacoButton from "@/app/components/public/TacoButton";
import React from "react";
import Engine from "@/app/components/tools/drop/room/Engine";
import AccountEngine from "@/app/components/account/Engine";
import UnauthenticatedUserWarning from "@/app/components/public/UnauthenticatedUserWarning";
import TacoCard from "@/app/components/public/TacoCard";
import TacoPage from "@/app/components/public/TacoPage";

const Layout: NextPage = () => {

    const { fileName, fileURL, handleDownload } = Engine();
    const { isAuthenticated } = AccountEngine();

    return (
        <TacoPage title={"taco | drop"}>
            {isAuthenticated ?
                <TacoCard logo={tacoDropLogo} toolName={fileName || "Waiting for file..."} cardDimension={"md"}>
                    {fileURL ? (
                        <TacoButton type={"button"} text={"Download"} onClick={handleDownload} />) : null}
                </TacoCard> : <UnauthenticatedUserWarning />}
        </TacoPage>
    )
};

export default Layout;