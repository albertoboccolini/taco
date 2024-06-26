import { NotificationManager } from "@/app/components/public/NotificationManager";
import { useState } from "react";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";
import InvalidEmail from "@/app/components/public/errors/InvalidEmail";
import AuthenticationResponseDTO from "@/app/components/dtos/drop/AuthenticationResponseDTO";
import AuthenticationError from "@/app/components/public/errors/AuthenticationError";

export const Engine = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { setError } = NotificationManager();

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  const updateName = (value: string) => {
    setName(value);
  };

  const updateSurname = (value: string) => {
    setSurname(value);
  };

  const updatePassword = (value: string) => {
    setPassword(value);
  };

  const updateEmail = (value: string) => {
    setEmail(value);
  };

  const signUp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "") {
      return setError(new InvalidParameter("Name"));
    }
    if (surname === "") {
      return setError(new InvalidParameter("Surname"));
    }
    if (email === "") {
      return setError(new InvalidParameter("E-Mail"));
    }
    if (password === "") {
      return setError(new InvalidParameter("Password"));
    }
    if (!emailRegex.test(email)) {
      return setError(new InvalidEmail());
    }
    const body = {
      name: name,
      surname: surname,
      email: email.toLowerCase(),
      password: password,
    };
    try {
      const signUpResponse = await fetch(
        "https://api.tacotools.dev/api/v1/account/sign-up",
        {
          method: "POST",
          mode: "cors",
          headers: {
            Authorization: "Bearer 55f02c20-d662-46ef-aa12-b98de0a04dff",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );
      if (signUpResponse.ok) {
        const signInResult: AuthenticationResponseDTO =
          await signUpResponse.json();
        localStorage.setItem("user-api-key", signInResult.apiKey);
        window.location.href = "/";
      } else {
        const signInResult: AuthenticationResponseDTO =
          await signUpResponse.json();
        setError(new AuthenticationError(signInResult.error));
      }
    } catch (error: any) {
      setError(error);
    }
  };

  return {
    updateEmail,
    updateName,
    name,
    updateSurname,
    surname,
    email,
    visiblePassword,
    password,
    updatePassword,
    togglePasswordVisibility,
    signUp,
  };
};
