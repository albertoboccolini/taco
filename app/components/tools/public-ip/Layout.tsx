"use client";

import React from "react";
import { NextPage } from "next";

import TacoButton from "@/app/components/public/TacoButton";
import Engine from "@/app/components/tools/public-ip/Engine";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";
import tacoIPLogo from "@/public/tacoIPLogo.png";
import CustomizationEngine from "../../public/CustomizationEngine";

const Layout: NextPage = () => {
  const { ipDetails, copyPublicIPToClipboard, downloadPDF } = Engine();
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <TacoPage title={"taco | public-ip"}>
      <TacoCard logo={tacoIPLogo} toolName={"taco IP"} cardDimension={"md"}>
        <p
          className="text-center text-sm"
          style={{ color: hexToRgba(textColor, 80) }}
        >
          If you don&#39;t see the information correctly, <br />
          try disabling AD Block and refreshing the page.
        </p>
        <div
          className={`mx-0 mt-4 rounded-xl py-8 shadow-xl lg:mx-6`}
          style={{ backgroundColor: hexToRgba(bgColor, 10), color: textColor }}
        >
          {ipDetails ? (
            Object.entries(ipDetails)
              .filter(([key, _]) => key.toLowerCase() !== "readme")
              .map(([key, value]) => (
                <p
                  key={key}
                  className="font-semibold capitalize"
                >{`${key === "ip" ? key.toUpperCase() : key.toLowerCase()}: ${value}`}</p>
              ))
          ) : (
            <p className={`font-semibold`}>Loading...</p>
          )}
        </div>
        <div className="mt-4 block text-center">
          <TacoButton
            text="Copy IP"
            onClick={copyPublicIPToClipboard}
            type="button"
          />
          <TacoButton
            text="Download details"
            onClick={downloadPDF}
            type="button"
          />
        </div>
      </TacoCard>
    </TacoPage>
  );
};

export default Layout;
