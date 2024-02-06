import React from "react";

const NavigationBar = () => {
    return (
        <nav className="m-auto bg-gray-100 py-2.5">
            <ul className="list-none p-0 text-center">
                <li className="inline mx-2.5">
                    <a className="no-underline text-gray-800"
                       href="#calcolatori">Calcolatori
                    </a>
                </li>
                <li className="inline mx-2.5">
                    <a className="no-underline text-gray-800"
                       href="#editor">Editor
                    </a>
                </li>
                {/* Altre categorie */}
            </ul>
        </nav>
    )
}

export default NavigationBar;