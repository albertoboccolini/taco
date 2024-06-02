"use client";

import { NextPage } from "next";
import tacoTomatoLogo from "@/public/tacoTomatoLogo.png";
import TacoButton from "@/app/components/public/TacoButton";
import React from "react";
import Engine from "@/app/components/tools/tomato/Engine";
import TacoSelect from "@/app/components/public/TacoSelect";
import TacoCard from "@/app/components/public/TacoCard";
import TacoPage from "@/app/components/public/TacoPage";

const Layout: NextPage = () => {
  const {
    minutes,
    seconds,
    handleTomatoCountChange,
    tomatoCount,
    toggleIsActive,
    isActive,
    totalStudyTime,
  } = Engine();

  return (
    <TacoPage title={"taco | tomato"}>
      <TacoCard
        logo={tacoTomatoLogo}
        toolName={"taco tomato"}
        cardDimension={"md"}
      >
        <h2 className="text-3xl font-bold">{`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</h2>
        <p className="mt-4 text-center text-sm text-gray-400">
          Enter how many tomato&#39;s do you want to do and press start to do
          some study. Stay on this page to allow the timer to advance correctly
          and record your study time.
        </p>
        <div className="mt-4 flex justify-center">
          <TacoSelect
            onChange={handleTomatoCountChange}
            value={tomatoCount}
            disabled={isActive}
            values={Array.from({ length: 10 }, (_, i) => i + 1)}
          />
        </div>
        <div className="mt-4 block text-center">
          <TacoButton
            type={"button"}
            onClick={toggleIsActive}
            text={isActive ? "Pause" : "Start"}
          />
        </div>
        <div className="mt-4 text-center">
          <p className="mt-4 text-center text-sm text-gray-400">
            Total Study Time: {totalStudyTime} minutes
          </p>
        </div>
      </TacoCard>
    </TacoPage>
  );
};

export default Layout;
