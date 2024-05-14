import { NotificationManager } from "@/app/components/public/NotificationManager";
import { useCallback, useEffect, useState } from "react";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import GetPasswordsResponseDTO from "../../dtos/passwords/GetPasswordsResponseDTO";

export const Engine = () => {
    const { setError, successNotification } = NotificationManager();
    const [passwords, setPasswords] = useState<Array<{ website: string, username: string, password: string }>>([]);
    const [updatedPasswords, setUpdatedPasswords] = useState<Array<{ website: string, username: string, password: string }>>([]);
    const [visiblePasswords, setVisiblePasswords] = useState<boolean[]>(new Array(passwords.length).fill(false));
    const [editState, setEditState] = useState<boolean[]>(new Array(passwords.length).fill(false));

    const togglePasswordVisibility = (index: number) => {
        const updatedVisibility = [...visiblePasswords];
        updatedVisibility[index] = !updatedVisibility[index];
        setVisiblePasswords(updatedVisibility);
    };

    const fetchPasswords = useCallback(async () => {
        try {
            const userApiKey = localStorage.getItem("user-api-key");
            if (userApiKey != null) {
                const getPasswordsResponse = await fetch(`https://api.tacotools.dev/api/v1/taco-passwords/get-passwords`, {
                    method: 'GET',
                    mode: "cors",
                    headers: {
                        'Authorization': `Bearer ${userApiKey}`,
                    },
                });
                if (getPasswordsResponse.status !== 404) {
                    const getPasswordsResult: GetPasswordsResponseDTO = await getPasswordsResponse.json();
                    if (getPasswordsResult.data.length > 0) {
                        setPasswords(getPasswordsResult.data)
                        setUpdatedPasswords(getPasswordsResult.data)
                        setEditState(new Array(getPasswordsResult.data.length).fill(true)); // Set all edit states to true
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
        const newPassword = { website: '', username: '', password: '' };
        setPasswords([...passwords, newPassword]);
        setUpdatedPasswords([...updatedPasswords, newPassword]);
        setVisiblePasswords([...visiblePasswords, false]);
        setEditState([...editState, false]); // Initially false, as it's new and unedited.
    };


    const checkParameters = (index: number) => {
        if (updatedPasswords[index].website === "") {
            return "Website";
        }
        if (updatedPasswords[index].username === "") {
            return "Username";
        }
        if (updatedPasswords[index].password === "") {
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
                const response = await fetch("https://api.tacotools.dev/api/v1/taco-passwords/add-password", {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userApiKey}`,
                    },
                    body: JSON.stringify({
                        website: updatedPasswords[index].website,
                        username: updatedPasswords[index].username,
                        password: updatedPasswords[index].password
                    })
                });

                if (response.ok) {
                    successNotification("Password saved successfully.");
                    fetchPasswords().then(); // Refresh the list of passwords after adding new one successfully
                } else {
                    const errorData = await response.json();
                    setError(new Error(errorData.message || "Failed to save password."));
                }
            }
        } catch (error: any) {
            setError(new Error("Failed to save password: " + error.message));
        }
    };


    const updatePasswordToDB = async (index: number) => {
        const currentWebsite = passwords[index]['website']
        const newWebsite = updatedPasswords[index]['website']
        const currentUsername = passwords[index]['username']
        const newUsername = updatedPasswords[index]['username']
        const currentPassword = passwords[index]['password']
        const newPassword = updatedPasswords[index]['password']
        const body = JSON.stringify({
            currentWebsite: currentWebsite,
            newWebsite: newWebsite,
            currentUsername: currentUsername,
            newUsername: newUsername,
            currentPassword: currentPassword,
            newPassword: newPassword
        })
        const parameter = checkParameters(index);
        if (parameter != null) {
            return setError(new InvalidParameter(parameter));
        }
        try {
            const userApiKey = localStorage.getItem("user-api-key");
            if (userApiKey != null) {
                const response = await fetch("https://api.tacotools.dev/api/v1/taco-passwords/update-password", {
                    method: 'PUT',
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userApiKey}`,
                    },
                    body: body
                });

                if (response.ok) {
                    successNotification("Password updated successfully.");
                    fetchPasswords().then();
                } else {
                    const errorData = await response.json();
                    setError(new Error(errorData.message || "Failed to update password."));
                }
            }
        } catch (error: any) {
            setError(new Error("Failed to update password: " + error.message));
        }
    }

    const updatePassword = (index: number, field: string, value: string) => {
        const newUpdatedPasswords: any = updatedPasswords.map(p => ({ ...p }));
        newUpdatedPasswords[index][field] = value;
        setUpdatedPasswords(newUpdatedPasswords);
    };


    const deletePassword = async (index: number) => {
        const newPasswords = passwords.filter((_, i) => i !== index);
        const newUpdatedPasswords = updatedPasswords.filter((_, i) => i !== index);
        const newVisiblePasswords = visiblePasswords.filter((_, i) => i !== index);

        try {
            const userApiKey = localStorage.getItem("user-api-key");
            if (userApiKey != null) {
                const response = await fetch("https://api.tacotools.dev/api/v1/taco-passwords/delete-password", {
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
                    setPasswords(newPasswords);
                    setUpdatedPasswords(newUpdatedPasswords);
                    setVisiblePasswords(newVisiblePasswords);
                    fetchPasswords().then();
                } else {
                    const errorData = await response.json();
                    setError(new Error(errorData.message || "Failed to delete password."));
                }
            }
        } catch (error: any) {
            setError(new Error("Failed to delete password: " + error.message));
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
        updatePasswordToDB,
        updatedPasswords,
        editState,
    };
}
