import React from "react";
import TacoButton from "@/app/components/public/TacoButton";
import tacoPasswordsLogo from "@/public/tacoPasswordsLogo.png";
import TacoCard from "@/app/components/public/TacoCard";
import { Engine } from "@/app/components/tools/passwords/Engine";
import TacoInput from "@/app/components/public/TacoInput";
import TacoInputPassword from "@/app/components/public/TacoInputPassword";
import CustomizationEngine from "@/app/components/public/CustomizationEngine";

const PasswordManager = () => {
  const {
    passwords,
    addPassword,
    updatePassword,
    visiblePasswords,
    togglePasswordVisibility,
    savePassword,
    deletePassword,
    updatePasswordToDB,
    updatedPasswords,
    editState,
  } = Engine();
  const { bgColor, textColor, hexToRgba } = CustomizationEngine();

  return (
    <TacoCard
      logo={tacoPasswordsLogo}
      toolName={"taco passwords"}
      cardDimension={"8xl"}
    >
      {passwords.length > 0 ? (
        <div>
          {passwords.map((password: any, index: any) => (
            <div
              key={index}
              className={`m-4 flex h-1/2 flex-col items-center justify-center gap-x-4 gap-y-2 rounded-lg px-8 py-8 shadow-xl sm:flex-row sm:gap-y-1 sm:py-2`}
              style={{
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              <TacoInput
                placeholder="Website"
                type="text"
                value={
                  updatedPasswords[index]["website"] != password.website
                    ? updatedPasswords[index]["website"]
                    : password.website
                }
                onChange={(e) =>
                  updatePassword(index, "website", e.target.value)
                }
              />
              <TacoInput
                placeholder="Username"
                autoComplete="off"
                type="text"
                value={
                  updatedPasswords[index]["username"] != password.username
                    ? updatedPasswords[index]["username"]
                    : password.username
                }
                onChange={(e: any) =>
                  updatePassword(index, "username", e.target.value)
                }
              />
              <div className="mt-4 w-full">
                <TacoInputPassword
                  visiblePassword={visiblePasswords[index]}
                  value={
                    updatedPasswords[index]["password"] != password.password
                      ? updatedPasswords[index]["password"]
                      : password.password
                  }
                  autoComplete="off"
                  maxLength={30}
                  onChange={(e: any) =>
                    updatePassword(index, "password", e.target.value)
                  }
                  onClick={() => togglePasswordVisibility(index)}
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <TacoButton
                  type="button"
                  onClick={() =>
                    editState[index]
                      ? updatePasswordToDB(index)
                      : savePassword(index)
                  }
                  text={editState[index] ? "Update" : "Save"}
                />
                <TacoButton
                  type="button"
                  onClick={() => deletePassword(index)}
                  text="Delete"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="mx-auto flex flex-col items-center justify-center gap-y-4 p-5 text-center font-normal"
          style={{ color: hexToRgba(textColor, 80) }}
        >
          No passwords found.
        </div>
      )}
      <TacoButton type={"button"} onClick={addPassword} text={"Add Password"} />
    </TacoCard>
  );
};

export default PasswordManager;
