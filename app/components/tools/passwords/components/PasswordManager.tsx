import React from 'react';
import {FaEye, FaEyeSlash} from "react-icons/fa";

const PasswordManager = ({
                             passwords,
                             savePasswords,
                             updatePassword,
                             addPassword,
                             deletePassword,
                             visiblePasswords,
                             togglePasswordVisibility
                         }: any) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="p-2 text-left">Website</th>
                        <th className="p-2 text-left">Username</th>
                        <th className="p-2 text-left">Password</th>
                        <th className="p-2 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {passwords.length > 0 ? (
                        passwords.map((password: any, index: number) => (
                            <tr key={index}
                                className="border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                                <td className="p-2">
                                    <input type="text"
                                           className="shadow-md border h-8 font-normal rounded-lg w-full"
                                           value={password.website}
                                           onChange={(e) => updatePassword(index, 'website', e.target.value)}/>
                                </td>
                                <td className="p-2">
                                    <input type="text" value={password.username}
                                           className="shadow-md border h-8 font-normal rounded-lg w-full"
                                           onChange={(e) => updatePassword(index, 'username', e.target.value)}/>
                                </td>
                                <td className="p-2 flex items-center">
                                    <input type={visiblePasswords[index] ? 'text' : 'password'}
                                           value={password.password}
                                           onChange={(e) => updatePassword(index, 'password', e.target.value)}
                                           className="shadow-md border h-8 font-normal rounded-lg w-full"/>
                                    <button onClick={() => togglePasswordVisibility(index)}
                                            className="text-gray-500 ml-2">
                                        {visiblePasswords[index] ? <FaEyeSlash/> : <FaEye/>}
                                    </button>
                                </td>
                                <td className="p-2">
                                    <div className="flex items-center justify-start space-x-2">
                                        <button type="button"
                                                onClick={() => savePasswords(index)}
                                                className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg">Save
                                        </button>
                                        <button type="button"
                                                onClick={() => deletePassword(index)}
                                                className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg">Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}
                                className="text-center font-normal text-gray-400 mx-auto p-5">
                                No passwords found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <div className="block text-center mt-4">
                <button type="submit" onClick={addPassword}
                        className="bg-taco-button-bg hover:bg-white text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 my-2">
                    Add Password
                </button>
            </div>
        </>
    )
}
export default PasswordManager;