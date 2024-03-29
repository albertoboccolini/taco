import {useSearchParams} from "next/navigation";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import {useEffect, useState} from "react";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import GetFileResponseDTO from "@/app/components/dtos/drop/GetFileResponseDTO";


export const Engine = () => {
    const searchParams = useSearchParams();
    const roomId = searchParams.get('roomID');
    const {darkMode} = DarkModeEngine();
    const [fileURL, setFileURL] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const {setError, successNotification} = NotificationManager();

    const handleDownload = async () => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

        if (isIOS && fileURL) {
            // Open the file URL directly for iOS devices
            window.open(fileURL, '_blank');
        } else {
            // Proceed with the original download logic for non-iOS devices
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
        }
        await deleteRoom();
    };


    const deleteRoom = async () => {
        if (!roomId) return;

        try {
            const deleteRoomResult = await fetch(`https://taco-api-nine.vercel.app/api/delete-room?roomID=${roomId}`, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Authorization': 'Bearer 55f02c20-d662-46ef-aa12-b98de0a04dff',
                },
            });

            if (!deleteRoomResult.ok) {
                setError(new Error(`Failed to download file.`));
            }
            successNotification("File downloaded successfully.");
        } catch (error: any) {
            setError(error);
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
                    },
                });
                if (getFileResponse.status !== 404) {
                    const getFileResult: GetFileResponseDTO = await getFileResponse.json();
                    setFileURL(getFileResult.fileData.url);
                    setFileName(getFileResult.fileData.file_name);
                }
            } catch (error) {
                setError(new Error("Failed to get File."))
            }
        };

        fetchFile().then();

    }, [roomId, setError]);

    return {
        fileURL,
        fileName,
        handleDownload
    }

}

export default Engine;