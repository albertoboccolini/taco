import React from 'react';
import TacoLogo from "@/app/components/public/TacoLogo";
import SearchBar from "@/app/components/homepage/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";

const Header: React.FunctionComponent<{ title: string, onSearchChange: ((value: string) => void) | null }> = ({
                                                                                                                  title,
                                                                                                                  onSearchChange
                                                                                                              }: any | null) => (
    <header className="bg-white rounded-b-xl py-2.5 flex justify-between items-center w-full">
        <title>{title}</title>
        <TacoLogo/>
        <div className="flex items-center">
            <div className={`${onSearchChange ? 'visible' : 'invisible'} flex-grow lg:flex-grow-0`}>
                <SearchBar onSearchChange={onSearchChange}/></div>
            <FontAwesomeIcon className="mr-8 lg:mr-10 hover:scale-125 text-black duration-300"
                             icon={faUserAstronaut} size="xl"/>
        </div>
    </header>
);

export default Header;
