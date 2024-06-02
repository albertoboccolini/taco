import Image from "next/image";
import tacoLogo from "@/public/tacoLogo.png";
import tacoLogoWhite from "@/public/tacoLogoWhite.png";
import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const TacoLogo: React.FC = () => {
  const { darkMode } = DarkModeEngine();

  return (
    <div className="w-40">
      <a href="/" className="w-20">
        <Image
          src={darkMode ? tacoLogoWhite : tacoLogo}
          alt="Logo Taco"
          title="taco | homepage"
          className="m-auto text-center text-2xl font-bold"
          width={100}
          height={100}
          priority={true}
        />
      </a>
    </div>
  );
};

export default TacoLogo;
