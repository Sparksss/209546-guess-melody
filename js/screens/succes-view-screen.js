import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-view-screen";
import SuccessView from "./../view/result-success-view";
import {getResults, speedScore} from "./../modules/get-results";
import {GameData} from "./../models/game";
import {sortGameResults, renderStringResult} from "./../modules/sort-results";
import {LINKS} from "./../modules/network-data";

const renderSuccess = (state, currentTime) => {
  state.points = getResults(state.answers, state.notes);
  const message = renderStringResult(sortGameResults(GameData.statistics, state));
  const successView = new SuccessView(state, message, currentTime, speedScore);
  window.fetch(LINKS.URL_SEND, {
    method: `POST`,
    body: JSON.stringify({
      answers: state.points
    }),
    headers: {
      "Content-Type": `application/json`
    }
  });
  renderTemplate(successView.element);
  successView.restartNow = (evt) => {
    state.answers.splice(0);
    state.countAnswers.splice(0);
    evt.preventDefault();
    welcomeScreen();
  };
};


export default renderSuccess;
