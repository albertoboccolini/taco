import {useState} from 'react';
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {NotificationManager} from "@/app/components/public/NotificationManager";

type Color = {
    r: number;
    g: number;
    b: number;
}

export const Engine = () => {
    // State for storing the selected color
    const [selectedColor, setSelectedColor] = useState("#163146");
    // State for storing the array of generated colors
    const [generatedColors, setGeneratedColors] = useState<string[]>([]);
    const {setError} = NotificationManager();

    const downloadPalette = () => {
        if (generatedColors.length === 0) {
            return setError(new InvalidParameter("Palette"));
        }
    };

    // Function to check if the color is light or dark
    const isLight = (color: any) => {
        const hex = color.replace('#', '');
        const c_r = parseInt(hex.slice(0, 2), 16);
        const c_g = parseInt(hex.slice(2, 4), 16);
        const c_b = parseInt(hex.slice(4, 6), 16);
        const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
        return brightness > 155;
    };

    // Function to convert HEX color to RGB format
    const hexToRgb = (hex: string): Color => {
        let r: number = 0, g: number = 0, b: number = 0;
        // Handling 3 digit HEX color
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        // Handling 6 digit HEX color
        else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return {r, g, b};
    }

    // Function to convert RGB color to HEX format
    const rgbToHex = (r: number, g: number, b: number): string => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    // Function to adjust hue with a given degree
    const adjustHue = (h: number, degrees: number): number => {
        return (h + degrees) % 360;
    }

    // Function to generate a color palette from a base color
    const generatePaletteFromColor = (hexColor: string, n: number = 5, spread: number = 30): string[] => {
        const baseColor = hexToRgb(hexColor);
        const hslBase = rgbToHsl(baseColor.r, baseColor.g, baseColor.b);
        let palette: string[] = [];
        palette.push(rgbToHex(baseColor.r, baseColor.g, baseColor.b));
        const step = spread / (n - 1);

        for (let i = 0; i < n; i++) {
            let h = (hslBase.h! + (i * step) - (spread / 2)) % 360;
            h = h < 0 ? 360 + h : h;

            const adjustedColor = hslToRgb(h, hslBase.s, hslBase.l);
            palette.push(rgbToHex(adjustedColor.r, adjustedColor.g, adjustedColor.b));
        }

        return palette;
    }

    // Function to convert RGB color to HSL format
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

    // Function to convert HSL color to RGB format
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

    // Function to generate a palette for white color
    const generateWhitePalette = (hexColor: string, n: number) => {
        const baseColor = hexToRgb(hexColor);
        let palette: string[] = [];
        palette.push(rgbToHex(baseColor.r, baseColor.g, baseColor.b));
        for (let i = 0; i < n; i++) {
            const h = Math.floor(Math.random() * 360);
            const s = Math.random() * 0.5;
            const l = 0.75 + Math.random() * 0.25;
            const color = hslToRgb(h, s, l);
            palette.push(rgbToHex(color.r, color.g, color.b));
        }
        return palette;
    };

    // Function to generate a palette for black color
    const generateBlackPalette = (hexColor: string, n: number) => {
        const baseColor = hexToRgb(hexColor);
        let palette: string[] = [];
        palette.push(rgbToHex(baseColor.r, baseColor.g, baseColor.b));
        for (let i = 0; i < n; i++) {
            const l = Math.random() * 0.5;
            const color = hslToRgb(0, 0, l);
            palette.push(rgbToHex(color.r, color.g, color.b));
        }
        return palette;
    };

    // Function to handle the generation of new colors based on the selected color
    const handleGenerateColors = () => {
        let newColors = [];
        if (selectedColor.toUpperCase() === "#FFFFFF") {
            newColors = generateWhitePalette(selectedColor, 3);
        } else if (selectedColor.toUpperCase() === "#000000") {
            newColors = generateBlackPalette(selectedColor, 3);
        } else {
            newColors = generatePaletteFromColor(selectedColor, 3);
        }
        console.log(newColors)
        setGeneratedColors(newColors);
    };

    return {
        selectedColor, setSelectedColor, generatedColors, handleGenerateColors, isLight, downloadPalette
    }
};
