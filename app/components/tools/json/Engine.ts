import React, { useState } from "react";
import { NotificationManager } from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";

export const Engine = () => {
  const [input, setInput] = useState("");

  const { setError, successNotification } = NotificationManager();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const formatAndValidateJSON = () => {
    try {
      if (input === "") {
        return setError(new InvalidParameter("JSON"));
      }
      const formattedJson = JSON.stringify(JSON.parse(input), null, 4);
      setInput(formattedJson);
      successNotification("JSON is valid and formatted!");
    } catch (error) {
      setError(new Error("Invalid JSON!"));
      return;
    }
  };

  const copyToClipboard = async () => {
    if (input === "") {
      return setError(new InvalidParameter("JSON"));
    }
    await navigator.clipboard.writeText(input);
    successNotification("Copied to clipboard.");
  };

  return {
    input,
    handleInputChange,
    formatAndValidateJSON,
    copyToClipboard,
  };
};

export default Engine;
