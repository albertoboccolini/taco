import { useState, useEffect } from "react";

// Define a global variable to keep the state of the background color and text color
let bgColorState = "#FFFFFF";
let textColorState = "black";

// Create a Set to hold all listener functions that need to be notified when bgColorState changes
const listeners = new Set<
  (bgColorState: string, textColorState: string) => void
>();

// Function to notify all registered listeners about the change in background and text color
const notifyListeners = () => {
  // Iterate over each listener in the Set and call it with the current bgColorState and textColorState
  listeners.forEach((listener) => listener(bgColorState, textColorState));
};

// Function to determine if a color is light or dark
const isLight = (color: string) => {
  const hex = color.replace("#", "");
  const c_r = parseInt(hex.slice(0, 2), 16);
  const c_g = parseInt(hex.slice(2, 4), 16);
  const c_b = parseInt(hex.slice(4, 6), 16);
  // Calculate the brightness using the luminance formula
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  // Determine if the color is light or dark
  return brightness > 155;
};

const hexToRgba = (color: string, alpha: number) => {
  const hex = color.replace("#", "");
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  return `rgba(${r + alpha}, ${g + alpha}, ${b + alpha})`;
};

// Define the main functional component CustomizationEngine
export const CustomizationEngine = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  // useEffect hook to initialize the bgColorState and textColorState from localStorage
  useEffect(() => {
    // Retrieve 'bgColor' item from localStorage, default to a specific color if not found (e.g., "#FFFFFF")
    bgColorState = localStorage.getItem("bgColor") || "#FFFFFF";
    // Determine initial textColor based on bgColorState
    textColorState = isLight(bgColorState) ? "black" : "white";
    // Retrieve 'textColor' item from localStorage if exists
    textColorState = localStorage.getItem("textColor") || textColorState;
  }, []); // Empty dependency array means this effect runs once on mount

  // useState hooks to manage and render bgColor and textColor state within this component
  const [bgColor, setBgColor] = useState(bgColorState);
  const [textColor, setTextColor] = useState(textColorState);

  // useEffect hook to register and clean up a listener for bgColorState and textColorState changes
  useEffect(() => {
    // Define a listener function that updates the component's state based on the global bgColorState and textColorState
    const listener = (newBgColor: string, newTextColor: string) => {
      setBgColor(newBgColor);
      setTextColor(newTextColor);
    };
    // Add the listener to the global Set of listeners
    listeners.add(listener);

    // Initialize component's state with the global bgColorState and textColorState
    setBgColor(bgColorState);
    setTextColor(textColorState);

    // Cleanup function to remove the listener from the global Set when the component unmounts
    return () => {
      listeners.delete(listener);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup runs on unmount

  // Function to update the background color and text color both globally and in localStorage
  const changeBgColor = (newColor: string) => {
    // Update the global background color state
    bgColorState = newColor;
    // Update the text color based on the new background color
    textColorState = isLight(newColor) ? "black" : "white";
    // Update 'bgColor' and 'textColor' items in localStorage with the new colors
    localStorage.setItem("bgColor", newColor);
    localStorage.setItem("textColor", textColorState);
    // Notify all registered listeners about the change in background and text color
    notifyListeners();
  };

  // Return the current background color, text color, and the change function from this hook
  return {
    bgColor,
    changeBgColor,
    showColorPicker,
    setShowColorPicker,
    textColor,
    hexToRgba,
  };
};

// Export the CustomizationEngine component as default
export default CustomizationEngine;
