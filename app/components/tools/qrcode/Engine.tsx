import { QRCode } from "react-qrcode-logo";
import { NotificationManager } from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import { ReactNode, useState } from "react";

export const Engine = () => {
  const { setError } = NotificationManager();
  const [string, setString] = useState("");
  const [qrCode, setQrCode] = useState<ReactNode>(null);

  const handleGenerate = () => {
    const qrCodeComponent = generateQRCode(string);
    setQrCode(qrCodeComponent);
  };

  const generateQRCode = (string: string) => {
    if (string === "") {
      setError(new InvalidParameter("text"));
      return;
    }
    return (
      <QRCode
        value={string}
        id="qrCode"
        size={200}
        qrStyle="squares"
        ecLevel={"H"}
        eyeRadius={2}
      />
    );
  };

  const downloadQRCode = () => {
    const canvas: any = document.getElementById("qrCode");
    if (!canvas) {
      return setError(new InvalidParameter("QR Code"));
    }
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `generated.png`;
    downloadLink.click();
  };

  return {
    string,
    setString,
    qrCode,
    handleGenerate,
    downloadQRCode,
    generateQRCode,
    setQrCode,
  };
};
