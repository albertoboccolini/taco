'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Peer from 'simple-peer';

const Page = () => {
    const searchParams = useSearchParams();
    const roomId = searchParams.get('roomId');
    const [file, setFile] = useState<{ name: string; content: ArrayBuffer } | null>(null);
    const [peerSignal, setPeerSignal] = useState<any>(null);

    useEffect(() => {
        if (!roomId) return;

        const peer = new Peer({
            initiator: false,
            trickle: false
        });

        peer.on('signal', data => {
            console.log('Segnale inviato:', data);
        });

        peer.on('data', (data) => {
            try {
                const { fileName, fileContent } = JSON.parse(data.toString());
                setFile({ name: fileName, content: fileContent });
            } catch (error) {
                console.error("Errore nella gestione del file ricevuto:", error);
            }
        });

        if (peerSignal) {
            peer.signal(peerSignal);
        }

        return () => {
            if (peer) peer.destroy();
        };
    }, [roomId, peerSignal]);

    const handlePeerSignal = (signalData: any) => {
        setPeerSignal(signalData);
    };

    const handleDownload = () => {
        if (file) {
            const blob = new Blob([new Uint8Array(file.content)], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div>
            <h1>Stanza: {roomId}</h1>
            {file && (
                <div>
                    <button onClick={handleDownload}>Scarica il file</button>
                </div>
            )}
        </div>
    );
};

export default Page;
