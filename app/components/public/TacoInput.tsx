import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const TacoInput: React.FunctionComponent<{
    id?: string,
    placeholder?: string,
    type: string
    onChange?: ChangeEventHandler<HTMLInputElement>,
    value?: string,
    disabled?: boolean,
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>,
    maxLength?: number,
    checked?: boolean,
    autoComplete?: string,
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
    autoComplete
}) => {
        const { darkMode } = DarkModeEngine();

        return (
            <input placeholder={placeholder}
                id={id}
                className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} mt-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md px-4 py-2 shadow-lg`}
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
