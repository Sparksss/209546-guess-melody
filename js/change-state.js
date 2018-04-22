import renderArtist from "./screens/artist-view-screen";
import renderGenre from "./screens/genre-view-screen";
import renderSuccess from "./screens/succes-view-screen";
import {game} from "./models/game";

const changeView = (state) => {
  if (state.level < game.levels.length) {
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
