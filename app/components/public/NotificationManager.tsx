import {toast} from "react-toastify";
import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";

export const NotificationManager = () => {
    const errorNotification = (error: AbstractDisplayableError) => {
        toast.error(`${error.name}: ${error.message}`, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const successNotification = (notification: string) => {
        toast.success(notification, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return {errorNotification, successNotification};
}