import {useState, useEffect} from "react";

let darkModeState = false;
const listeners = new Set<(darkModeState: boolean) => void>();

const notifyListeners = () => {
    listeners.forEach((listener) => listener(darkModeState));
};

export const DarkModeEngine = () => {
    const [darkMode, setDarkMode] = useState(darkModeState);

    useEffect(() => {
        const listener = (newState: any) => {
            setDarkMode(newState);
        };
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    }, []);

    const toggleDarkMode = () => {
        darkModeState = !darkModeState;
        notifyListeners();
    };

    return {darkMode, toggleDarkMode};
};

export default DarkModeEngine;
