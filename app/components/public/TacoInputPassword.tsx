import React, { ChangeEventHandler, MouseEventHandler } from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TacoInputPassword: React.FunctionComponent<{
    visiblePassword: boolean,
    value: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    autoComplete?: string
}> = ({
    visiblePassword,
    value,
    onChange,
    onClick,
    autoComplete
}) => {
        const { darkMode } = DarkModeEngine();

        return (
            <div className="relative w-full">
                <input type={visiblePassword ? 'text' : 'password'}
                    value={value}
                    placeholder="Password"
                    onChange={onChange}
                    autoComplete={autoComplete}
                    className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} shadow-md rounded-lg py-2 px-4 font-normal w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg pr-10`}
                />
                <button onClick={onClick}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                    {visiblePassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        );
    };

export default TacoInputPassword;
