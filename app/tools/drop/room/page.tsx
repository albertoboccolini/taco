'use client'

import React, {useEffect, useState, Suspense} from 'react';
import {useSearchParams} from 'next/navigation';
import TacoButton from "@/app/components/public/TacoButton";
import Header from "@/app/components/public/Header";
import Image from "next/image";
import tacoDropLogo from "@/public/tacoDropLogo.png";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import GetFileResponseDTO from "@/app/components/dtos/drop/GetFileResponseDTO";

const RoomPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RoomContent/>
        </Suspense>
    );
};

const RoomContent = () => {
    const searchParams = useSearchParams();
    const roomId = searchParams.get('roomId');
    const {darkMode} = DarkModeEngine();
    const [fileURL, setFileURL] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const {setError} = NotificationManager();

    const handleDownload = async () => {
        const response = await fetch(fileURL!);
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName!;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
        await deleteRoom();
    };


    const deleteRoom = async () => {
        if (roomId) {
            try {
                const deleteRoomResult = await fetch(`https://taco-api-nine.vercel.app/api/delete-room?roomID=${roomId}`, {
                    method: 'GET',
                    mode: "cors",
                    headers: {
                        'Authorization': 'Bearer 55f02c20-d662-46ef-aa12-b98de0a04dff',
                        'Access-Control-Request-Headers': 'Content-Type, Authorization',
                    },
                });
                if (!deleteRoomResult.ok) {
                    setError(new Error("Failed to delete room, please contact support."));
                }
            } catch (error) {
                setError(new Error("Failed to delete room, please contact support."));
            }
        }
    }

    useEffect(() => {
        if (!roomId) return;

        const fetchFile = async () => {
            try {
                const getFileResponse = await fetch(`https://taco-api-nine.vercel.app/api/get-file?roomID=${roomId}`, {
                    method: 'GET',
                    mode: "cors",
                    headers: {
                        'Authorization': 'Bearer 55f02c20-d662-46ef-aa12-b98de0a04dff',
                        'Access-Control-Request-Headers': 'Content-Type, Authorization',
                    },
                });
                if (getFileResponse.status == 404) {
                    return setError(new InvalidParameter("file"));
                } else {
                    const getFileResult: GetFileResponseDTO = await getFileResponse.json();
                    setFileURL(getFileResult.fileData.url);
                    setFileName(getFileResult.fileData.file_name);
                }

            } catch (error) {
            }
        };

        fetchFile().then();

    }, [roomId, setError]);

    return (
        <>
            <div className={`${darkMode ? 'bg-taco-dark-primary' : 'bg-white'} text-gray-800 m-0 p-0`}>
                <Header title={"taco | drop"} onSearchChange={null}/>
                <main className="px-4 py-10 m-auto max-w-4xl sm:p-10">
                    <div className="text-center p-5 m-auto">
                        <div className="mx-auto max-w-md space-y-8">
                            <div
                                className={`${darkMode ? 'bg-taco-dark-secondary text-white' : 'bg-white text-black'} rounded-xl px-8 py-6 shadow-xl items-center`}>

                                <Image src={tacoDropLogo}
                                       className="font-bold text-2xl text-center m-auto"
                                       alt="taco encoder"
                                       width={100} height={100}/>
                                <h1 className="font-bold text-2xl mb-6">{fileName || "Waiting for file..."}</h1>
                                {fileURL ? (
                                    <TacoButton type={"button"} text={"Download"} onClick={handleDownload}/>) : null}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default RoomPage;