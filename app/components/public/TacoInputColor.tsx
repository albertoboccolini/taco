import React, { ChangeEventHandler } from "react";

const TacoInputColor: React.FunctionComponent<{
    onChange?: ChangeEventHandler<HTMLInputElement>,
    selectedColor: string,
    key?: number,
    disabled?: boolean,
}> = ({
    onChange,
    selectedColor,
    key,
    disabled
}) => {

        // Function to check if the color is light or dark based on its brightness
        const isLight = (color: any) => {
            const hex = color.replace('#', '');
            const c_r = parseInt(hex.slice(0, 2), 16);
            const c_g = parseInt(hex.slice(2, 4), 16);
            const c_b = parseInt(hex.slice(4, 6), 16);
            // Calculate the brightness using the luminance formula
            const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
            // Determine if the color is light or dark
            return brightness > 155;
        };

        return (
            <div
                key={key}
                className="relative flex flex-col items-center justify-center p-4 rounded-md border-none"
                style={{ backgroundColor: selectedColor }}>
                <input type="color" value={selectedColor}
                    onChange={onChange}
                    className={`${disabled == undefined ? "hover:cursor-pointer" : "hover:cursor-default"} w-full h-16 opacity-0 absolute`} disabled={disabled} />
                <div className="w-fit h-16 rounded border-none" />
                <span className="mt-2 text-md text-gray-500"
                    style={{ color: isLight(selectedColor) ? '#000000' : '#FFFFFF' }}>{selectedColor.toUpperCase()}</span>
            </div>
        );
    };

export default TacoInputColor;
