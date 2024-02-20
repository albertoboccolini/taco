import React from "react";

const TacoButton = ({type, onClick, text, key}: any) => {
    return (
        <button type={type} onClick={onClick} key={key}
                className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 w-full max-w-60 sm:max-w-sm md:max-w-md lg:max-w-lg my-2">
            {text}
        </button>
    )
};

export default TacoButton;