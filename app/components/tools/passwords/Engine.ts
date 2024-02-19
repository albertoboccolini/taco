'use client'

import {NotificationManager} from "@/app/components/public/NotificationManager";
import {useEffect, useState} from "react";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import {Engine as EncodeEngine} from "@/app/components/tools/encoder/Engine";
import InvalidPassword from "@/app/components/public/errors/InvalidPassword";

export const Engine = () => {
    const {setError, successNotification} = NotificationManager();
    const [passwords, setPasswords] = useState<Array<{ website: string, username: string, password: string }>>([]);
    const [mainPassword, setMainPassword] = useState<string>("");
    const [visiblePasswords, setVisiblePasswords] = useState<boolean[]>(new Array(passwords.length).fill(false));
    const [visibleMainPassword, setVisibleMainPassword] = useState<boolean>(false);
    const {base64Encoder, base64Decoder} = EncodeEngine();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [mainPasswordLocal, setMainPasswordLocal] = useState<string>("");

    const unlockPasswords = () => {
        setMainPasswordLocal(localStorage.getItem('mainPassword') ?? "");
        if (mainPassword === "") {
            return setError(new InvalidParameter("Main Password"));
        }
        if (mainPasswordLocal === "") {
            localStorage.setItem('mainPassword', mainPassword);
            setMainPasswordLocal(mainPassword);
            return setIsAuthenticated(true);
        }
        if (mainPassword !== mainPasswordLocal) {
            return setError(new InvalidPassword());
        }
        setIsAuthenticated(true);
        reloadPasswords();
    };

    const togglePasswordVisibility = (index: number) => {
        const updatedVisibility = [...visiblePasswords];
        updatedVisibility[index] = !updatedVisibility[index];
        setVisiblePasswords(updatedVisibility);
    };

    const toggleMainPasswordVisibility = () => {
        setVisibleMainPassword(!visibleMainPassword);
    }

    const encodePasswords = () => {
        const encodedPasswords = passwords.map(password => ({
            website: base64Encoder(password.website + "." + mainPassword),
            username: base64Encoder(password.username + "." + mainPassword),
            password: base64Encoder(password.password + "." + mainPassword),
        }));
        return encodedPasswords;
    }

    const reloadPasswords = () => {
        const loadedPasswords = JSON.parse(localStorage.getItem('passwords')! || '[]');
        const decodedPasswords = loadedPasswords.map((password: any) => ({
            ...password,
            website: base64Decoder(password.website)!.toString().replace(mainPassword, ""),
            username: base64Decoder(password.username)!.toString().replace(mainPassword, ""),
            password: base64Decoder(password.password)!.toString().replace(mainPassword, ""),
        }));
        setMainPasswordLocal(localStorage.getItem('mainPassword') ?? "");
        const decodedSplittedPasswords = decodedPasswords.map((password: any) => ({
            ...password,
            website: password.website.toString().replace(".", ""),
            username: password.username.toString().replace(".", ""),
            password: password.password.toString().replace(".", ""),
        }));
        setPasswords(decodedSplittedPasswords);
    }

    useEffect(() => {
        reloadPasswords();
    }, []);

    const addPassword = () => {
        setPasswords([...passwords, {website: '', username: '', password: ''}]);
    };

    const checkParameters = (index: number) => {
        if (mainPassword === "") {
            return "Main password";
        }
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
            const encodedPasswords = encodePasswords();
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

    const updateMainPassword = (value: string) => {
        setMainPassword(value);
    };

    const deletePassword = (index: number) => {
        const newPasswords = passwords.filter((_, i) => i !== index);
        const encodedPasswords = newPasswords.map(password => ({
            website: base64Encoder(password.website + "." + mainPassword),
            username: base64Encoder(password.username + "." + mainPassword),
            password: base64Encoder(password.password + "." + mainPassword),
        }));
        localStorage.setItem('passwords', JSON.stringify(encodedPasswords));
        reloadPasswords();
    };

    return {
        addPassword,
        updatePassword,
        savePasswords,
        deletePassword,
        passwords,
        visiblePasswords,
        togglePasswordVisibility,
        mainPassword,
        updateMainPassword,
        toggleMainPasswordVisibility,
        visibleMainPassword,
        unlockPasswords,
        isAuthenticated
    };
}