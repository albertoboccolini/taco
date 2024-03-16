import React from 'react';
import TacoLogo from "@/app/components/public/TacoLogo";
import SearchBar from "@/app/components/homepage/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Header: React.FunctionComponent<{
    title: string,
    onSearchChange: ((value: string) => void) | null
}> = ({
          title,
          onSearchChange,
      }) => {

    const {darkMode, toggleDarkMode} = DarkModeEngine();

    return (
        <header
            className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} rounded-b-xl py-2.5 flex justify-between items-center w-full`}>
            <title>{title}</title>
            <TacoLogo/>
            <div className="flex items-center">
                <div className={`${onSearchChange ? 'visible' : 'invisible'} flex-grow lg:flex-grow-0`}>
                    <SearchBar onSearchChange={onSearchChange}/>
                </div>
                <FontAwesomeIcon
                    className={`${darkMode ? 'text-white' : 'text-black'} bg-transparent mr-8 ml-4 lg:mr-10 hover:scale-125 duration-300`}
                    icon={faUserAstronaut} size="xl"/>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer"/>
                    <div
                        className="relative w-11 h-6 bg-black mr-8 lg:mr-10 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:bg-taco-dark-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
                </label>
            </div>
        </header>
    );
};

export default Header;
