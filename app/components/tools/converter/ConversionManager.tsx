import ConversionError from "@/app/components/public/errors/ConversionError";
import jsPDF from "jspdf";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import {useState} from "react";

export const ConversionManager = () => {

    const [conversionUrl, setConversionUrl] = useState<string>('PDF');
    const [isConverted, setIsConverted] = useState<boolean>(false);
    const {setError} = NotificationManager();

    const getBase64 = async (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                let encoded = reader.result!.toString().replace(/^data:(.*,)?/, '');
                if ((encoded.length % 4) > 0) {
                    encoded += '='.repeat(4 - (encoded.length % 4));
                }
                resolve(encoded);
            };
            reader.onerror = error => reject(new ConversionError("Controllare il file e riprovare."));
        });
    };

    const toPDF = async (selectedFile: File) => {
        try {
            const doc = new jsPDF();
            if (selectedFile.type.includes("image")) {
                const imgData = await getBase64(selectedFile) as string;
                const type = selectedFile.type.split("/")[1];
                doc.addImage(imgData, type.toUpperCase(), 0, 0, 210, 297); // TO-DO Implement better resolution.
                setConversionUrl(URL.createObjectURL(doc.output('blob')));
            } else if (selectedFile.type.includes("text")) {
                const reader = new FileReader();
                const text = await selectedFile.text();
                doc.text(text, 10, 10);
                setConversionUrl(URL.createObjectURL(doc.output('blob')));
            } else {
                setError(new ConversionError("Tipo del file non riconosciuto."));
            }
            setIsConverted(true);
        } catch (error: any) {
            setError(error);
        }
    }

    return {
        toPDF,
        conversionUrl,
        setConversionUrl,
        isConverted,
        setIsConverted
    };

}