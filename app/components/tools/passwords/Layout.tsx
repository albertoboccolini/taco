"use client";

import React from "react";
import { NextPage } from "next";
import TacoPage from "@/app/components/public/TacoPage";
import PasswordManager from "@/app/components/tools/passwords/components/PasswordManager";
import AccountEngine from "@/app/components/account/Engine";
import UnauthenticatedUserWarning from "@/app/components/public/UnauthenticatedUserWarning";

const Layout: NextPage = () => {
  const { isAuthenticated } = AccountEngine();

  return (
    <TacoPage title={"taco | passwords"}>
      {!isAuthenticated ? <UnauthenticatedUserWarning /> : <PasswordManager />}
    </TacoPage>
  );
};

export default Layout;
