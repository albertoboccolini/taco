import {toast} from "react-toastify";
import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";
import {useEffect, useState} from 'react';

export const NotificationManager = () => {

    const [error, setError] = useState<AbstractDisplayableError | null>(null);

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

    useEffect(() => {
        if (error) {
            errorNotification(error);
            setError(null);
        }
    }, [error]);

    return {successNotification, setError};
}