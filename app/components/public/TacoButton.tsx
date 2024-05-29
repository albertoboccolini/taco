import React, { MouseEventHandler } from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

interface TacoButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
    type: "submit" | "reset" | "button"
    text: string
    key?: string
}

const TacoButton: React.FC<TacoButtonProps> = ({ type, onClick, text, key }) => {

    const { darkMode } = DarkModeEngine();

    return (
        <button type={type} onClick={onClick} key={key}
            className={`${darkMode ? 'bg-taco-dark-button hover:bg-taco-dark-button/60' : 'bg-taco-button-bg hover:bg-taco-button-bg/80'} shadow-xl text-white hover:scale-105 font-bold py-2 px-4 rounded-lg duration-500 disabled:opacity-50 w-full max-w-60 my-2`}>
            {text}
        </button>
    )
};

export default TacoButton;