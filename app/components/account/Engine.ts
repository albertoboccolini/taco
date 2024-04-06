'use client'

import {useState, useEffect} from 'react';

export const Engine = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const apiKey = localStorage.getItem("user-api-key");
        setIsAuthenticated(apiKey != null);
    }, []);

    const logout = () => {
        localStorage.removeItem("user-api-key");
        localStorage.removeItem("roomID");
        localStorage.setItem("darkMode", "false");
        window.location.href = "/";
    }

    return {isAuthenticated, logout};
}

export default Engine;
