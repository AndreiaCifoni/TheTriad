import React from "react";

const Rules = () => {
  return (
    <div>
      <h1 className="rules-title">Rules</h1>
      <h2 className="rules-subtitle">About</h2>
      <p className="rules-text">
        The Triad is a matching tile puzzle game inspired by the famous Mahjong.
        It consists of three difficulty levels, and it can be played by all the
        ages.
      </p>
      <h2 className="rules-subtitle">Play</h2>
      <p className="rules-text">
        First, choose your board. The difficulty changes in terms of the variety
        of the tiles to be matched. For example, at the beginner level will be
        easier to find the matches than at the expert. Also, you can change the
        board shape by clicking on the button "New Board".
      </p>
      <p className="rules-text">
        The objective of this game is to match 3 similar tiles and clear the
        board. By clicking on the pieces, they will be held in the bottom bar,
        until three similar images are selected. Then, the space is released for
        more tiles to be held. But careful! The bottom bar can only hold safely
        6 tiles, and in the 7th, if it doesn't complete a match, it will be game
        over!
      </p>
      <p className="rules-text">
        If you have a game over, you can try to play again or come back to the
        Home page to select a proper difficulty. By winning the game, you can
        try a new board or come back to the Home page for a more advanced level.
      </p>
      <p className="rules-text">Let the fun begin... Let's play!</p>
    </div>
  );
};

export default Rules;
