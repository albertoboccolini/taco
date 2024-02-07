'use client'

import React from 'react';

interface CategoryProps {
    onSectionChange: (section: string) => void;
    category: string;
}

const Category: React.FC<CategoryProps> = ({onSectionChange, category}) => {
    return (
        <li className="inline mx-2.5">
            <a className="no-underline text-gray-800" href={"#" + category}
               onClick={() => onSectionChange(category)}>{category}
            </a>
        </li>
    );
};

export default Category;
