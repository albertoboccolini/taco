'use client'

import {useEffect, useState} from 'react';
import {NotificationManager} from "@/app/components/public/NotificationManager";
import AbstractDisplayableError from "@/app/components/public/errors/AbstractDisplayableError";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";

export const Engine = () => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState<string | number>('');
    const {errorNotification, successNotification, error, setError} = NotificationManager();

    // Gestisce l'aggiunta di input da parte dell'utente
    const handleInputChange = (value: string) => {
        setInput((prevInput) => prevInput + value);
    };

    // Calcola il risultato basato sull'input dell'utente
    const calculateResult = () => {
        try {
            if (input == "") {
                setError(new InvalidParameter("operazione"));
                return;
            }
            const result = eval(input);
            setResult(result);
        } catch (error) {
            setResult('Error');
        }
    };

    // Pulisce l'input e il risultato
    const clearInput = () => {
        setInput('');
        setResult('');
    };

    // Tasti della calcolatrice
    const buttons = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        'C', '0', '=', '/'
    ];


    useEffect(() => {
        if (error) {
            if (error instanceof AbstractDisplayableError) {
                errorNotification(error);
            } else {
                errorNotification(new AbstractDisplayableError("Errore generico", "Si prega di contattare il supporto."));
            }
            setError(null);
        }
    }, [error]);

    return {input, result, setInput, handleInputChange, calculateResult, clearInput, buttons};
};