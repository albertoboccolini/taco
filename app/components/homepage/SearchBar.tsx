import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchBar: React.FC<{ onSearchChange: ((value: string) => void) | null }> = ({
                                                                                       onSearchChange
                                                                                   }: any | null) => {

    const {darkMode} = DarkModeEngine();
    const [showSearchBar, setShowSearchBar] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState(""); // State to hold the value of the search input

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setShowSearchBar(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setSearchValue(newValue); // Update the searchValue state
        if (onSearchChange) {
            onSearchChange(newValue);
        }
    };

    return (
        <div
            className={`${darkMode ? 'text-white bg-taco-dark-primary' : 'text-black bg-white'} flex items-center rounded-lg mr-4 px-4 shrink-0 w-full sm:w-auto`}>
            <div className="relative flex items-center w-full">
                {showSearchBar ?
                    <div className="transition-all duration-500 flex flex-col items-center justify-center text-center">
                        <FontAwesomeIcon onClick={() => {
                            setShowSearchBar(false)
                        }}
                                         size="lg"
                                         icon={faSearch as any}
                                         className={`${darkMode ? 'fill-taco-dark-primary text-taco-dark-secondary' : 'fill-white text-gray-200'} absolute w-6 h-6 sm:w-auto sm:h-auto left-4 z-10`}/>
                        <input
                            className={`${darkMode ? 'bg-taco-dark-primary border-taco-dark-secondary text-white' : 'bg-white border-gray-200 text-black'} w-full pl-12 pr-6 py-2 rounded-xl font-semibold placeholder:font-normal border-2 shadow sm:w-auto`}
                            placeholder="Search..."
                            maxLength={30}
                            type="search"
                            value={searchValue} // Bind the input to searchValue state
                            onKeyDown={handleKeyDown}
                            onChange={handleInputChange}
                        />
                    </div>
                    :
                    <div className="flex items-center mr-4">
                        <FontAwesomeIcon
                            icon={faSearch as any}
                            onClick={() => setShowSearchBar(true)}
                            size="xl"
                            className={`${darkMode ? 'text-white' : 'fill-white text-black'} hover:scale-125 duration-500 absolute sm:w-auto sm:h-auto z-10`}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchBar;
