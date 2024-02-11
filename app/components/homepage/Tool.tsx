import React from 'react';
import Image, {StaticImageData} from "next/image";

interface ToolProps {
    logo: StaticImageData;
    toolLink: string;
    category: string;
    activeSection: string;
}

const Tool: React.FC<ToolProps> = ({logo, toolLink, category, activeSection}) => {

    return (
        <>
            {(activeSection === 'all' || activeSection === category) && (
                <a href={toolLink}
                   className="inline-block m-2.5 no-underline text-gray-800">
                    <Image src={logo} alt="tool" width={100} height={100}/>
                </a>
            )}</>
    );
};

export default Tool;
