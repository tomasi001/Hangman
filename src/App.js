// Import necessary requirements
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Help from "./components/Help";

// define array of words for app to choose from
const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "baby",
  "pick",
  "nail",
  "nonstop",
  "turkey",
  "wrench",
  "bath",
  "stay",
  "lively",
  "super",
  "year",
  "smart",
  "strange",
  "polite",
  "spotless",
  "vulgar",
  "young",
  "heavenly",
  "alike",
  "gullible",
  "harsh",
  "demonic",
  "symptomatic",
  "thundering",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// define function to return HTML element
function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  // create effect to check when a key is pressed
  // pass pressed letters to either correct or wrong letters arrays
  // add event listener to pick up wether event is fired and remove
  // event listener after each event is fired so that the event listeners
  // don't pile up and slow down the app unnecessarily
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [correctLetters, wrongLetters, playable]);

  // create function to reset game with a new word
  function playAgain() {
    setPlayable(true);

    // empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    // choose another random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  // render all imported elements
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <br></br>
      <br></br>
      <Help />
    </>
  );
}

// export element as default
export default App;
