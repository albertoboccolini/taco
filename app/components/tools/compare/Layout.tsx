"use client";

import React from "react";
import tacoCompareLogo from "@/public/tacoCompareLogo.png";
import TacoButton from "@/app/components/public/TacoButton";
import TacoTextArea from "@/app/components/public/TacoTextArea";
import TacoPage from "@/app/components/public/TacoPage";
import TacoCard from "@/app/components/public/TacoCard";
import Engine from "@/app/components/tools/compare/Engine";
import CustomizationEngine from "../../public/CustomizationEngine";

const Layout: React.FC = () => {
  const {
    handleTextChange,
    computeDiff,
    textA,
    textB,
    diffOutput,
    renderDiffOutput,
  } = Engine();

  const { bgColor, hexToRgba } = CustomizationEngine();

  return (
    <TacoPage title={"taco | compare"}>
      <TacoCard
        logo={tacoCompareLogo}
        toolName={"taco compare"}
        cardDimension={"lg"}
      >
        <div className="mb-4 flex h-full w-full flex-row gap-x-4">
          <TacoTextArea
            value={textA}
            onChange={(e: any) => handleTextChange(e, "A")}
            placeholder="Enter text A"
          />
          <TacoTextArea
            value={textB}
            onChange={(e: any) => handleTextChange(e, "B")}
            placeholder="Enter text B"
          />
        </div>
        <div className="flex items-center justify-center">
          <TacoButton type="button" onClick={computeDiff} text="Compare" />
        </div>
        <div className="mt-4">
          {diffOutput ? (
            <div
              className={`rounded-lg p-4 shadow-xl`}
              style={{ backgroundColor: hexToRgba(bgColor, 20) }}
            >
              {renderDiffOutput()}
            </div>
          ) : null}
        </div>
      </TacoCard>
    </TacoPage>
  );
};

export default Layout;
