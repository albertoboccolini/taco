import React, {useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {Engine as QRCodeEngine} from "@/app/components/tools/qrcode/Engine";
import GetFileResponseDTO from "@/app/components/dtos/drop/GetFileResponseDTO";
import UploadFileResponseDTO from "@/app/components/dtos/drop/UploadFileResponseDTO";

export const Engine = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [roomId, setRoomId] = useState<string | null>(null);
    const {setError} = NotificationManager();
    const {generateQRCode, setQrCode, qrCode} = QRCodeEngine();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const uploadFile = async () => {
        if (!selectedFile) {
            setError(new InvalidParameter("File"));
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const uploadFileResponse = await fetch('https://taco-api-nine.vercel.app/api/upload-file', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer 55f02c20-d662-46ef-aa12-b98de0a04dff',
                    'Access-Control-Request-Headers': 'Content-Type, Authorization',
                },
                body: formData
            });

            if (uploadFileResponse.ok) {
                const uploadFileResult: UploadFileResponseDTO = await uploadFileResponse.json();
                setRoomId(uploadFileResult.roomID);
                const roomUrl = `https://${window.location.host}/tools/drop/room/?roomId=${uploadFileResult.roomID}`;
                const qrCodeComponent = generateQRCode(roomUrl);
                setQrCode(qrCodeComponent);
            } else {
                setError(new Error('Error during file upload.'));
            }
        } catch (error) {
            setError(new Error('Error during file upload.'));
        }
    };

    return {
        selectedFile,
        handleFileChange,
        uploadFile,
        qrCode,
        roomId
    };
};
