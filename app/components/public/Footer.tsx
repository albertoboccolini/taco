import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const Footer = () => {
  const { darkMode } = DarkModeEngine();

  return (
    <footer
      className={`${darkMode ? "bg-taco-dark-primary text-white" : "bg-white text-black"} fixed bottom-0 left-0 h-16 w-full rounded-t-xl py-2.5 text-center text-sm font-bold text-black`}
    >
      <p className="mt-2">&copy; 2024 albertoboccolini | taco</p>
    </footer>
  );
};

export default Footer;
