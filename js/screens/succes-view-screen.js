import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-view-screen";
import SuccessView from "./../view/result-success-view";
import {getResults, speedScore} from "./../modules/get-results";
import {sortGameResults, renderStringResult} from "./../modules/sort-results";

const renderSuccess = (state, statistics, currentTime) => {
  state.points = getResults(state.answers, state.notes);
  const message = renderStringResult(sortGameResults(statistics, state));
  const successView = new SuccessView(state, message, currentTime, speedScore);
  renderTemplate(successView.element);
  successView.restartNow = (evt) => {
    state.answers.splice(0);
    state.countAnswers.splice(0);
    evt.preventDefault();
    welcomeScreen();
  };
};


export default renderSuccess;
