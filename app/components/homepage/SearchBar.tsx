import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const SearchBar: React.FC<{ onSearchChange: ((value: string) => void) | null }> = ({
                                                                                       onSearchChange
                                                                                   }: any | null) => {

    const {darkMode} = DarkModeEngine();

    return (
        <div
            className={`${darkMode ? 'text-white bg-taco-dark-primary' : 'text-black bg-white'} flex items-center rounded-lg mr-4 px-4 shrink-0 w-full sm:w-auto`}>
            <div className="relative flex items-center w-full">
                <SearchIcon
                    className={`${darkMode ? 'fill-taco-dark-primary text-taco-dark-secondary' : 'fill-white text-gray-200'} absolute w-6 h-6 sm:w-auto sm:h-auto left-4 z-10`}/>
                <input
                    className={`${darkMode ? 'bg-taco-dark-primary border-taco-dark-secondary text-white' : 'bg-white border-gray-200 text-black'} w-full pl-12 pr-6 py-2 rounded-xl font-semibold placeholder:font-normal border-2 shadow sm:w-auto`}
                    placeholder="Search..."
                    maxLength={30}
                    type="search"
                    onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                />
            </div>
        </div>
    )
}


function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
    )
}

export default SearchBar;
