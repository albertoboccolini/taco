"use client";

import React from "react";
import { NextPage } from "next";
import { Engine } from "@/app/components/tools/calc/Engine";
import CalcButtons from "@/app/components/tools/calc/components/CalcButtons";
import TacoPage from "@/app/components/public/TacoPage";

const Layout: NextPage = () => {
  const {
    input,
    result,
    setInput,
    handleInputChange,
    calculateResult,
    clearInput,
    buttons,
  } = Engine();

  return (
    <TacoPage title={"taco | calc"}>
      <div className="m-auto p-5 text-center">
        <div className="m-auto">
          <div className="mb-4 flex flex-col items-center justify-center">
            <input
              type="text"
              value={input}
              placeholder="taco calc"
              onChange={(e) => setInput(e.target.value)}
              className="mb-2 h-16 w-full rounded-md border-0 bg-gray-200 p-4 text-right text-gray-800 shadow-inner disabled:cursor-not-allowed disabled:bg-gray-200"
              disabled
            />
            <div className="h-16 w-full rounded-md bg-gray-100 p-4 text-lg font-semibold text-gray-700 shadow">
              {result.toString()}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            <CalcButtons
              buttons={buttons}
              handleInputChange={handleInputChange}
              clearInput={clearInput}
              calculateResult={calculateResult}
            />
          </div>
        </div>
      </div>
    </TacoPage>
  );
};

export default Layout;
