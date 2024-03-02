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
    const [localMainPassword, setLocalMainPassword] = useState<string>("");

    const unlockPasswords = () => {
        setLocalMainPassword(localStorage.getItem('mainPassword') ?? "");
        if (mainPassword === "") {
            return setError(new InvalidParameter("Main Password"));
        }
        if (localMainPassword === "") {
            localStorage.setItem('mainPassword', base64Encoder(mainPassword));
            localStorage.removeItem('passwords');
            setPasswords([]);
            setLocalMainPassword(mainPassword);
            return setIsAuthenticated(true);
        }
        const decodedLocalMainPassword = base64Decoder(localMainPassword)!;
        if (mainPassword !== decodedLocalMainPassword) {
            return setError(new InvalidPassword());
        }
        setLocalMainPassword(decodedLocalMainPassword);
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

    const encodePasswords = (passwordsToBeEncoded: Array<{ website: string, username: string, password: string }>) => {
        return passwordsToBeEncoded.map((password) => ({
            website: base64Encoder(password.website + "." + mainPassword),
            username: base64Encoder(password.username + "." + mainPassword),
            password: base64Encoder(password.password + "." + mainPassword),
        }));
    }

    const reloadPasswords = () => {
        const loadedPasswords = JSON.parse(localStorage.getItem('passwords')! || '[]');
        const decodedPasswords = loadedPasswords.map((password: any) => ({
            ...password,
            website: base64Decoder(password.website)!.toString().replace("." + mainPassword, ""),
            username: base64Decoder(password.username)!.toString().replace("." + mainPassword, ""),
            password: base64Decoder(password.password)!.toString().replace("." + mainPassword, ""),
        }));
        setLocalMainPassword(localStorage.getItem('mainPassword') ?? "");
        setPasswords(decodedPasswords);
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
            const encodedPasswords = encodePasswords(passwords);
            localStorage.setItem('passwords', JSON.stringify(encodedPasswords));
            successNotification("Password saved successfully.");
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
        const encodedPasswords = encodePasswords(newPasswords);
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