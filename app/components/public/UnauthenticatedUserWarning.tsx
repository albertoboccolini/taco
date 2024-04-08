import {NextPage} from "next";
import TacoButton from "@/app/components/public/TacoButton";
import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";


const UnauthenticatedUserWarning: NextPage = () => {

    const {darkMode} = DarkModeEngine();

    return (
        <div className="text-center p-5 m-auto">
            <div className="mx-auto max-w-md space-y-8">
                <div
                    className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>
                    <h1 className="font-bold text-2xl mb-6">Oh No!, seems you are not authenticated.</h1>
                    <p className="text-center text-sm text-gray-400">
                        You cannot perform this action without an account. Please press this button to sign-in.
                    </p>
                    <div className="block text-center mt-4">
                        <TacoButton type={"button"} onClick={() => window.location.href = "/account"} text={"Sign-in"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnauthenticatedUserWarning;
