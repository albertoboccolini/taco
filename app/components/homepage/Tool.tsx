import React from "react";
import Image, { StaticImageData } from "next/image";
import CustomizationEngine from "../public/CustomizationEngine";

interface ToolProps {
  logo: StaticImageData;
  toolLink: string;
  toolName: string;
}

const Tool: React.FC<ToolProps> = ({ logo, toolLink, toolName }) => {
  const { bgColor, hexToRgba } = CustomizationEngine();

  return (
    <>
      <a
        href={toolLink}
        className={`m-4 inline-block rounded-xl no-underline shadow-xl duration-500 hover:scale-125`}
        style={{ backgroundColor: hexToRgba(bgColor, 10) }}
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
