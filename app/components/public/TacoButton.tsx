import React from "react";

const TacoButton = ({type, onClick, text, key}: any) => {
    return (
        <button type={type} onClick={onClick} key={key}
                className="bg-taco-button-bg hover:bg-taco-button-bg/90 text-white font-bold py-2 px-4 rounded-lg duration-300 disabled:opacity-50 w-full max-w-60 my-2">
            {text}
        </button>
    )
};

export default TacoButton;