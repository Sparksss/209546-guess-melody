import renderSuccess from "./screens/succes-view-screen";
import renderAttemptsEnded from "./screens/attempts-ended-screen";
import renderTimeOut from "./screens/time-out-view-screen";
import WelcomeView from "./view/welcome-view";
import GameModel from "./models/game-model";
import GameScreen from "./screens/game-screen";

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
  static showGame() {
    const gameScreen = new GameScreen(new GameModel());
    renderTemplate(gameScreen.element);
    gameScreen.startGame();
  }

  static showSuccess(state, statistics, currentTime) {
    renderSuccess(state, statistics, currentTime);
  }

  static showAttemptsEnded(state) {
    renderAttemptsEnded(state);
  }

  static showTimeOut(state) {
    renderTimeOut(state);
  }
}

export default Application;
