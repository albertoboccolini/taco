import {useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import ConversionError from "@/app/components/public/errors/ConversionError";

export const Engine = () => {

    const [text, setText] = useState('');
    const [encodeType, setEncodeType] = useState<string>('BASE64');
    const {setError} = NotificationManager();

    const handleEncodeTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setEncodeType(event.target.value);
    };

    const handleEncode = () => {
        if (text === '') {
            return setError(new InvalidParameter("testo"));
        }
        switch (encodeType) {
            case "BASE64":
                const encodedText = base64Encoder(text);
                setText(encodedText);
                break;
            default:
                return setError(new ConversionError("Tipo non riconosciuto."));
        }
    };

    const handleDecode = () => {
        if (text === '') {
            return setError(new InvalidParameter("testo"));
        }
        switch (encodeType) {
            case "BASE64":
                const decodedText = base64Decoder(text);
                setText(decodedText!);
                break;
            default:
                return setError(new ConversionError("Tipo non riconosciuto."));
        }
    };

    const base64Encoder = (text: string) => {
        return btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16))));
    }

    const base64Decoder = (base64: string) => {
        try {
            return atob(base64);
        } catch (e: any) {
            return setError(new ConversionError("Il testo inserito non è ulteriormente decodificabile."));
        }
    }


    return {handleEncode, handleDecode, text, setText, encodeType, handleEncodeTypeChange, base64Decoder, base64Encoder};
};
