import { NextPage } from "next";
import TacoButton from "@/app/components/public/TacoButton";
import React from "react";
import CustomizationEngine from "./CustomizationEngine";

const UnauthenticatedUserWarning: NextPage = () => {
  const { textColor, hexToRgba } = CustomizationEngine();

  return (
    <div className="m-auto p-5 text-center" style={{ color: textColor }}>
      <div className="mx-auto max-w-md space-y-8">
        <div className={`items-center rounded-xl px-8 py-6 shadow-xl`}>
          <h1 className="mb-6 text-2xl font-bold">
            Oh No!, seems you are not authenticated.
          </h1>
          <p
            className="text-center text-sm"
            style={{ color: hexToRgba(textColor, 80) }}
          >
            You cannot perform this action without an account. Please press this
            button to sign-in.
          </p>
          <div className="mt-4 block text-center">
            <TacoButton
              type={"button"}
              onClick={() => (window.location.href = "/account")}
              text={"Sign-in"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthenticatedUserWarning;
