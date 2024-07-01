import { toast } from "react-toastify";
import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";
import { useEffect, useState } from "react";
import CustomizationEngine from "./CustomizationEngine";

export const NotificationManager = () => {
  const [error, setError] = useState<AbstractDisplayableError | null>(null);
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  const successNotification = (notification: string) => {
    toast.success(notification, {
      style: { background: hexToRgba(bgColor, 10), color: textColor },
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (error) {
      toast.error(`${error.name}: ${error.message}`, {
        style: { background: hexToRgba(bgColor, 10), color: textColor },
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(null);
    }
  }, [bgColor, error, hexToRgba, textColor]);

  return { successNotification, setError };
};
