import React, { useState } from "react";
import * as Diff from "diff";
import { NotificationManager } from "@/app/components/public/NotificationManager";
import InvalidParameter from "@/app/components/public/errors/InvalidParameter";

const Engine = () => {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diffOutput, setDiffOutput] = useState<Diff.Change[]>();
  const { setError } = NotificationManager();

  const handleTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    type: string,
  ) => {
    if (type === "A") {
      setTextA(e.target.value);
    } else {
      setTextB(e.target.value);
    }
  };

  const computeDiff = () => {
    if (textA === "") {
      return setError(new InvalidParameter("text A"));
    } else if (textB === "") {
      return setError(new InvalidParameter("text B"));
    }
    const diffs = Diff.diffChars(textA, textB);
    setDiffOutput(diffs);
    renderDiffOutput();
  };

  const renderDiffOutput = () => {
    if (!diffOutput) return null;
    return diffOutput!.map((part, index) => {
      if (part.added) {
        return (
          <span
            key={index}
            className={`m-1 rounded-md bg-green-500 p-1 text-center font-semibold`}
          >
            {part.value}
          </span>
        );
      } else if (part.removed) {
        return (
          <span
            key={index}
            className={`m-1 rounded-md bg-red-500 p-1 text-center font-semibold`}
          >
            {part.value}
          </span>
        );
      }
      return (
        <span key={index} className="rounded-md p-1 text-center font-semibold">
          {part.value}
        </span>
      );
    });
  };

  return {
    handleTextChange,
    computeDiff,
    textA,
    textB,
    diffOutput,
    renderDiffOutput,
  };
};

export default Engine;
