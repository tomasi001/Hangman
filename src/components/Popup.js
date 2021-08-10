// import requirements
import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

// create function to show player win or lose message based on
// number of correct letters and number of wrong letters ain relation
// to the current word the player is trying to guess
const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  //   check if checkWin function evaluates to 'win'
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
    playable = false;
  }
  //   check if checkWin function evaluates to 'lose'
  else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  //   create effect to set playable variable to 'playable'
  useEffect(() => setPlayable(playable));

  return (
    // <!-- Container for final message -->
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

// export default element
export default Popup;
