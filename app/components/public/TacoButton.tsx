import React, { MouseEventHandler } from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

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
  const { darkMode } = DarkModeEngine();

  return (
    <button
      type={type}
      onClick={onClick}
      key={key}
      className={`${darkMode ? "bg-taco-dark-button hover:bg-taco-dark-button/60" : "bg-taco-button-bg hover:bg-taco-button-bg/80"} my-2 w-full max-w-60 rounded-lg px-4 py-2 font-bold text-white shadow-xl duration-500 hover:scale-105 disabled:opacity-50`}
    >
      {text}
    </button>
  );
};

export default TacoButton;
