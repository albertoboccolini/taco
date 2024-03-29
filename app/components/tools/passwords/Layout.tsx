'use client'

import React from 'react';
import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import tacoPasswordsLogo from "@/public/tacoPasswordsLogo.png";
import {Engine} from "@/app/components/tools/passwords/Engine";
import AccountManager from "@/app/components/tools/passwords/components/AccountManager";
import PasswordManager from "@/app/components/tools/passwords/components/PasswordManager";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

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
    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={"taco | passwords"} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-left p-5 m-auto">
                    <div className="mx-auto max-w-4xl space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl`}>
                            <Image src={tacoPasswordsLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco passwords"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl text-center mb-6">taco passwords</h1>
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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;
