import React from "react";

const CalcButtons = ({
  buttons,
  handleInputChange,
  clearInput,
  calculateResult,
}: any) => {
  return (
    <>
      {buttons.map((button: any, index: any) => (
        <button
          key={index}
          onClick={() => {
            if (button === "C") clearInput();
            else if (button === "=") calculateResult();
            else handleInputChange(button);
          }}
          className={`h-12 rounded-full bg-taco-button-bg font-bold text-white shadow-lg transition duration-300 ease-in-out hover:bg-taco-button-bg/80 hover:shadow-xl`}
        >
          {button}
        </button>
      ))}
    </>
  );
};

export default CalcButtons;
