"use client";

import React from "react";
import { NextPage } from "next";
import tacoDropLogo from "@/public/tacoDropLogo.png";
import TacoFileUploader from "@/app/components/public/TacoFileUploader";
import { Engine } from "@/app/components/tools/drop/Engine";
import AccountEngine from "@/app/components/account/Engine";
import TacoButton from "@/app/components/public/TacoButton";
import UnauthenticatedUserWarning from "@/app/components/public/UnauthenticatedUserWarning";
import TacoCard from "@/app/components/public/TacoCard";
import TacoPage from "@/app/components/public/TacoPage";
import TacoInput from "../../public/TacoInput";

const Layout: NextPage = () => {
  const { selectedFile, handleFileChange, uploadFile, qrCode, roomURL } =
    Engine();
  const { isAuthenticated } = AccountEngine();

  return (
    <TacoPage title={"taco | drop"}>
      {isAuthenticated ? (
        <TacoCard
          logo={tacoDropLogo}
          toolName={"taco drop"}
          cardDimension={"md"}
        >
          <TacoFileUploader
            selectedFile={selectedFile}
            handleFileChange={handleFileChange}
          />
          <div className="mt-4 block text-center">
            <TacoButton
              type={"button"}
              onClick={uploadFile}
              text={"Generate QR"}
            />
          </div>
          <div className="mt-4 flex items-center justify-center">{qrCode}</div>
          {roomURL ? (
            <TacoInput
              placeholder="Something..."
              type="text"
              disabled
              value={roomURL}
            />
          ) : null}
        </TacoCard>
      ) : (
        <UnauthenticatedUserWarning />
      )}
    </TacoPage>
  );
};

export default Layout;
