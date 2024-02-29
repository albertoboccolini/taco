import {useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import ConversionError from "@/app/components/public/errors/ConversionError";

type Color = {
    r: number;
    g: number;
    b: number;
}

export const Engine = () => {

    const [selectedColor, setSelectedColor] = useState("#ffffff");
    const [generatedColors, setGeneratedColors] = useState<string[]>([]);

    const isLight = (color: any) => {
        const hex = color.replace('#', '');
        const c_r = parseInt(hex.substr(0, 2), 16);
        const c_g = parseInt(hex.substr(2, 2), 16);
        const c_b = parseInt(hex.substr(4, 2), 16);
        const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
        return brightness > 155;
    };

    const hexToRgb = (hex: string): Color => {
        let r: number = 0, g: number = 0, b: number = 0;
        // 3 digits
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        // 6 digits
        else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return {r, g, b};
    }

    const rgbToHex = (r: number, g: number, b: number): string => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    const adjustHue = (h: number, degrees: number): number => {
        return (h + degrees) % 360;
    }

    const generatePaletteFromColor = (hexColor: string, n: number = 5, spread: number = 30): string[] => {
        const baseColor = hexToRgb(hexColor);
        const hslBase = rgbToHsl(baseColor.r, baseColor.g, baseColor.b);
        let palette: string[] = [];

        // Calcola l'angolo di spostamento per ogni colore nella palette
        const step = spread / (n - 1);

        for (let i = 0; i < n; i++) {
            // Calcola il nuovo hue aggiustando l'angolo basato sulla posizione
            // del colore nella palette e sulla diffusione desiderata
            let h = (hslBase.h! + (i * step) - (spread / 2)) % 360;
            h = h < 0 ? 360 + h : h; // Corregge valori negativi di hue

            const adjustedColor = hslToRgb(h, hslBase.s, hslBase.l);
            palette.push(rgbToHex(adjustedColor.r, adjustedColor.g, adjustedColor.b));
        }

        return palette;
    }


    const rgbToHsl = (r: number, g: number, b: number) => {
        r /= 255, g /= 255, b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h! *= 60;
            if (h! < 0) h! += 360;
        }

        return {h, s, l};
    }

    const hslToRgb = (h: number, s: number, l: number): Color => {
        let r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p: number, q: number, t: number) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h / 360 + 1 / 3);
            g = hue2rgb(p, q, h / 360);
            b = hue2rgb(p, q, h / 360 - 1 / 3);
        }

        return {r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
    }

    const handleGenerateColors = () => {
        const newColors = generatePaletteFromColor(selectedColor, 4);
        console.log(newColors);
        setGeneratedColors(newColors);
    };

    return {
        selectedColor, setSelectedColor, generatedColors, handleGenerateColors, isLight
    }
};
