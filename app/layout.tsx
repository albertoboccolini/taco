import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/app/components/public/Footer";
import React from "react";

export const metadata: Metadata = {
    title: "taco",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
        <body className="w-screen font-roboto bg-white h-screen">{children}<Footer/></body>
        </html>
    );
}
