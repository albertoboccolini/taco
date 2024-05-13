import { NotificationManager } from "@/app/components/public/NotificationManager";
import { useCallback, useEffect, useState } from "react";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import GetPasswordsResponseDTO from "../../dtos/passwords/GetPasswordsResponseDTO";

export const Engine = () => {
    const { setError, successNotification } = NotificationManager();
    const [passwords, setPasswords] = useState<Array<{ website: string, username: string, password: string }>>([]);
    const [visiblePasswords, setVisiblePasswords] = useState<boolean[]>(new Array(passwords.length).fill(false));

    const togglePasswordVisibility = (index: number) => {
        const updatedVisibility = [...visiblePasswords];
        updatedVisibility[index] = !updatedVisibility[index];
        setVisiblePasswords(updatedVisibility);
    };

    const fetchPasswords = useCallback(async () => {
        try {
            const userApiKey = localStorage.getItem("user-api-key");
            if (userApiKey != null) {
                // TODO: Update endpoints
                const getPasswordsResponse = await fetch(`https://taco-api-git-taco-passwords-albertoboccolinis-projects.vercel.app/api/v1/taco-passwords/get-passwords`, {
                    method: 'GET',
                    mode: "cors",
                    headers: {
                        'Authorization': `Bearer ${userApiKey}`,
                    },
                });
                if (getPasswordsResponse.status !== 401) {
                    const getPasswordsResult: GetPasswordsResponseDTO = await getPasswordsResponse.json();
                    if (getPasswordsResult.data.length > 0) {
                        setPasswords(getPasswordsResult.data)
                    }
                }
            }
        } catch (error) {
            setError(new Error("Failed to get passwords."))
        }
    }, [setError])

    useEffect(() => {
        fetchPasswords().then();
    }, [fetchPasswords]);

    const addPassword = () => {
        setPasswords([...passwords, { website: '', username: '', password: '' }]);
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

    const savePassword = async (index: number) => {
        const parameter = checkParameters(index);
        if (parameter != null) {
            return setError(new InvalidParameter(parameter));
        }
        try {
            const userApiKey = localStorage.getItem("user-api-key");
            if (userApiKey != null) {
                // TODO: Update endpoints
                const response = await fetch("https://taco-api-git-taco-passwords-albertoboccolinis-projects.vercel.app/api/v1/taco-passwords/add-password", {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userApiKey}`,
                    },
                    body: JSON.stringify({
                        website: passwords[index].website,
                        username: passwords[index].username,
                        password: passwords[index].password
                    })
                });

                if (response.ok) {
                    successNotification("Password saved successfully.");
                    fetchPasswords().then(); // Refresh the list of passwords.
                } else {
                    const errorData = await response.json();
                    setError(new Error(errorData.message || "Failed to save password."));
                }
            }
        } catch (error: any) {
            setError(new Error("Failed to save password: " + error.message));
        }
    };

    const updatePasswordToDB = (index: number) => {
        // TODO: Update password in DB with API.
    }

    const updatePassword = (index: number, field: string, value: string) => {
        const newPasswords: any = [...passwords];
        newPasswords[index][field] = value;
        setPasswords(newPasswords);
    };

    const deletePassword = async (index: number) => {
        const newPasswords = passwords.filter((_, i) => i !== index);
        try {
            const userApiKey = localStorage.getItem("user-api-key");
            if (userApiKey != null) {
                // TODO: Update endpoints
                const response = await fetch("https://taco-api-git-taco-passwords-albertoboccolinis-projects.vercel.app/api/v1/taco-passwords/delete-password", {
                    method: 'DELETE',
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userApiKey}`,
                    },
                    body: JSON.stringify({
                        website: passwords[index].website,
                        username: passwords[index].username,
                        password: passwords[index].password
                    })
                });

                if (response.ok) {
                    successNotification("Password deleted successfully.");
                    setPasswords(newPasswords)
                    fetchPasswords().then();
                } else {
                    const errorData = await response.json();
                    setError(new Error(errorData.message || "Failed to delete password."));
                }
            }
        } catch (error: any) {
            setError(new Error("Failed to save password: " + error.message));
        }
    };

    return {
        addPassword,
        updatePassword,
        savePassword,
        deletePassword,
        passwords,
        visiblePasswords,
        togglePasswordVisibility,
        updatePasswordToDB
    };
}