import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const ActionButton = ({onClick, text}: any) => {

    const {darkMode} = DarkModeEngine();

    return (
        <button type="button"
                onClick={onClick}
                className={`${darkMode ? 'bg-taco-dark-button hover:bg-taco-dark-button/60' : 'bg-taco-button-bg hover:bg-taco-button-bg/80'} hover:scale-105 duration-300 text-white font-bold py-2 px-4 rounded-lg`}>
            {text}
        </button>
    )
};

export default ActionButton;