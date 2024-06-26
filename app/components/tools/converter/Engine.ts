"use client";

import React, { useState } from "react";
import { NotificationManager } from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import { ConversionManager } from "@/app/components/tools/converter/ConversionManager";
import ConversionError from "@/app/components/public/errors/ConversionError";

export const Engine = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [conversionType, setConversionType] = useState<string>("PDF");
  const { successNotification, setError } = NotificationManager();
  const conversionManager = ConversionManager();

  const downloadConvertedFile = () => {
    if (!conversionManager.isConverted || !conversionManager.conversionUrl) {
      setError(new InvalidParameter("Converted File"));
      return;
    }
    const link = document.createElement("a");
    link.href = conversionManager.conversionUrl;
    const fileName = selectedFile?.name.split(".")[0];
    link.setAttribute("download", fileName + ".pdf"); // Set the file name for download
    document.body.appendChild(link); // Add the element to the DOM to make clicking possible
    link.click();
    document.body.removeChild(link); // Remove element from DOM after click
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleConversionTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setConversionType(event.target.value);
  };

  const submitFileForConversion = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    conversionManager.setIsConverted(false);
    conversionManager.setConversionUrl("");
    if (!selectedFile) {
      setError(new InvalidParameter("File"));
      return;
    }

    try {
      switch (conversionType) {
        case "PDF":
          const pdfConversion = await conversionManager.toPDF(selectedFile);
          if (pdfConversion instanceof ConversionError) {
            setError(pdfConversion);
            return;
          }
          break;
        default:
          setError(new ConversionError("Conversion type not recognized."));
          return;
      }
      successNotification(
        "Conversion completed, you can now download the file.",
      );
    } catch (error: any) {
      setError(error);
    }
  };

  return {
    selectedFile,
    conversionType,
    handleFileChange,
    handleConversionTypeChange,
    submitFileForConversion,
    downloadConvertedFile,
  };
};
