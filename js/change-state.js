import renderArtist from "./screens/artist-view-screen";
import renderGenre from "./screens/genre-view-screen";
import renderState from "./screens/change-state-game-view-screen";
import renderSuccess from "./screens/succes-view-screen";
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
