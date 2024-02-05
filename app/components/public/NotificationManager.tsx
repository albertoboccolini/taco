import {toast} from "react-toastify";

export const NotificationManager = () => {
    const errorNotification = (error: String) => {
        toast.error(`Oops! Qualcosa è andato storto: ${error}`, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return errorNotification;
}