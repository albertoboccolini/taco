'use client'

import {useEffect, useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";
import CloudConvertConversionError from "@/app/components/public/errors/CloudConvertConversionError";
import Base64ConvertError from "@/app/components/public/errors/Base64ConvertError";

export const Engine = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [conversionType, setConversionType] = useState<string>('PDF');
    const [conversionManager, setConversionManager] = useState<string>('CloudConvert');
    let isConverted = false;
    const [apiKey, setApiKey] = useState<String>('');
    let conversionUrl = "";
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const {errorNotification, successNotification, error, setError} = NotificationManager();

    const getBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            let encoded = reader.result!.toString().replace(/^data:(.*,)?/, '');
            if ((encoded.length % 4) > 0) {
                encoded += '='.repeat(4 - (encoded.length % 4));
            }
            resolve(encoded);
        };
        reader.onerror = function (error) {
            setError(new Base64ConvertError());
            return;
        };
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== apiKey) {
            setApiKey(event.target.value);
        }
    };

    const downloadConvertedFile = () => {
        if (!isConverted) {
            setError(new InvalidParameter("File convertito"));
            return;
        }
        return window.location.href = conversionUrl as string;
    };

    const handleConversionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setConversionType(event.target.value);
    };

    const handleConversionManagerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setConversionManager(event.target.value);
    };

    const submitFileForConversion = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        conversionUrl = "";
        isConverted = false;
        if (!selectedFile) {
            setError(new InvalidParameter("File"));
            return;
        }
        if (apiKey == "") {
            setError(new InvalidParameter("API Key"));
            return;
        }

        const body = {
            "tasks": {
                "import-1": {
                    "operation": "import/base64",
                    "file": await getBase64(selectedFile),
                    "filename": selectedFile.name
                },
                "task-1": {
                    "operation": "convert",
                    "input_format": selectedFile.type.split("/")[1],
                    "output_format": conversionType.toLowerCase(),
                    "input": ["import-1"]
                },
                "export-1": {
                    "operation": "export/url",
                    "input": [
                        "task-1"
                    ],
                    "inline": false,
                    "archive_multiple_files": false
                }
            },
            "tag": "taco"
        };

        try {
            const response = await fetch('https://api.cloudconvert.com/v2/jobs', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify(body)
            });
            if (response.ok) {
                const result = await response.json();
                const taskLink = result["data"]["links"]["self"];
                let status = "";
                let taskResult;
                do {
                    sleep(5000);
                    const taskResponse = await fetch(taskLink, {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            'Authorization': `Bearer ${apiKey}`
                        },
                    });
                    taskResult = await taskResponse.json();
                    status = taskResult["data"]["status"];
                } while (status != "finished");
                conversionUrl = taskResult["data"]["tasks"][0]["result"]["files"][0]["url"];
                isConverted = true;
                successNotification("Conversione completata, ora puoi scaricare il file.");
            } else {
                setError(new CloudConvertConversionError(response.status));
            }
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        if (error) {
            if (error instanceof AbstractDisplayableError) {
                errorNotification(error);
            } else {
                errorNotification(new AbstractDisplayableError("Errore generico", "Si prega di contattare il supporto."));
            }
            setError(null);
        }
    }, [error]);

    return {
        selectedFile,
        conversionType,
        conversionManager,
        conversionUrl,
        isConverted,
        handleFileChange,
        handleApiKeyChange,
        handleConversionManagerChange,
        handleConversionTypeChange,
        submitFileForConversion,
        downloadConvertedFile
    };
};