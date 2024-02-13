import QRCode from "qrcode.react";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";


export const Engine = () => {

    const {setError} = NotificationManager();

    const generateQRCode = (url: string) => {
        if (url === "") {
            setError(new InvalidParameter("url"));
            return;
        }
        return <QRCode value={url} size={256} level={"H"} includeMargin={true}/>;
    }

    return {generateQRCode};
}