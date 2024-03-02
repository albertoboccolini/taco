import ConversionError from "@/app/components/public/errors/ConversionError";
import jsPDF from "jspdf";
import {useState} from "react";

export const ConversionManager = () => {

    const [conversionUrl, setConversionUrl] = useState<string>('PDF');
    const [isConverted, setIsConverted] = useState<boolean>(false);

    const getBase64 = async (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject("Please check the file and try again.");
        });
    };

    const toPDF = async (selectedFile: File): Promise<any> => {
        try {
            const doc = new jsPDF();
            if (selectedFile.type.includes("image")) {
                const imgData = await getBase64(selectedFile);
                const img = new Image();

                img.onload = async () => {
                    const pageWidth = 210;
                    const pageHeight = 297;
                    const ratio = Math.min(pageWidth / img.width, pageHeight / img.height);
                    const imgWidth = img.width * ratio;
                    const imgHeight = img.height * ratio;
                    doc.addImage(imgData as string, 'JPEG', 0, 0, imgWidth, imgHeight);
                    setConversionUrl(URL.createObjectURL(doc.output('blob')));
                    setIsConverted(true);
                };

                img.onerror = () => {
                    return new ConversionError("Error loading image.");
                };

                img.src = imgData as string;
            } else if (selectedFile.type.includes("text")) {
                const text = await selectedFile.text();
                doc.text(text, 10, 10);
                setConversionUrl(URL.createObjectURL(doc.output('blob')));
            } else {
                return new ConversionError("Unrecognized file type.");
            }
            return setIsConverted(true);
        } catch (error: any) {
            return new ConversionError(error);
        }
    }

    return {
        toPDF,
        conversionUrl,
        setConversionUrl,
        isConverted,
        setIsConverted
    };

}