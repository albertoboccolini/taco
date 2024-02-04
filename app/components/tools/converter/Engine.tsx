'use client'

import {useState} from 'react';

export const Engine = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [conversionType, setConversionType] = useState<string>('PDF');
    const [conversionManager, setConversionManager] = useState<string>('CloudConvert');
    const [isConverted, setIsConverted] = useState<boolean>(false);
    let apiKey = '';

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== apiKey) {
            apiKey = event.target.value;
        }
    };

    const downloadConvertedFile = () => {
        if (!isConverted) {
            console.log("File is not ready for download.");
            return;
        }
        console.log("Downloading the converted file.");
    };

    const handleConversionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setConversionType(event.target.value);
    };

    const handleConversionManagerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setConversionManager(event.target.value);
    };

    const submitFileForConversion = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!selectedFile) {
            alert('Please select a file.');
            return;
        }
        if (apiKey == "") {
            alert('Please enter api key.');
            return;
        }
        const body = {
            "tasks": {
                "import-1": {
                    "operation": "import/upload",
                    "file": selectedFile,
                },
                "task-1": {
                    "operation": "convert",
                    "input_format": selectedFile.type,
                    "output_format": conversionType.toLowerCase(),
                    "input": ["import-1"]
                }
            },
            "tag": "taco"
        };
        console.log(apiKey);
        console.log(body);

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
                console.log(`File converted successfully: ${result}`);
                setIsConverted(true);
            } else {
                alert('Failed to convert the file.');
            }
        } catch (error) {
            console.error('Error submitting the file for conversion:', error);
            alert('An error occurred while converting the file.');
        }
        alert(`Your file ${selectedFile.name} has been submitted for conversion to ${conversionType}.`);
    };

    return {
        selectedFile,
        conversionType,
        isConverted,
        handleFileChange,
        handleApiKeyChange,
        handleConversionManagerChange,
        handleConversionTypeChange,
        submitFileForConversion,
        downloadConvertedFile
    };
};