import React from "react";
import Image, { StaticImageData } from "next/image";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

interface ToolProps {
  logo: StaticImageData;
  toolLink: string;
  toolName: string;
}

const Tool: React.FC<ToolProps> = ({ logo, toolLink, toolName }) => {
  const { darkMode } = DarkModeEngine();

  return (
    <>
      <a
        href={toolLink}
        className={`${darkMode ? "bg-taco-dark-secondary" : "bg-white"} m-4 inline-block rounded-xl text-gray-800 no-underline shadow-xl duration-500 hover:scale-125`}
      >
        <Image
          src={logo}
          title={toolName}
          alt={toolName}
          width={90}
          height={90}
        />
      </a>
    </>
  );
};

export default Tool;
