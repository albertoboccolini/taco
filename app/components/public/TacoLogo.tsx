import Image from "next/image";
import tacoLogo from "@/public/tacoLogo.png";
import React from "react";

const TacoLogo = () => {
    return (
        <div>
            <a href="/">
                <Image src={tacoLogo} alt="Logo Taco" className="font-bold text-2xl text-center m-auto"
                       width={100}
                       height={100}/>
            </a>
        </div>
    )
};

export default TacoLogo;