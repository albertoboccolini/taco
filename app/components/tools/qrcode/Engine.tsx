import QRCode from "qrcode.react";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";


export const Engine = () => {

    const {setError} = NotificationManager();

    const generateQRCode = (string: string) => {
        if (string === "") {
            setError(new InvalidParameter("testo"));
            return;
        }
        return <QRCode value={string} size={256} level={"H"} includeMargin={true}/>;
    }

    return {generateQRCode};
}