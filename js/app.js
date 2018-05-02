import renderSuccess from "./screens/succes-view-screen";
import renderAttemptsEnded from "./screens/attempts-ended-screen";
import renderTimeOut from "./screens/time-out-view-screen";
import WelcomeView from "./view/welcome-view";
import GameModel from "./models/game-model";
import GameScreen from "./screens/game-screen";
import ShowError from "./view/error-view";


const mainScreen = document.querySelector(`.main`);
const renderTemplate = (screenTemplate) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenTemplate);
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    return Application.showError(`${response.status}: ${response.statusText}`);
  }
};
let gameData;
class Application {
  static showWelcome(data) {
    gameData = data;
    const welcome = new WelcomeView();
    renderTemplate(welcome.element);
  }

  static startGame() {
    window.fetch(`https://es.dump.academy/guess-melody/questions`).
        then(checkStatus).
        then((response) => response.json()).
        then(Application.showWelcome).
        catch(Application.showError);
  }

  // переключения типа игры
  static showGame() {
    const gameScreen = new GameScreen(new GameModel(gameData));
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
  static showError() {
    const showError = new ShowError(`Отсутствует доступ к сети Интернет!`);
    renderTemplate(showError.element);
  }
}

export default Application;
