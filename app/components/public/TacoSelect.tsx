import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const TacoSelect = ({onChange, value, values, disabled}: any) => {

    const {darkMode} = DarkModeEngine();

    return (
        <select
            className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-gray-200 text-black'} shadow-xl p-2 w-80 rounded-md`}
            onChange={onChange}
            value={value}
            disabled={disabled}>
            {values.map((option: any) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    )
};

export default TacoSelect;