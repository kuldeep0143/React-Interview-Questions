import React, { useState } from "react";
import "./App.css";

const TextConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const convertText = (operation) => {
    let result = "";

    switch (operation) {
      case "uppercase":
        result = inputText.toUpperCase();
        break;
      case "lowercase":
        result = inputText.toLowerCase();
        break;
      case "encodeBase64":
        result = btoa(inputText);
        break;
      case "decodeBase64":
        result = atob(inputText);
        break;

      default:
        break;
    }

    setOutputText(result);
  };

  return (
    <>
      <h1 className="text-3xl text-purple-600 font-semibold underline">Text Converter</h1>
      <div className="container mx-auto my-8 text-center">
        <textarea
          className="w-full p-4 border border-yellow-500  rounded"
          placeholder="Enter text..."
          value={inputText}
          onChange={handleInputChange}
        />
        <div className="my-4 ">
          <button
            className="btn rounded-md hover:opacity-80"
            onClick={() => convertText("uppercase")}
          >
            Uppercase
          </button>
          <button
            className="btn rounded-md hover:opacity-80"
            onClick={() => convertText("lowercase")}
          >
            Lowercase
          </button>
          <button
            className="btn rounded-md my-5 hover:opacity-80 "
            onClick={() => convertText("encodeBase64")}
          >
            Encode Base64
          </button>
          <button
            className="btn rounded-md hover:opacity-80"
            onClick={() => convertText("decodeBase64")}
          >
            Decode Base64
          </button>
        </div>
        <textarea
          className="w-full p-4 border border-yellow-500 rounded"
          value={outputText}
          readOnly
        />
      </div>
    </>
  );
};

export default TextConverter;
