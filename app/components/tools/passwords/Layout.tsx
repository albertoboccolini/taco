'use client'

import React from 'react';
import {NextPage} from "next";
import tacoPasswordsLogo from "@/public/tacoPasswordsLogo.png";
import {Engine} from "@/app/components/tools/passwords/Engine";
import AccountManager from "@/app/components/tools/passwords/components/AccountManager";
import PasswordManager from "@/app/components/tools/passwords/components/PasswordManager";
import TacoCard from "@/app/components/public/TacoCard";
import TacoPage from "@/app/components/public/TacoPage";

const Layout: NextPage = () => {

    const {
        isAuthenticated,
        mainPassword,
        toggleMainPasswordVisibility,
        visibleMainPassword,
        updateMainPassword,
        unlockPasswords,
        passwords,
        savePasswords,
        updatePassword,
        addPassword,
        deletePassword,
        visiblePasswords,
        togglePasswordVisibility,
        isRegistered,
        clearStorage
    } = Engine();

    return (
        <TacoPage title={"taco | passwords"}>
            <TacoCard logo={tacoPasswordsLogo} toolName={"taco passwords"}>
                <p className="text-center w-full text-sm mb-8 text-gray-400">
                    Passwords stored in the browser local storage may be easily decrypted in a data breach,
                    we&#39;re currently working to improve the security of this tool, use taco
                    passwords at your own risk.
                </p>
                {!isAuthenticated ? (
                    <AccountManager
                        visibleMainPassword={visibleMainPassword}
                        toggleMainPasswordVisibility={toggleMainPasswordVisibility}
                        mainPassword={mainPassword}
                        unlockPasswords={unlockPasswords}
                        updateMainPassword={updateMainPassword} isRegistered={isRegistered}
                        clearStorage={clearStorage}/>
                ) : (
                    <PasswordManager
                        passwords={passwords}
                        addPassword={addPassword}
                        deletePassword={deletePassword}
                        savePasswords={savePasswords}
                        togglePasswordVisibility={togglePasswordVisibility}
                        updatePassword={updatePassword}
                        visiblePasswords={visiblePasswords}/>
                )}
            </TacoCard>
        </TacoPage>
    );
};

export default Layout;
