// Import useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Define a global variable to keep the state of dark mode
let darkModeState: boolean;
// Create a Set to hold all listener functions that need to be notified when darkModeState changes
const listeners = new Set<(darkModeState: boolean) => void>();

// Function to notify all registered listeners about the change in dark mode state
const notifyListeners = () => {
  // Iterate over each listener in the Set and call it with the current darkModeState
  listeners.forEach((listener) => listener(darkModeState));
};

// Define the main functional component DarkModeEngine
export const DarkModeEngine = () => {
  // useEffect hook to initialize the darkModeState from localStorage
  useEffect(() => {
    // Retrieve 'darkMode' item from localStorage, parse it to boolean, default to false if not found
    darkModeState = JSON.parse(localStorage.getItem("darkMode") || "false");
  }, []); // Empty dependency array means this effect runs once on mount

  // useState hook to manage and render darkMode state within this component
  const [darkMode, setDarkMode] = useState(darkModeState || false);

  // useEffect hook to register and clean up a listener for darkModeState changes
  useEffect(() => {
    // Define a listener function that updates the component's state based on the global darkModeState
    const listener = (newState: boolean) => {
      setDarkMode(newState);
    };
    // Add the listener to the global Set of listeners
    listeners.add(listener);

    // Initialize component's state with the global darkModeState
    setDarkMode(darkModeState);

    // Cleanup function to remove the listener from the global Set when the component unmounts
    return () => {
      listeners.delete(listener);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup runs on unmount

  // Function to toggle dark mode both globally and in localStorage
  const toggleDarkMode = () => {
    // Toggle the global dark mode state
    darkModeState = !darkModeState;
    // Update 'darkMode' item in localStorage with the new state
    localStorage.setItem("darkMode", JSON.stringify(darkModeState));
    // Notify all registered listeners about the change in dark mode state
    notifyListeners();
  };

  // Return the current dark mode state and the toggle function from this hook
  return { darkMode, toggleDarkMode };
};

// Export the DarkModeEngine component as default
export default DarkModeEngine;
