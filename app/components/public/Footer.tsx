import React from 'react';
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Footer = () => {

    const {darkMode} = DarkModeEngine();

    return (
        <footer
            className={`${darkMode ? 'bg-taco-background-dark text-white' : 'bg-white text-black'} font-bold text-center text-sm w-full h-14 bottom-0 rounded-t-xl py-2.5 text-black left-0 fixed`}>
            <p className="mt-2">&copy; 2024 albertoboccolini | taco</p>
        </footer>
    );
};

export default Footer;