import React, { ChangeEventHandler } from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

interface TacoSelectProps {
    onChange: ChangeEventHandler<HTMLSelectElement>
    value: any
    values: any
    disabled?: boolean
}

const TacoSelect: React.FC<TacoSelectProps> = ({ onChange, value, values, disabled }) => {

    const { darkMode } = DarkModeEngine();

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