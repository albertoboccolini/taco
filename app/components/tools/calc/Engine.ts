import {useEffect, useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";

export const Engine = () => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState<string | number>('');
    const {setError} = NotificationManager();

    const handleInputChange = (value: string) => {
        setInput((prevInput) => prevInput + value);
    };

    const evaluateExpression = (expression: string) => {
        try {
            let result = Function('"use strict";return (' + expression + ')')();
            return !isNaN(result) ? result : "Error";
        } catch (error) {
            return "Error";
        }
    };

    const calculateResult = () => {
        try {
            if (input === "") {
                setError(new InvalidParameter("operation"));
                return;
            }
            let formattedInput = input
                .replace(/√([a-zA-Z0-9]+)/g, "Math.sqrt($1)")
                .replace(/\^/g, "**");
            const result = evaluateExpression(formattedInput);
            setResult(result);
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const buttons = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        '.', '0', '^', '/',
        '√', '%', 'C', '=',
    ];

    const handleKeyPress = (event: KeyboardEvent) => {
        const {key} = event;
        if (buttons.includes(key) || ['%', '^'].includes(key)) {
            handleInputChange(key);
            return;
        } else if (key === 'Enter' || key === '=') {
            calculateResult();
            return;
        } else if (key === 'Backspace') {
            clearInput();
            return;
        } else if (key === '.') {
            handleInputChange('.');
            return;
        } else if (key === 'r') {
            handleInputChange('√');
            return;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });


    return {input, result, setInput, handleInputChange, calculateResult, clearInput, buttons};
};
