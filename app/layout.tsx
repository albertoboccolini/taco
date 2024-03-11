import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/app/components/public/Footer";
import React from "react";
import {Inter} from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
    style: "normal"
})

export const metadata: Metadata = {
    title: "taco",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
        <body className={inter.className}>{children}<Footer/></body>
        </html>
    );
}
