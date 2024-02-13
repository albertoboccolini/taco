'use client'

import {useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {ConversionManager} from "@/app/components/tools/converter/ConversionManager";
import ConversionError from "@/app/components/public/errors/ConversionError";

export const Engine = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [conversionType, setConversionType] = useState<string>('PDF');
    const {successNotification, setError} = NotificationManager();
    const conversionManager = ConversionManager();

    function UploadCloudIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
                <path d="M12 12v9"/>
                <path d="m16 16-4-4-4 4"/>
            </svg>
        )
    }


    const downloadConvertedFile = () => {
        if (!conversionManager.isConverted || !conversionManager.conversionUrl) {
            setError(new InvalidParameter("File convertito"));
            return;
        }
        const link = document.createElement('a');
        link.href = conversionManager.conversionUrl;
        const fileName = selectedFile?.name.split(".")[0];
        link.setAttribute('download', fileName + '.pdf'); // Imposta il nome del file per il download
        document.body.appendChild(link); // Aggiungi l'elemento al DOM per rendere possibile il click
        link.click();
        document.body.removeChild(link); // Rimuovi l'elemento dal DOM dopo il click
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleConversionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setConversionType(event.target.value);
    };

    const submitFileForConversion = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        conversionManager.setIsConverted(false);
        conversionManager.setConversionUrl('');
        if (!selectedFile) {
            setError(new InvalidParameter("File"));
            return;
        }

        try {
            switch (conversionType) {
                case "PDF":
                    const pdfConversion = await conversionManager.toPDF(selectedFile);
                    if (pdfConversion instanceof ConversionError) {
                        setError(pdfConversion);
                        return;
                    }
                    break;
                default:
                    setError(new ConversionError("Tipo di conversione non riconosciuto."));
                    return;
            }
            successNotification("Conversione completata, ora puoi scaricare il file.");
        } catch (error: any) {
            setError(error);
        }
    };

    return {
        selectedFile,
        conversionType,
        handleFileChange,
        handleConversionTypeChange,
        submitFileForConversion,
        downloadConvertedFile,
        UploadCloudIcon
    };
};