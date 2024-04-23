import React, {useState} from "react";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";


export const Engine = () => {
    const [file, setFile] = React.useState<File | null>(null);
    const [image, setImage] = useState<string>('');
    const [processedImage, setProcessedImage] = useState<string>('');
    const {setError} = NotificationManager();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files![0];
        if (uploadedFile) {
            setFile(uploadedFile);
            const reader = new FileReader();
            reader.onload = (e) => {
                const src = e.target!.result as string;
                setImage(src);
            };
            reader.readAsDataURL(uploadedFile);
        }
    };

    const removeBackground = async () => {
        if (!image) {
            setError(new InvalidParameter("Image"))
            return;
        }
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = image;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx!.drawImage(img, 0, 0);
            const imageData = ctx!.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            const backgroundColor = {
                r: data[0],
                g: data[1],
                b: data[2]
            };

            const tolerance = 50;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                if (Math.abs(r - backgroundColor.r) < tolerance &&
                    Math.abs(g - backgroundColor.g) < tolerance &&
                    Math.abs(b - backgroundColor.b) < tolerance) {
                    data[i + 3] = 0;
                }
            }
            ctx!.putImageData(imageData, 0, 0);
            setProcessedImage(canvas.toDataURL());
        };
    };


    const downloadImage = () => {
        if (!processedImage) {
            setError(new InvalidParameter("Processed image"))
            return;
        }
        const link = document.createElement('a');
        link.href = processedImage;
        link.download = file?.name.replace(/\.[^/.]+$/, "") + '-removed.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return {
        file, handleImageChange, removeBackground, downloadImage, image, processedImage
    };
};

export default Engine;
