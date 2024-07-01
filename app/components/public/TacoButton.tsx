import React, { MouseEventHandler } from "react";

interface TacoButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "reset" | "button";
  text: string;
  key?: string;
}

const TacoButton: React.FC<TacoButtonProps> = ({
  type,
  onClick,
  text,
  key,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      key={key}
      className={`my-2 w-full max-w-60 rounded-lg bg-taco-button-bg px-4 py-2 font-bold text-white shadow-xl duration-500 hover:scale-105 hover:bg-taco-button-bg/80 disabled:opacity-50`}
    >
      {text}
    </button>
  );
};

export default TacoButton;
