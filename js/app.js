import renderArtist from "./screens/artist-view-screen";
import renderGenre from "./screens/genre-view-screen";
import renderSuccess from "./screens/succes-view-screen";
import renderAttemptsEnded from "./screens/attempts-ended-screen";
import renderTimeOut from "./screens/time-out-view-screen";
import WelcomeView from "./view/welcome-view";
import {game} from "./models/game";
import ArtistView from "./view/artist-view";
import GameModel from "./models/game-model";

const mainScreen = document.querySelector(`.main`);
const renderTemplate = (screenTemplate) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenTemplate);
};

class Application {
  static showWelcome() {
    const welcome = new WelcomeView();
    renderTemplate(welcome.element);
  }

  // переключения типа игры
  static showGame(state) {
    const gameScreen = new GameScreen(new GameModel());
    renderTemplate(gameScreen.element);
  }

  static showSuccess() {
    renderSuccess();
  }

  static showAttemptsEnded() {
    renderAttemptsEnded();
  }

  static showTimeOut() {
    renderTimeOut();
  }
}

export default Application;
