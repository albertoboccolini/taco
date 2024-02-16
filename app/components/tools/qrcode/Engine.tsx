import QRCode from "qrcode.react";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {ReactNode, useState} from "react";


export const Engine = () => {

    const {setError} = NotificationManager();
    const [string, setString] = useState('');
    const [qrCode, setQrCode] = useState<ReactNode>(null);

    const handleGenerate = () => {
        const qrCodeComponent = generateQRCode(string);
        setQrCode(qrCodeComponent);
    };

    const generateQRCode = (string: string) => {
        if (string === "") {
            setError(new InvalidParameter("testo"));
            return;
        }
        return <QRCode value={string} size={256} level={"H"} includeMargin={true}/>;
    }

    return {string, setString, qrCode, handleGenerate};
}