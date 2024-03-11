import React from "react";

const SearchBar: React.FC<{ onSearchChange: (value: string) => void }> = ({onSearchChange}) => {
    return (
        <div className="flex items-center rounded-lg bg-white px-4 mr-8 ml-0 shrink-0">
            <input
                className="w-48 px-6 py-2 rounded-xl shrink-0 font-semibold placeholder:font-normal border-2 shadow"
                placeholder="Search..."
                maxLength={30}
                type="search"
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <SearchIcon className="w-4 h-4 ml-4 shrink-0"/>
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
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
        </svg>
    )
}

export default SearchBar;