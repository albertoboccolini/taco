import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TacoInput from "../public/TacoInput";
import CustomizationEngine from "../public/CustomizationEngine";

const SearchBar: React.FC<{
  onSearchChange: ((value: string) => void) | null;
}> = ({ onSearchChange }: any | null) => {
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();
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
      className={`mr-4 flex w-full shrink-0 items-center rounded-lg px-4 sm:w-auto`}
      style={{ backgroundColor: bgColor, color: textColor }}
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
              className={`${textColor == "white" ? "fill-white text-white" : "fill-black text-taco-dark-secondary"} absolute left-4 z-10 h-6 w-6 sm:h-auto sm:w-auto`}
            />
            <input
              className={`${textColor == "white" ? "border-white placeholder:text-white" : "border-black"} w-full rounded-xl border-2 py-2 pl-12 pr-6 font-semibold shadow placeholder:font-normal sm:w-auto`}
              style={{
                backgroundColor: hexToRgba(bgColor, 10),
                color: textColor,
              }}
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
              className={`${textColor == "white" ? "text-white" : "fill-white text-black"} absolute z-10 duration-500 hover:scale-125 sm:h-auto sm:w-auto`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
