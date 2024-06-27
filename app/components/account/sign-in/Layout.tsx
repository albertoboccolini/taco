"use client";
import React from "react";
import { NextPage } from "next";
import TacoButton from "@/app/components/public/TacoButton";
import { Engine } from "@/app/components/account/sign-in/Engine";
import TacoInput from "../../public/TacoInput";
import TacoInputPassword from "../../public/TacoInputPassword";
import CustomizationEngine from "../../public/CustomizationEngine";

const Layout: NextPage = () => {
  const {
    updateEmail,
    email,
    visiblePassword,
    password,
    updatePassword,
    togglePasswordVisibility,
    authenticate,
  } = Engine();
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <div className="m-auto p-5 text-center">
      <div className="mx-auto max-w-md space-y-8">
        <div
          className={`items-center rounded-xl px-8 py-6 shadow-xl`}
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <h1 className="mb-6 text-2xl font-bold">Welcome back to taco</h1>
          <p
            className="text-center text-sm"
            style={{ color: hexToRgba(textColor, 80) }}
          >
            Please enter your e-mail and password so we can verify everything is
            good and we can back work together.
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <TacoInput
              placeholder="E-Mail"
              onChange={(e: any) => updateEmail(e.target.value)}
              value={email}
              type="email"
              id={"e-mail"}
              maxLength={128}
            />
            <TacoInputPassword
              visiblePassword={visiblePassword}
              maxLength={30}
              value={password}
              onChange={(e: any) => updatePassword(e.target.value)}
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="mt-4 block text-center">
            <TacoButton
              type={"button"}
              onClick={authenticate}
              text={"Sign-in"}
            />
          </div>
          <div className="mt-4 flex items-center justify-center gap-1 text-sm">
            <p style={{ color: hexToRgba(textColor, 80) }}>
              Are you new around there?
            </p>
            <button
              className={`${textColor == "white" ? "text-blue-300" : "text-blue-500"} underline`}
              title={"account | sign-up"}
              onClick={() => (window.location.href = "/account/sign-up")}
            >
              sign-up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
