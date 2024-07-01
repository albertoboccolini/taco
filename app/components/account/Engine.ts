"use client";

import { useState, useEffect } from "react";
import AuthenticationError from "@/app/components/public/errors/AuthenticationError";
import { NotificationManager } from "@/app/components/public/NotificationManager";
import GetUserResponseDTO from "@/app/components/dtos/account/GetUserResponseDTO";

export const Engine = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const { setError } = NotificationManager();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  useEffect(() => {
    const apiKey = localStorage.getItem("user-api-key");
    setIsAuthenticated(apiKey != null);

    const fetchData = async () => {
      const apiKey = localStorage.getItem("user-api-key");
      setIsAuthenticated(apiKey != null);

      if (apiKey) {
        try {
          const signInResponse = await fetch(
            "https://api.tacotools.dev/api/v1/account/get-user",
            {
              method: "GET",
              mode: "cors",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
            },
          );

          if (signInResponse.ok) {
            const signInResult: GetUserResponseDTO =
              await signInResponse.json();
            setName(signInResult.data.name);
            setSurname(signInResult.data.surname);
            setEmail(signInResult.data.email);
            setApiKey(signInResult.data.apiKey);
            setPassword(signInResult.data.password);
          } else {
            const signInResult: AuthenticationError =
              await signInResponse.json();
            setError(new AuthenticationError(signInResult.message));
          }
        } catch (error: any) {
          setError(error);
        }
      }
    };

    fetchData().then();
  }, [setError]);

  const logout = () => {
    localStorage.removeItem("user-api-key");
    localStorage.removeItem("roomID");
    window.location.href = "/";
  };

  return {
    isAuthenticated,
    logout,
    name,
    surname,
    email,
    apiKey,
    password,
    togglePasswordVisibility,
    visiblePassword,
  };
};

export default Engine;
