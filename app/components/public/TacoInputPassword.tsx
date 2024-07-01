import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomizationEngine from "./CustomizationEngine";

const TacoInputPassword: React.FunctionComponent<{
  visiblePassword: boolean;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  autoComplete?: string;
  disabled?: boolean;
  maxLength?: number;
}> = ({
  visiblePassword,
  value,
  onChange,
  onClick,
  autoComplete,
  disabled,
  maxLength,
}) => {
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <div className="relative w-full">
      <input
        type={visiblePassword ? "text" : "password"}
        value={value}
        placeholder="Password"
        onChange={onChange}
        disabled={disabled}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className={`${textColor == "white" ? "placeholder:text-white" : "placeholder:text-black"} w-full max-w-xs rounded-lg px-4 py-2 pr-10 font-normal shadow-md sm:max-w-sm md:max-w-md lg:max-w-lg`}
        style={{ backgroundColor: hexToRgba(bgColor, 10), color: textColor }}
      />
      <button
        onClick={onClick}
        className="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        {visiblePassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default TacoInputPassword;
