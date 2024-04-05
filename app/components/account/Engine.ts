'use client'

import { useState, useEffect } from 'react';

export const Engine = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const apiKey = localStorage.getItem("user-api-key") ?? "";
        setIsAuthenticated(apiKey != "");
    }, []);

    return { isAuthenticated };
}

export default Engine;
