import React, { ChangeEventHandler } from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

interface TacoTextAreaProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  placeholder?: string;
}

const TacoTextArea: React.FC<TacoTextAreaProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const { darkMode } = DarkModeEngine();

  return (
    <textarea
      className={`${darkMode ? "bg-taco-dark-primary text-white" : "bg-white text-black"} h-64 w-full resize-none rounded-xl px-8 py-6 shadow-xl`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TacoTextArea;
