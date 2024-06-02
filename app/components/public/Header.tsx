"use client";

import React from "react";
import TacoLogo from "@/app/components/public/TacoLogo";
import SearchBar from "@/app/components/homepage/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import Engine from "@/app/components/account/Engine";
import TacoInputCheckbox from "./TacoInputCheckbox";

const Header: React.FunctionComponent<{
  title: string;
  onSearchChange: ((value: string) => void) | null;
}> = ({ title, onSearchChange }) => {
  const { isAuthenticated } = Engine();
  const { darkMode, toggleDarkMode } = DarkModeEngine();

  return (
    <header
      className={`${darkMode ? "bg-taco-dark-primary" : "bg-white"} flex w-full items-center justify-between rounded-b-xl py-2.5`}
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
            className={`${darkMode ? "text-white" : "text-black"} ml-4 mr-8 bg-transparent duration-300 hover:scale-125 lg:mr-10`}
            icon={isAuthenticated ? (faUserCheck as any) : (faUser as any)}
            onClick={() => (window.location.href = "/account")}
            size="xl"
          />
        </div>
        <TacoInputCheckbox onChange={toggleDarkMode} />
      </div>
    </header>
  );
};

export default Header;
