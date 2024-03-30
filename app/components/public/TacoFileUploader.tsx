import React from "react";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";

const TacoFileUploader: React.FunctionComponent<{
    selectedFile: any | null,
    handleFileChange: any | null
}> = ({
          selectedFile,
          handleFileChange,
      }) => {
    const {darkMode} = DarkModeEngine();

    function UploadCloudIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
                <path d="M12 12v9"/>
                <path d="m16 16-4-4-4 4"/>
            </svg>
        );
    }

    return (
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 relative">
            <input
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                id="file-upload"
                name="file-upload"
                onChange={handleFileChange}
                type="file"
            />
            <div className="space-y-1 text-center" style={{zIndex: 0}}>
                <UploadCloudIcon className="mx-auto h-12 w-12 text-gray-400"/>
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
