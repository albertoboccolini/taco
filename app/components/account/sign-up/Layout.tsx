"use client";
import React from "react";
import { NextPage } from "next";
import TacoButton from "@/app/components/public/TacoButton";
import { Engine } from "@/app/components/account/sign-up/Engine";
import TacoPage from "@/app/components/public/TacoPage";
import TacoInput from "../../public/TacoInput";
import TacoInputPassword from "../../public/TacoInputPassword";
import CustomizationEngine from "../../public/CustomizationEngine";

const Layout: NextPage = () => {
  const {
    updateEmail,
    updateName,
    name,
    updateSurname,
    surname,
    email,
    visiblePassword,
    password,
    updatePassword,
    togglePasswordVisibility,
    signUp,
  } = Engine();
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <TacoPage title={"taco | sign-up"}>
      <div className="m-auto p-5 text-center">
        <div className="mx-auto max-w-md space-y-8">
          <div
            className={`items-center rounded-xl px-8 py-6 shadow-xl`}
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <h1 className="mb-6 text-2xl font-bold">Welcome to taco</h1>
            <p
              className="text-center text-sm"
              style={{ color: hexToRgba(textColor, 80) }}
            >
              We need some of your data, after sign-up process, we can do some
              great things together.
            </p>
            <div className="mt-8 flex flex-col items-center space-y-4">
              <TacoInput
                placeholder="Name"
                onChange={(e: any) => updateName(e.target.value)}
                value={name}
                type="text"
                maxLength={256}
                disabled={false}
                id={"name"}
              />
              <TacoInput
                placeholder="Surname"
                onChange={(e: any) => updateSurname(e.target.value)}
                value={surname}
                type="text"
                maxLength={256}
                disabled={false}
                id={"Surname"}
              />
              <TacoInput
                placeholder="E-Mail"
                onChange={(e: any) => updateEmail(e.target.value)}
                value={email}
                type="email"
                maxLength={256}
                disabled={false}
                id={"email"}
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
              <TacoButton type={"button"} onClick={signUp} text={"Sign-up"} />
            </div>
            <div className="mt-4 flex items-center justify-center gap-1 text-sm">
              <p style={{ color: hexToRgba(textColor, 80) }}>
                Are you already our friend?
              </p>
              <button
                className={`${textColor == "white" ? "text-blue-300" : "text-blue-500"} underline`}
                title={"account | sign-in"}
                onClick={() => (window.location.href = "/account")}
              >
                sign-in
              </button>
            </div>
          </div>
        </div>
      </div>
    </TacoPage>
  );
};

export default Layout;
