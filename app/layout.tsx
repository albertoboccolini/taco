import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/app/components/public/Footer";
import React from "react";
import {Roboto} from 'next/font/google'

const roboto = Roboto({
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
        <body className={roboto.className}>{children}<Footer/></body>
        </html>
    );
}
