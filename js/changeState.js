import renderArtist from "./templates/artist-screen";
import renderGenre from "./templates/genre-screen";
import renderState from "./templates/change-state-game";
import renderSuccess from "./templates/succes-module";
import {game} from "./data/models/game";

const changeView = (state) => {
  if (state.level < game.levels.length) {
    renderState(state);
    if (game.levels[state.level].type === `Artist`) {
      renderArtist(state);
    } else {
      renderGenre(state);
    }
  } else {
    renderSuccess(state);
  }
};

export default changeView;
