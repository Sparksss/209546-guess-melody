import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-view-screen";
import {results} from "./../models/endGame";
import SuccessView from "./../view/result-success-view";

const renderSuccess = (state) => {
  state.answers.splice(0);
  state.countAnswers.splice(0);
  const successView = new SuccessView(results);

  renderTemplate(successView.element);

  successView.restartNow = (evt) => {
    evt.preventDefault();
    welcomeScreen();
  };
};


export default renderSuccess;
