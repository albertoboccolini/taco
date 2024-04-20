import {useEffect, useState} from "react";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";
import {jsPDF} from "jspdf";

interface IPDetails {
    ip: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
    readme: string;
}

export const Engine = () => {

    const [ipDetails, setIpDetails] = useState<IPDetails | null>(null);
    const {successNotification, setError} = NotificationManager();

    useEffect(() => {
        fetch('https://ipinfo.io/json')
            .then((response) => response.json())
            .then((data) => setIpDetails(data))
            .catch((error) => setError(new AbstractDisplayableError("Network error", "Failed to Fetch IP Details.")));
    }, [setError]);

    const downloadPDF = () => {
        const doc = new jsPDF();
        const date = new Date().toLocaleString();
        doc.text('IP Details Report', 10, 10);
        doc.text(`Report generated on: ${date}`, 10, 20);
        if (ipDetails) {
            Object.entries(ipDetails).forEach(([key, value], index) => {
                doc.text(`${key.toUpperCase()}: ${value}`, 10, 30 + (10 * index));
            });
        }
        doc.save('IPDetails.pdf');
    };

    const copyPublicIPToClipboard = async () => {
        if (ipDetails == null || ipDetails.ip == null) {
            return setError(new InvalidParameter("Public IP"))
        }
        await navigator.clipboard.writeText(ipDetails.ip);
        successNotification('Copied to clipboard.');
    };

    return {
        ipDetails, copyPublicIPToClipboard, downloadPDF
    };
};

export default Engine;
