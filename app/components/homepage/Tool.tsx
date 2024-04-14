import React from 'react';
import Image, {StaticImageData} from "next/image";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

interface ToolProps {
    logo: StaticImageData;
    toolLink: string;
    toolName: string;
}

const Tool: React.FC<ToolProps> = ({logo, toolLink, toolName}) => {

    const {darkMode} = DarkModeEngine();

    return (
        <>
            <a href={toolLink}
               className={`${darkMode ? "bg-taco-dark-secondary" : "bg-white"} inline-block m-4 shadow-xl rounded-xl no-underline text-gray-800 hover:scale-125 duration-500`}>
                <Image src={logo} title={toolName} alt={toolName} width={90} height={90}/>
            </a>
        </>
    );
};

export default Tool;
