import renderArtist from "./templates/artist-view-screen";
import renderGenre from "./templates/genre-view-screen";
import renderState from "./templates/change-state-game-view-screen";
import renderSuccess from "./templates/succes-view-screen";
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
