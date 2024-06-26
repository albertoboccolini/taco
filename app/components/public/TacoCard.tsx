"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import CustomizationEngine from "./CustomizationEngine";

interface TacoCardProps {
  children: React.ReactNode;
  logo?: StaticImageData;
  toolName: string;
  cardDimension:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl";
}

const TacoCard: React.FC<TacoCardProps> = ({
  children,
  logo,
  toolName,
  cardDimension,
}) => {
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <div className="m-auto p-5 text-center">
      <div className={`mx-auto max-w-${cardDimension} space-y-8`}>
        <div
          className={`rounded-xl px-8 py-6 shadow-xl`}
          style={{backgroundColor: hexToRgba(bgColor, 20), color: textColor}}
        >
          <Image
            src={logo ?? ""}
            className="m-auto text-center text-2xl font-bold"
            alt={toolName}
            width={100}
            height={100}
          />
          <h1 className="mb-6 text-2xl font-bold">{toolName}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TacoCard;
