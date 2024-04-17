'use client'

import React from 'react';
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import Header from "@/app/components/public/Header";

interface TacoPageProps {
    children: React.ReactNode;
    title: string;
}

const TacoPage: React.FC<TacoPageProps> = ({children, title}) => {

    const {darkMode} = DarkModeEngine();

    return (
        <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
            <Header title={title} onSearchChange={null}/>
            <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                {children}
            </main>
        </div>
    );
};

export default TacoPage;
