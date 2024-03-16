import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const CalcButtons = ({buttons, handleInputChange, clearInput, calculateResult}: any) => {

    const {darkMode} = DarkModeEngine();

    return (
        <>
            {buttons.map((button: any, index: any) => (
                <button
                    key={index}
                    onClick={() => {
                        if (button === 'C') clearInput();
                        else if (button === '=') calculateResult();
                        else handleInputChange(button);
                    }}
                    className={`${darkMode ? 'bg-taco-dark-button hover:bg-taco-dark-button/60' : 'bg-taco-button-bg hover:bg-taco-button-bg/80'} text-white font-bold h-12 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out`}>
                    {button}
                </button>
            ))
            }</>

    )
};

export default CalcButtons;