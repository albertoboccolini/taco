import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const TacoTextArea = ({value, onChange, placeholder}: any) => {

    const {darkMode} = DarkModeEngine();

    return (
        <textarea
            className={`${darkMode ? 'bg-taco-dark-primary text-white' : 'bg-white text-black'} rounded-xl shadow-xl px-8 py-6 w-full h-64`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
};

export default TacoTextArea;