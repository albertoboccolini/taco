"use client";

import React from "react";
import TacoLogo from "@/app/components/public/TacoLogo";
import SearchBar from "@/app/components/homepage/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import Engine from "@/app/components/account/Engine";
import CustomizationEngine from "./CustomizationEngine";

const Header: React.FunctionComponent<{
  title: string;
  onSearchChange: ((value: string) => void) | null;
}> = ({ title, onSearchChange }) => {
  const { isAuthenticated } = Engine();
  const { bgColor, textColor } = CustomizationEngine();

  return (
    <header
      className={`flex w-full items-center justify-between rounded-b-xl py-2.5`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <title>{title}</title>
      <TacoLogo />
      <div className="flex items-center">
        <div
          className={`${onSearchChange ? "visible" : "invisible"} flex-grow lg:flex-grow-0`}
        >
          <SearchBar onSearchChange={onSearchChange} />
        </div>
        <div
          title={
            isAuthenticated ? "account | see details" : "account | sign-in"
          }
        >
          <FontAwesomeIcon
            className={`${textColor == "white" ? "text-white" : "text-black"} ml-4 mr-8 bg-transparent duration-300 hover:scale-125 lg:mr-10`}
            icon={isAuthenticated ? (faUserCheck as any) : (faUser as any)}
            onClick={() => (window.location.href = "/account")}
            size="xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
