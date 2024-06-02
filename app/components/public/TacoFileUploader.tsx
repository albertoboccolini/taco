import React, { ChangeEventHandler } from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TacoFileUploader: React.FunctionComponent<{
  selectedFile: File | null;
  handleFileChange: ChangeEventHandler<HTMLInputElement>;
  accept?: string;
}> = ({ selectedFile, handleFileChange, accept }) => {
  const { darkMode } = DarkModeEngine();

  return (
    <div className="relative mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
      <input
        className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
        id="file-upload"
        accept={accept}
        name="file-upload"
        onChange={handleFileChange}
        type="file"
      />
      <div className="space-y-1 text-center" style={{ zIndex: 0 }}>
        <FontAwesomeIcon
          icon={faFile as any}
          size="xl"
          className="mx-auto text-gray-400"
        />
        <div className="flex text-sm text-black">
          <label
            className="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
            htmlFor="file-upload"
          >
            <span
              className={`${darkMode ? "bg-taco-dark-secondary text-white" : "bg-white text-black"}`}
            >
              {selectedFile ? selectedFile.name : "Select a file"}
            </span>
          </label>
          <p className="pl-1"></p>
        </div>
      </div>
    </div>
  );
};

export default TacoFileUploader;
