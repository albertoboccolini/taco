import React from 'react';
import Image, {StaticImageData} from "next/image";

interface ToolProps {
    logo: StaticImageData;
    toolLink: string;
    toolName: string;
}

const Tool: React.FC<ToolProps> = ({logo, toolLink, toolName}) => {

    return (
        <>
            <a href={toolLink}
               className="inline-block m-2.5 no-underline text-gray-800 hover:scale-125 duration-300">
                <Image src={logo} title={toolName} alt={toolName} width={100} height={100}/>
            </a>
        </>
    );
};

export default Tool;
