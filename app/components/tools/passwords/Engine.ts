'use client'

import {NotificationManager} from "@/app/components/public/NotificationManager";
import {useEffect, useState} from "react";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";

export const Engine = () => {
    const {setError, successNotification} = NotificationManager();
    const [passwords, setPasswords] = useState<Array<{ website: string, username: string, password: string }>>([]);

    const [visiblePasswords, setVisiblePasswords] = useState<boolean[]>(new Array(passwords.length).fill(false));

    // Toggle password visibility
    const togglePasswordVisibility = (index: number) => {
        const updatedVisibility = [...visiblePasswords];
        updatedVisibility[index] = !updatedVisibility[index];
        setVisiblePasswords(updatedVisibility);
    };

    useEffect(() => {
        const loadedPasswords = JSON.parse(localStorage.getItem('passwords') || '[]');
        setPasswords(loadedPasswords);
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
            localStorage.setItem('passwords', JSON.stringify(passwords));
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
        setPasswords(newPasswords);
        localStorage.setItem('passwords', JSON.stringify(newPasswords));
    };

    return {
        addPassword,
        updatePassword,
        savePasswords,
        deletePassword,
        passwords,
        visiblePasswords,
        togglePasswordVisibility
    };
}