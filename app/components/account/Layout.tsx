"use client";
import React from "react";
import { NextPage } from "next";
import Engine from "@/app/components/account/Engine";
import SignInLayout from "@/app/components/account/sign-in/Layout";
import TacoButton from "@/app/components/public/TacoButton";
import TacoPage from "@/app/components/public/TacoPage";
import TacoInput from "../public/TacoInput";
import TacoInputPassword from "../public/TacoInputPassword";
import CustomizationEngine from "../public/CustomizationEngine";

const Layout: NextPage = () => {
  const {
    isAuthenticated,
    logout,
    name,
    surname,
    email,
    apiKey,
    password,
    togglePasswordVisibility,
    visiblePassword,
  } = Engine();
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <TacoPage title={isAuthenticated ? "taco | account" : "taco | sign-in"}>
      {isAuthenticated ? (
        <div className="m-auto p-5 text-center">
          <div className="mx-auto max-w-md space-y-8">
            <div
              className={`items-center rounded-xl px-8 py-6 shadow-xl`}
              style={{ backgroundColor: hexToRgba(bgColor, 20), color: textColor }}
            >
              <h1 className="mb-6 text-2xl font-bold">
                See your account details
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <label className="mx-4 mt-4 min-w-[50px] font-bold md:min-w-[75px]">
                    Name:
                  </label>
                  <TacoInput
                    id="name"
                    placeholder="Name"
                    value={name}
                    disabled
                    type={"text"}
                    maxLength={256}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="mx-4 mt-4 min-w-[50px] font-bold md:min-w-[75px]">
                    Surname:
                  </label>
                  <TacoInput
                    id="surname"
                    placeholder="Surname"
                    value={surname}
                    disabled
                    type={"text"}
                    maxLength={256}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="mx-4 mt-4 min-w-[50px] font-bold md:min-w-[75px]">
                    E-Mail:
                  </label>
                  <TacoInput
                    id="email"
                    placeholder="E-Mail"
                    value={email}
                    disabled
                    type={"text"}
                    maxLength={256}
                  />
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <label className="mx-4 min-w-[50px] font-bold md:min-w-[75px]">
                    Password:
                  </label>
                  <TacoInputPassword
                    disabled
                    maxLength={30}
                    visiblePassword={visiblePassword}
                    value={password}
                    autoComplete="off"
                    onChange={() => {}}
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="mx-4 mt-4 min-w-[50px] font-bold md:min-w-[75px]">
                    API Key:
                  </label>
                  <TacoInput
                    id="api_key"
                    placeholder="API Key"
                    value={apiKey}
                    disabled
                    type={"text"}
                    maxLength={256}
                  />
                </div>
              </div>

              <div className="mt-4 block text-center">
                <TacoButton type={"button"} onClick={logout} text={"Logout"} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SignInLayout></SignInLayout>
      )}
    </TacoPage>
  );
};

export default Layout;
