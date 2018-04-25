import Application from "./../app";
import renderSuccess from "./succes-view-screen";
import renderGenre from "./genre-view-screen";
import renderArtist from "./artist-view-screen";
import {createSection} from "./../utils";
import {game} from "./../models/game";
import GenreView from "./../view/genre-view";
import ArtistView from "./../view/artist-view";
import GetStateGame from "../view/state-game-view";

class GameScreen {
  constructor(model) {
    this.model = model;
    this.root = createSection();
    this.header = new GetStateGame();
    this.artist = new ArtistView(game, this.model.currentLevel, model.state);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.artist.element);

    this.timeOut = null;
  }

  startGame() {

  }

  changeLevel() {
    const currentLevel = this.model.currentLevel;
    const state = this.model.currentState;
    if (currentLevel < game.levels.length) {
      if (game.levels[currentLevel].type === `Artist`) {
        renderArtist(state);
      } else {
        renderGenre(state);
      }
    } else {
      renderSuccess(state);
    }
  }

  updateHeader() {
  }


  init() {
  }
}

export default GameScreen;
