import React, {useState} from "react";
import Diff, {diffChars, diffWords} from "diff";
import DarkModeEngine from "@/app/components/public/DarkModeEngine";
import {NotificationManager} from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";


const Engine = () => {

    const {darkMode} = DarkModeEngine();
    const [textA, setTextA] = useState('');
    const [textB, setTextB] = useState('');
    const [diffOutput, setDiffOutput] = useState<Diff.Change[]>();
    const {setError} = NotificationManager();

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>, type: string) => {
        if (type === 'A') {
            setTextA(e.target.value);
        } else {
            setTextB(e.target.value);
        }
    };

    const computeDiff = () => {
        if(textA === ""){
            return setError(new InvalidParameter("text A"));
        }else if(textB === ""){
            return setError(new InvalidParameter("text B"));
        }
        const diffs = diffChars(textA, textB);
        setDiffOutput(diffs);
        renderDiffOutput();
    };

    const renderDiffOutput = () => {
        if (!diffOutput) return null;
        return diffOutput!.map((part, index) => {
            if (part.added) {
                return <span key={index}
                             className={`${darkMode ? "bg-green-500 text-black" : "bg-green-300"} font-semibold rounded-md p-1 m-1 text-center`}>{part.value}</span>;
            } else if (part.removed) {
                return <span key={index}
                             className={`${darkMode ? "bg-red-500 text-black" : "bg-red-300"} font-semibold rounded-md p-1 m-1 text-center`}>{part.value}</span>;
            }
            return <span key={index} className="rounded-md font-semibold p-1 text-center">{part.value}</span>;
        });
    };

    return {
        handleTextChange, computeDiff, textA, textB, diffOutput, renderDiffOutput, darkMode
    }
}

export default Engine;