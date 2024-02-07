'use client'

import React from 'react';
import Category from "@/app/components/homepage/Category";

interface NavigationBarProps {
    onSectionChange: (section: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({onSectionChange}) => {
    return (
        <nav className="m-auto bg-gray-100 py-2.5">
            <ul className="list-none p-0 text-center">
                <Category onSectionChange={onSectionChange} category={"converter"}/>
                <Category onSectionChange={onSectionChange} category={"generator"}/>
                <Category onSectionChange={onSectionChange} category={"other"}/>
            </ul>
        </nav>
    );
};

export default NavigationBar;
