"use client";

import React from "react";
import Header from "@/app/components/public/Header";
import CustomizationEngine from "./CustomizationEngine";

interface TacoPageProps {
  children: React.ReactNode;
  title: string;
}

const TacoPage: React.FC<TacoPageProps> = ({ children, title }) => {
  const { bgColor, textColor } = CustomizationEngine();

  return (
    <div
      className={`m-0 p-0`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Header title={title} onSearchChange={null} />
      <main className="m-auto max-w-4xl px-4 py-10 sm:p-10">{children}</main>
    </div>
  );
};

export default TacoPage;
