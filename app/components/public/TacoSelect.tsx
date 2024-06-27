import React, { ChangeEventHandler } from "react";
import CustomizationEngine from "./CustomizationEngine";

interface TacoSelectProps {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value: any;
  values: any;
  disabled?: boolean;
}

const TacoSelect: React.FC<TacoSelectProps> = ({
  onChange,
  value,
  values,
  disabled,
}) => {
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <select
      className={`w-80 rounded-md p-2 shadow-xl`}
      style={{ backgroundColor: hexToRgba(bgColor, 10), color: textColor }}
      onChange={onChange}
      value={value}
      disabled={disabled}
    >
      {values.map((option: any) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default TacoSelect;
