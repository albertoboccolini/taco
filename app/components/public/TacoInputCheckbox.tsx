import React, { ChangeEventHandler } from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const TacoInputCheckbox: React.FunctionComponent<{
    onChange?: ChangeEventHandler<HTMLInputElement>,
}> = ({
    onChange,
}) => {
        const { darkMode } = DarkModeEngine();

        return (
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={darkMode} onChange={onChange} className="sr-only peer" />
                <div
                    className="relative w-11 h-6 bg-black mr-8 lg:mr-10 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:bg-taco-dark-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
            </label>
        );
    };

export default TacoInputCheckbox;
