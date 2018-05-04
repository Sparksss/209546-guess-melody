import renderSuccess from "./screens/succes-view-screen";
import renderAttemptsEnded from "./screens/attempts-ended-screen";
import renderTimeOut from "./screens/time-out-view-screen";
import WelcomeView from "./view/welcome-view";
import GameModel from "./models/game-model";
import GameScreen from "./screens/game-screen";
import ShowError from "./view/error-view";
import {GameData} from "./models/game";
import {LINKS, STATUSES} from "./modules/network-data";
import {renderTemplate} from "./utils";

const checkStatus = (response) => {
  if (response.status >= STATUSES.STATUS_MIN && response.status < STATUSES.STATUS_MAX) {
    return response;
  }
  return Application.showError(`${response.status}: ${response.statusText}`);
};

const addStatisticsFromServer = (response) => {
  GameData.statistics = response;
};
let gameData;
class Application {
  static showWelcome(data) {
    gameData = data;
    const welcome = new WelcomeView();
    renderTemplate(welcome.element);
    fetch(LINKS.URL_GET_STATISTICS).
        then(checkStatus).
        then((response) => response.json()).
        then(addStatisticsFromServer).
        catch(Application.showError);
  }

  static startGame() {
    window.fetch(LINKS.URL_GET_DATA).
        then(checkStatus).
        then((response) => response.json()).
        then(Application.showWelcome).
        catch(Application.showError);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel(gameData));
    renderTemplate(gameScreen.element);
    gameScreen.startGame();
  }

  static showSuccess(state, currentTime) {
    renderSuccess(state, currentTime);
  }

  static showAttemptsEnded(state) {
    renderAttemptsEnded(state);
  }

  static showTimeOut(state) {
    renderTimeOut(state);
  }
  static showError(error) {
    const textError = `${error}${STATUSES.CONNECTION_LOST}`;
    const showError = new ShowError(textError);
    renderTemplate(showError.element);
  }
}

export default Application;
