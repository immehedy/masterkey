"use client";

import { useState } from "react";

const App = () => {
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter) => {
    let updatedString = outputString;

    // Consecutive letter replacement
    const regex = /(.)\1{2,}/g;
    updatedString = updatedString.replace(regex, (match) =>
      "_".repeat(match.length)
    );

    // Append the new letter
    updatedString += letter;

    // Replace consecutive letters again
    updatedString = updatedString.replace(regex, (match) =>
      "_".repeat(match.length)
    );

    setOutputString(updatedString);
  };

  const renderTiles = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.split("").map((letter) => (
      <button
        type="button"
        key={letter}
        onClick={() => handleTileClick(letter)}
        style={{
          display: "inline-block",
          width: "40px",
          height: "40px",
          margin: "5px",
          backgroundColor: "#ddd",
          cursor: "pointer",
          textAlign: "center",
          lineHeight: "40px",
        }}>
        {letter}
      </button>
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Alphabet Tiles</h1>
      {renderTiles()}
      <div className="mt-4">
        Output String: <span className="font-semibold">{outputString}</span>
      </div>
    </div>
  );
};

export default App;
