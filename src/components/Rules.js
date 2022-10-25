import React from "react";

const Rules = () => {
  return (
    <div className="rules-container">
      <h1 className="rules-title">Rules</h1>
      <h2 className="rules-subtitle">About</h2>
      <p className="rules-text">
        The Triad is a matching tile puzzle game inspired in the famous Mahjong.
        It consists of three difficulty levels and it can be played by all the
        ages.
      </p>
      <h2 className="rules-subtitle">Play</h2>
      <p className="rules-text">
        First, choose your board! The dificulty change in terms of variety of
        the tiles to be matched, so the beginner leves will be more easy to find
        the matches than the expert. Also, you can change the board shape by
        clicking in the button "New Board".
      </p>
      <p className="rules-text">
        The objective of this game is to match 3 similar tiles and clear all the
        board. By clicking on the tiles they will be holded in the bottom bar
        until three similar tiles are selected. Then, the space is released for
        more tiles to be holded. But careful! The bottom bar can only hold
        safely 6 tiles, and in the 7th, if it doesn't complete a match, it will
        be game over!
      </p>
      <p className="rules-text">
        If you have a game over, you can try to play again or come back to the
        Home page to select a proper difficulty. By winning the game, you can
        try a new shape of board or come back to the Home page for a more
        advanced difficulty.
      </p>
      <p className="rules-text">Let the fun beggin... Let's play!!</p>
    </div>
  );
};

export default Rules;

//goal match 3 tiles and clear  the board
//match puzzle inspired in mahjong
//
