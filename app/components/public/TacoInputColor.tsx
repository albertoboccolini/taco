import React, { ChangeEventHandler } from "react";

const TacoInputColor: React.FunctionComponent<{
  onChange?: ChangeEventHandler<HTMLInputElement>;
  selectedColor: string;
  key?: number;
  disabled?: boolean;
}> = ({ onChange, selectedColor, key, disabled }) => {
  // Function to check if the color is light or dark based on its brightness
  const isLight = (color: any) => {
    const hex = color.replace("#", "");
    const c_r = parseInt(hex.slice(0, 2), 16);
    const c_g = parseInt(hex.slice(2, 4), 16);
    const c_b = parseInt(hex.slice(4, 6), 16);
    // Calculate the brightness using the luminance formula
    const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
    // Determine if the color is light or dark
    return brightness > 155;
  };

  return (
    <div
      key={key}
      className="relative flex flex-col items-center justify-center rounded-md border-none p-4"
      style={{ backgroundColor: selectedColor }}
    >
      <input
        type="color"
        value={selectedColor}
        onChange={onChange}
        className={`${disabled == undefined ? "hover:cursor-pointer" : "hover:cursor-default"} absolute h-16 w-full opacity-0`}
        disabled={disabled}
      />
      <div className="h-16 w-fit rounded border-none" />
      <span
        className="text-md mt-2 text-gray-500"
        style={{ color: isLight(selectedColor) ? "#000000" : "#FFFFFF" }}
      >
        {selectedColor.toUpperCase()}
      </span>
    </div>
  );
};

export default TacoInputColor;
