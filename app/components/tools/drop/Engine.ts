import React, {useState} from 'react';
import Peer from 'simple-peer';
import {v4} from "uuid";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {Engine as QRCodeEngine} from "@/app/components/tools/qrcode/Engine";

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

    const generateRoomId = () => {
        const id = v4();
        setRoomId(id);
        return id;
    };

    const initPeer = () => {
        const id = generateRoomId();
        const peer = new Peer({initiator: true, trickle: false});

        peer.on('signal', data => {
            const roomUrl = `https://taco-preview.vercel.app/tools/drop/room/?roomId=${id}`;
            const qrCodeComponent = generateQRCode(roomUrl);
            setQrCode(qrCodeComponent);
        });

        peer.on('connect', () => {
            if (selectedFile) {
                const reader = new FileReader();
                reader.onload = () => {
                    if (reader.result) {
                        peer.send(reader.result);
                    }
                };
                reader.readAsArrayBuffer(selectedFile);
            }
        });
    };

    const generateFileQRCode = () => {
        if (!selectedFile) {
            setError(new InvalidParameter("File"));
            return;
        }
        initPeer();
    };

    return {
        selectedFile,
        handleFileChange,
        generateFileQRCode,
        qrCode,
        roomId
    };
};
