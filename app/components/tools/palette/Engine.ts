import {useState} from 'react';
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {NotificationManager} from "@/app/components/public/NotificationManager";

type Color = {
    r: number;
    g: number;
    b: number;
}

export const Engine = () => {
    // State for storing the selected color in HEX format
    const [selectedColor, setSelectedColor] = useState("#163146");
    // State for storing the array of generated colors in HEX format
    const [generatedColors, setGeneratedColors] = useState<string[]>([]);
    const {setError} = NotificationManager();

    // Function to download the generated palette as a PNG image
    const downloadPalette = () => {
        // Check if there are no generated colors
        if (generatedColors.length === 0) {
            // Display an error notification if the palette is empty
            return setError(new InvalidParameter("Palette"));
        }

        // Set dimensions for each color block in the palette image
        const width = 250;
        const height = 250;
        const canvas = document.createElement('canvas');
        // Set total canvas width based on the number of colors
        canvas.width = width * generatedColors.length;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // Draw each color on the canvas
        generatedColors.forEach((color, index) => {
            ctx!.fillStyle = color; // Set current color
            ctx!.fillRect(index * width, 0, width, height); // Draw the color block
        });

        // Convert the canvas to a PNG image and trigger the download
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob!);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'palette.png'; // Set the default file name for the download
            document.body.appendChild(a);
            a.click(); // Trigger the download
            document.body.removeChild(a);
            URL.revokeObjectURL(url); // Clean up the URL object
        }, 'image/png');
    };

    // Convert a HEX color to its RGB representation
    const hexToRgb = (hex: string): Color => {
        let r: number = 0, g: number = 0, b: number = 0;
        // Check for shorthand format (3 characters) and convert to full format
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        // Handle standard format (6 characters)
        else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return {r, g, b};
    }

    // Convert RGB color values to a HEX color string
    const rgbToHex = (r: number, g: number, b: number): string => {
        // Convert each color component to hex and concatenate, prefixed with "#"
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }

    // Generate a color palette based on a base HEX color
    const generatePaletteFromColor = (hexColor: string, n: number, spread: number = 30): string[] => {
        const baseColor = hexToRgb(hexColor); // Convert base color to RGB
        const hslBase = rgbToHsl(baseColor.r, baseColor.g, baseColor.b); // Convert RGB to HSL
        let palette: string[] = [hexColor]; // Initialize palette with base color

        // Generate n-1 additional colors for the palette
        for (let i = 0; i < n; i++) {
            // Adjust hue, saturation, and lightness randomly within specified ranges
            let h = (hslBase.h! + Math.random() * spread - spread / 2) % 360;
            let s = Math.max(0, Math.min(1, hslBase.s + Math.random() * 0.2 - 0.1));
            let l = Math.max(0, Math.min(1, hslBase.l + Math.random() * 0.2 - 0.1));

            // Convert the adjusted HSL back to RGB, then to HEX, and add to the palette
            const adjustedColor = hslToRgb(h, s, l);
            palette.push(rgbToHex(adjustedColor.r, adjustedColor.g, adjustedColor.b));
        }

        return palette; // Return the generated palette
    }

    // Converts an RGB color to HSL format
    const rgbToHsl = (r: number, g: number, b: number) => {
        // Normalize RGB values to the range 0-1
        r /= 255, g /= 255, b /= 255;

        // Find the maximum and minimum values among R, G, and B
        const max = Math.max(r, g, b), min = Math.min(r, g, b);

        // Initialize HSL values
        // Calculate luminance
        let h, s, l = (max + min) / 2;

        // If the max and min values are the same, it's achromatic (no hue)
        if (max === min) {
            h = s = 0; // Achromatic
        } else {
            // Calculate the difference between the max and min values
            const d = max - min;

            // Calculate saturation
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            // Calculate hue based on which color is the max value
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0); // Red is max
                    break;
                case g:
                    h = (b - r) / d + 2; // Green is max
                    break;
                case b:
                    h = (r - g) / d + 4; // Blue is max
                    break;
            }

            // Convert hue to degrees
            h! *= 60;
            // Ensure hue is non-negative
            if (h! < 0) h! += 360;
        }

        // Return the HSL representation
        return {h, s, l};
    }

    // Converts an HSL color value to RGB.
    // Input: h (hue) [0-360], s (saturation) [0-1], l (luminance) [0-1]
    // Output: Object with properties r, g, b (red, green, blue) in the range of [0-255]
    const hslToRgb = (h: number, s: number, l: number): Color => {
        let r, g, b;

        // If the saturation is 0, it means we have a shade of gray.
        // Therefore, r, g, and b are all equal to the luminance.
        if (s === 0) {
            r = g = b = l; // Achromatic
        } else {
            // hue2rgb is a helper function that converts the hue to RGB.
            // It takes in p, q, and t, adjusting t if it's outside the [0,1] range.
            const hue2rgb = (p: number, q: number, t: number) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            // Calculate q, considering luminance to adjust the intensity of the color.
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            // Calculate p, used to determine the RGB values.
            const p = 2 * l - q;

            // Convert hue to RGB using the helper function for each color component.
            r = hue2rgb(p, q, h / 360 + 1 / 3);
            g = hue2rgb(p, q, h / 360);
            b = hue2rgb(p, q, h / 360 - 1 / 3);
        }

        // Return the RGB representation, converting each component to a 0-255 range.
        return {r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
    }

    // Function to generate a palette for white color
    const generateWhitePalette = (hexColor: string, n: number) => {
        // Convert the base hex color to RGB format
        const baseColor = hexToRgb(hexColor);
        let palette: string[] = [];
        // Add the base color to the palette in hex format
        palette.push(rgbToHex(baseColor.r, baseColor.g, baseColor.b));
        // Generate 'n' additional colors
        for (let i = 0; i < n; i++) {
            // Randomly choose a hue value between 0 and 360
            const h = Math.floor(Math.random() * 360);
            // Randomly choose a saturation value between 0 and 0.5 to keep the colors light
            const s = Math.random() * 0.5;
            // Choose a lightness value between 0.75 and 1 to ensure the color is a light shade
            const l = 0.75 + Math.random() * 0.25;
            // Convert the HSL color to RGB format
            const color = hslToRgb(h, s, l);
            // Add the new color to the palette in hex format
            palette.push(rgbToHex(color.r, color.g, color.b));
        }
        // Return the complete palette of colors
        return palette;
    };

    // This function generates a color palette based on the input black color in hex format and the number of colors desired in the palette.
    const generateBlackPalette = (hexColor: string, n: number) => {
        // Convert the input hex color to its RGB equivalent using a helper function 'hexToRgb'.
        const baseColor = hexToRgb(hexColor);
        // Initialize the palette array with the original color converted to hex format using 'rgbToHex'.
        let palette: string[] = [];
        palette.push(rgbToHex(baseColor.r, baseColor.g, baseColor.b));
        // Generate 'n' additional colors for the palette.
        for (let i = 0; i < n; i++) {
            // For each color, generate a lightness value 'l' between 0 and 0.5 randomly. This ensures the generated colors are variations of black to grey.
            const l = Math.random() * 0.5;
            // Convert the HSL values to RGB. Since we're generating shades of black, the hue (H) is 0 and saturation (S) is 0, varying only the lightness (L).
            const color = hslToRgb(0, 0, l);
            // Add the newly generated color to the palette after converting it to hex format.
            palette.push(rgbToHex(color.r, color.g, color.b));
        }
        // Return the complete palette array.
        return palette;
    };

    // Handle color generation based on the selected color
    const handleGenerateColors = () => {
        let newColors = [];
        // Special cases for white and black colors
        if (selectedColor.toUpperCase() === "#FFFFFF") {
            // Generate a palette leaning towards lighter colors
            newColors = generateWhitePalette(selectedColor, 3);
        } else if (selectedColor.toUpperCase() === "#000000") {
            // Generate a palette leaning towards darker colors
            newColors = generateBlackPalette(selectedColor, 3);
        } else {
            // Generate a palette based on the selected color
            newColors = generatePaletteFromColor(selectedColor, 3);
        }
        setGeneratedColors(newColors); // Update the state with the new colors
    };

    return {
        selectedColor, setSelectedColor, generatedColors, handleGenerateColors,  downloadPalette
    }
};
