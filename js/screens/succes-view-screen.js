import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-view-screen";
import {results} from "./../models/endGame";
import SuccessView from "./../view/result-success-view";

const renderSuccess = (state) => {
  const successView = new SuccessView(results, state);

  renderTemplate(successView.element);

  successView.restartNow = (evt) => {
    state.answers.splice(0);
    state.countAnswers.splice(0);
    evt.preventDefault();
    welcomeScreen();
  };
};


export default renderSuccess;
