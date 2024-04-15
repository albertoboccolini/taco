'use client'

import {NextPage} from "next";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import tacoJsonLogo from "@/public/tacoTomatoLogo.png";
import TacoButton from "@/app/components/public/TacoButton";
import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import Engine from "@/app/components/tools/tomato/Engine";


const Layout: NextPage = () => {

    const {darkMode} = DarkModeEngine();
    const {
        minutes,
        seconds,
        handleTomatoCountChange,
        tomatoCount,
        toggleIsActive,
        isActive,
        totalStudyTime
    } = Engine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title="taco | tomato" onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                <div className="text-center p-5 m-auto">
                    <div className="mx-auto max-w-md space-y-8">
                        <div
                            className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl`}>
                            <Image src={tacoJsonLogo}
                                   className="font-bold text-2xl text-center m-auto"
                                   alt="taco tomato"
                                   width={100} height={100}/>
                            <h1 className="font-bold text-2xl mb-6">taco tomato</h1>
                            <h2 className="text-3xl font-bold">{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h2>
                            <p className="text-center text-sm mt-4 text-gray-400">
                                Enter how many tomato&#39;s do you want to do and press start to do some study. Stay on
                                this page to allow the timer to advance correctly and record your study time.
                            </p>
                            <div className="flex justify-center mt-4">
                                <select
                                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-gray-200 text-black'} p-2 w-60 rounded-md`}
                                    onChange={handleTomatoCountChange}
                                    value={tomatoCount}>
                                    {Array.from({length: 10}, (_, i) => i + 1).map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="block text-center mt-4">
                                <TacoButton type={"button"} onClick={toggleIsActive}
                                            text={isActive ? "Pause" : "Start"}/>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-center text-sm mt-4 text-gray-400">Total Study
                                    Time: {totalStudyTime} minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Layout