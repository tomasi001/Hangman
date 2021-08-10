// import requirements
import React from "react";

// create function to display the letters the player enters
// if they are contained in the current word they are
// trying to guess
const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

// export default element
export default Word;
