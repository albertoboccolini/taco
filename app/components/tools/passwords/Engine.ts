'use client'

import {NotificationManager} from "@/app/components/public/NotificationManager";
import {useEffect, useState} from "react";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {Engine as EncodeEngine} from "@/app/components/tools/encoder/Engine";

export const Engine = () => {
    const {setError, successNotification} = NotificationManager();
    const [passwords, setPasswords] = useState<Array<{ website: string, username: string, password: string }>>([]);
    const [visiblePasswords, setVisiblePasswords] = useState<boolean[]>(new Array(passwords.length).fill(false));
    const {base64Encoder, base64Decoder} = EncodeEngine();

    const togglePasswordVisibility = (index: number) => {
        const updatedVisibility = [...visiblePasswords];
        updatedVisibility[index] = !updatedVisibility[index];
        setVisiblePasswords(updatedVisibility);
    };

    useEffect(() => {
        const loadedPasswords = JSON.parse(localStorage.getItem('passwords')! || '[]');
        const decodedPasswords = loadedPasswords.map((password: any) => ({
            ...password,
            website: base64Decoder(password.website),
            username: base64Decoder(password.username),
            password: base64Decoder(password.password),
        }));
        setPasswords(decodedPasswords);
    }, []);

    const addPassword = () => {
        setPasswords([...passwords, {website: '', username: '', password: ''}]);
    };

    const checkParameters = (index: number) => {
        if (passwords[index].website === "") {
            return "Website";
        }
        if (passwords[index].username === "") {
            return "Username";
        }
        if (passwords[index].password === "") {
            return "Password";
        }
        return null;
    }

    const savePasswords = (index: number) => {
        const parameter = checkParameters(index);
        if (parameter != null) {
            return setError(new InvalidParameter(parameter));
        }
        try {
            const encodedPasswords = passwords.map(password => ({
                website: base64Encoder(password.website),
                username: base64Encoder(password.username),
                password: base64Encoder(password.password),
            }));
            localStorage.setItem('passwords', JSON.stringify(encodedPasswords));
            successNotification("Password salvata correttamente.");
        } catch (error: any) {
            setError(error);
        }
    };

    const updatePassword = (index: number, field: string, value: string) => {
        const newPasswords: any = [...passwords];
        newPasswords[index][field] = value;
        setPasswords(newPasswords);
    };

    const deletePassword = (index: number) => {
        const newPasswords = passwords.filter((_, i) => i !== index);
        const encodedPasswords = newPasswords.map(password => ({
            website: base64Encoder(password.website),
            username: base64Encoder(password.username),
            password: base64Encoder(password.password),
        }));
        setPasswords(encodedPasswords);
        localStorage.setItem('passwords', JSON.stringify(encodedPasswords));
    };

    return {
        addPassword,
        updatePassword,
        savePasswords,
        deletePassword,
        passwords,
        visiblePasswords,
        togglePasswordVisibility,
    };
}