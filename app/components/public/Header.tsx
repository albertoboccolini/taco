import React from 'react';
import TacoLogo from "@/app/components/public/TacoLogo";
import SearchBar from "@/app/components/homepage/SearchBar";

const Header: React.FunctionComponent<{ title: string, onSearchChange: (value: string) => void }> = ({title, onSearchChange}) => (
    <header className="bg-white py-2.5 flex justify-between items-center w-full">
        <title>{title}</title>
        <TacoLogo/>
        <SearchBar onSearchChange={onSearchChange}/>
    </header>
);

export default Header;