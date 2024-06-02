import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TacoInput from "../public/TacoInput";

const SearchBar: React.FC<{
  onSearchChange: ((value: string) => void) | null;
}> = ({ onSearchChange }: any | null) => {
  const { darkMode } = DarkModeEngine();
  const [showSearchBar, setShowSearchBar] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState(""); // State to hold the value of the search input

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
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
      className={`${darkMode ? "bg-taco-dark-primary text-white" : "bg-white text-black"} mr-4 flex w-full shrink-0 items-center rounded-lg px-4 sm:w-auto`}
    >
      <div className="relative flex w-full items-center">
        {showSearchBar ? (
          <div className="flex flex-col items-center justify-center text-center transition-all duration-500">
            <FontAwesomeIcon
              onClick={() => {
                setShowSearchBar(false);
              }}
              size="lg"
              icon={faSearch as any}
              className={`${darkMode ? "fill-taco-dark-primary text-taco-dark-secondary" : "fill-white text-gray-200"} absolute left-4 z-10 h-6 w-6 sm:h-auto sm:w-auto`}
            />
            <input
              className={`${darkMode ? "border-taco-dark-secondary bg-taco-dark-primary text-white" : "border-gray-200 bg-white text-black"} w-full rounded-xl border-2 py-2 pl-12 pr-6 font-semibold shadow placeholder:font-normal sm:w-auto`}
              placeholder="Search..."
              maxLength={30}
              type="search"
              value={searchValue}
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
              disabled={false}
            />
          </div>
        ) : (
          <div className="mr-4 flex items-center">
            <FontAwesomeIcon
              icon={faSearch as any}
              onClick={() => setShowSearchBar(true)}
              size="xl"
              className={`${darkMode ? "text-white" : "fill-white text-black"} absolute z-10 duration-500 hover:scale-125 sm:h-auto sm:w-auto`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
