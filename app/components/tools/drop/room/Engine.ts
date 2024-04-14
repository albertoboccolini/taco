import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import GetFileResponseDTO from "@/app/components/dtos/drop/GetFileResponseDTO";
import UnauthorizedUser from "@/app/components/public/errors/UnauthorizedUser";


export const Engine = () => {
    const searchParams = useSearchParams();
    const roomId = searchParams.get('roomID');
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
            const userApiKey = localStorage.getItem("user-api-key") ?? "";
            if (userApiKey === "") {
                return setError(new UnauthorizedUser());
            }
            const deleteRoomResult = await fetch(`https://api.tacotools.dev/api/delete-rooms`, {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Authorization': `Bearer ${userApiKey}`,
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
                const userApiKey = localStorage.getItem("user-api-key");
                if (userApiKey != null) {
                    const getFileResponse = await fetch(`https://api.tacotools.dev/api/get-file?roomID=${roomId}`, {
                        method: 'GET',
                        mode: "cors",
                        headers: {
                            'Authorization': `Bearer ${userApiKey}`,
                        },
                    });
                    if (getFileResponse.status !== 404) {
                        const getFileResult: GetFileResponseDTO = await getFileResponse.json();
                        setFileURL(getFileResult.fileData.url);
                        setFileName(getFileResult.fileData.file_name);
                    }
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