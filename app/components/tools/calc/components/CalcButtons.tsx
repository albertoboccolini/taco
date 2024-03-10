import React from "react";

const CalcButtons = ({buttons, handleInputChange, clearInput, calculateResult}: any) => {

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
                    className="bg-taco-button-bg hover:bg-taco-button-bg/90 text-white font-bold h-12 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                >
                    {button}
                </button>
            ))
            }</>

    )
};

export default CalcButtons;