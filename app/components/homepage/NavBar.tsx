import React from "react";


const NavBar = () => {
    return (
        <nav className="m-auto">
            <ul className="list-none p-0 text-center">
                <li className="inline mx-2.5"><a className="no-underline text-gray-800"
                                                 href="#calcolatori">Calcolatori</a></li>
                <li className="inline mx-2.5"><a className="no-underline text-gray-800"
                                                 href="#editor">Editor</a></li>
                {/* Altre categorie */}
            </ul>
        </nav>)
}

export default NavBar;