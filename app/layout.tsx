'use client'

import "./globals.css";
import Footer from "@/app/components/public/Footer";
import React from "react";
import {Inter} from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import {Analytics} from "@vercel/analytics/react"

config.autoAddCss = false;

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
    style: "normal"
})

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    const {darkMode} = DarkModeEngine();

    return (
        <html lang="it">
        <body
            className={(darkMode ? 'text-white bg-taco-dark-primary' : 'text-black bg-white') + " " + inter.className}>
        <Analytics/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
