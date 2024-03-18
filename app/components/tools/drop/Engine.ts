'use client'

import React, {useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {Engine as QRCodeEngine} from "@/app/components/tools/qrcode/Engine";

export const Engine = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const {successNotification, setError} = NotificationManager();

    const {generateQRCode, setQrCode, qrCode} = QRCodeEngine();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files);
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const generateFileQRCode = () => {
        if (!selectedFile) {
            return setError(new InvalidParameter("File"));
        }
        const qrCodeComponent = generateQRCode(URL.createObjectURL(selectedFile!));
        setQrCode(qrCodeComponent);
    }


    return {
        selectedFile,
        handleFileChange,
        generateFileQRCode,
        qrCode
    };
};