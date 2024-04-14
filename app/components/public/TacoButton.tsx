import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const TacoButton = ({type, onClick, text, key}: any) => {

    const {darkMode} = DarkModeEngine();

    return (
        <button type={type} onClick={onClick} key={key}
                className={`${darkMode ? 'bg-taco-dark-button hover:bg-taco-dark-button/60' : 'bg-taco-button-bg hover:bg-taco-button-bg/80'} shadow-xl text-white hover:scale-105 font-bold py-2 px-4 rounded-lg duration-500 disabled:opacity-50 w-full max-w-60 my-2`}>
            {text}
        </button>
    )
};

export default TacoButton;