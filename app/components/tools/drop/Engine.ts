import React, {useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {Engine as QRCodeEngine} from "@/app/components/tools/qrcode/Engine";
import UploadFileResponseDTO from "@/app/components/dtos/drop/UploadFileResponseDTO";

export const Engine = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [roomID, setRoomID] = useState<string | null>(null);
    const [roomURL, setRoomURL] = useState<string | null>(null);
    const {setError} = NotificationManager();
    const {generateQRCode, setQrCode, qrCode} = QRCodeEngine();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    // If roomID is already set calls delete-room endpoint to delete previous uploaded file
    async function deleteRoom(roomID: string) {
        try {
            const deleteRoomURL = `https://api.tacotools.dev/api/delete-room?roomID=${roomID}`;
            await fetch(deleteRoomURL, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Authorization': 'Bearer 55f02c20-d662-46ef-aa12-b98de0a04dff',
                },
            });
        } catch (error: any) {
            setError(error);
        }
    }

    const uploadFile = async () => {
        if (!selectedFile) {
            setError(new InvalidParameter("File"));
            return;
        }

        const roomIDFromStorage = localStorage.getItem("roomID");

        if (roomID && roomID !== roomIDFromStorage) {
            await deleteRoom(roomID);
        }

        if (roomIDFromStorage) {
            await deleteRoom(roomIDFromStorage);
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const uploadFileResponse = await fetch('https://api.tacotools.dev/api/upload-file', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer 55f02c20-d662-46ef-aa12-b98de0a04dff',
                },
                body: formData
            });

            if (uploadFileResponse.ok) {
                const uploadFileResult: UploadFileResponseDTO = await uploadFileResponse.json();
                setRoomID(uploadFileResult.roomID);
                localStorage.setItem("roomID", uploadFileResult.roomID);
                const roomUrl = `https://${window.location.host}/tools/drop/room/?roomID=${uploadFileResult.roomID}`;
                setRoomURL(roomUrl);
                const qrCodeComponent = generateQRCode(roomUrl!);
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
        roomURL
    };
};
