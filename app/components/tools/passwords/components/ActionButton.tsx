import React from "react";

const ActionButton = ({onClick, text}: any) => {
    return (
        <button type="button"
                onClick={onClick}
                className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg">{text}
        </button>
    )
};

export default ActionButton;