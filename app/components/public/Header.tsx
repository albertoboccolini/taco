import React from 'react';
import TacoLogo from "@/app/components/public/TacoLogo";

const Header: React.FunctionComponent<{ title: string }> = ({title}) => (
    <header className="bg-gray-100 py-2.5">
        <title>{title}</title>
        <TacoLogo></TacoLogo>
    </header>
);

export default Header;