"use client";

import "./globals.css";
import Footer from "@/app/components/public/Footer";
import React from "react";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import CustomizationEngine from "./components/public/CustomizationEngine";

config.autoAddCss = false;

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { bgColor } = CustomizationEngine();

  return (
    <html lang="it">
      <body className={inter.className} style={{ backgroundColor: bgColor }}>
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
