// import requirements
import React, { useState } from "react";

// create variable to store display boolean
let displayHelp = false;

// create function to refresh page to allow player to restart game
const refreshPage = () => {
  window.location.reload();
};

// create function to display rules when help button clicked
const DisplayHelp = () => {
  // create variables to store state and set state
  const [showHelp, setShowHelp] = useState(false);

  //   create function to display/hide by changing boolean
  const onClick = () => {
    if (displayHelp === false) {
      setShowHelp(true);
      displayHelp = true;
    } else if (displayHelp === true) {
      setShowHelp(false);
      displayHelp = false;
    }
  };
  //   return help button, restart button and help if clicked
  return (
    <div>
      <button className="help-button" onClick={onClick}>
        HELP
      </button>
      <button className="restart-button" onClick={refreshPage}>
        RESTART
      </button>
      {showHelp ? <Help /> : null}
    </div>
  );
};

// create function to contain the help information
const Help = () => (
  <div id="help-container">
    <h3>Rules</h3>
    <p>
      Press letters on your keyboard to guess
      <br></br>
      what letters are in the word.
      <br></br> <br></br>
      You get six tries, if you don't guess
      <br></br>
      the word in six turns you lose!
      <br></br>
      <br></br>
      Good Luck
    </p>
  </div>
);

// export default element
export default DisplayHelp;
