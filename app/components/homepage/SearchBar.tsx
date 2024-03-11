import React from "react";

const SearchBar: React.FC<{ onSearchChange: ((value: string) => void) | null }> = ({onSearchChange}: any | null) => {
    return (
        <div className="flex items-center rounded-lg mr-4 bg-white px-4 shrink-0">
            <div className="relative flex items-center w-full">
                <SearchIcon className="absolute left-4 z-10 fill-white text-gray-400"/>
                <input
                    className="w-48 pl-12 pr-6 py-2 rounded-xl shrink-0 bg-white font-semibold placeholder:font-normal border-2 shadow"
                    placeholder="Search..."
                    maxLength={30}
                    type="search"
                    onChange={(e) => onSearchChange(e.target.value)}
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
