import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import CustomizationEngine from "./CustomizationEngine";

const TacoInput: React.FunctionComponent<{
  id?: string;
  placeholder?: string;
  type: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  disabled?: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  maxLength?: number;
  checked?: boolean;
  autoComplete?: string;
}> = ({
  placeholder,
  type,
  onChange,
  value,
  id,
  disabled,
  onKeyDown,
  maxLength,
  checked,
  autoComplete,
}) => {
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <input
      placeholder={placeholder}
      id={id}
      className={`${textColor == "white" ? "placeholder:text-white" : "placeholder:text-black"} mt-4 w-full max-w-xs rounded-md px-4 py-2 shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg`}
      style={{ backgroundColor: hexToRgba(bgColor, 10), color: textColor }}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      onKeyDown={onKeyDown}
      maxLength={maxLength}
      checked={checked}
      autoComplete={autoComplete}
    />
  );
};

export default TacoInput;
