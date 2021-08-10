// export function to take in Correct Letters,
// incorrect letters and the current word
// the player is trying to guess.
// determine if the player has lost, won or is still playing
export function checkWin(correct, wrong, word) {
  let status = "win";

  // check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // check for lose
  if (wrong.length === 6) status = "lose";

  return status;
}
