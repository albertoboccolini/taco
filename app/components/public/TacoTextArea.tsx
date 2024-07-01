import React, { ChangeEventHandler } from "react";
import CustomizationEngine from "./CustomizationEngine";

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
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <textarea
      className={`${textColor == "white" ? "placeholder:text-white" : "placeholder:text-black"} h-64 w-full resize-none rounded-xl px-8 py-6 shadow-xl`}
      style={{ backgroundColor: hexToRgba(bgColor, 10), color: textColor }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TacoTextArea;
