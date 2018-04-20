import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-screen";
import {results} from "./../data/models/endGame";
import SuccessView from "./view/result-success-module";

const renderSuccess = () => {
  const successView = new SuccessView(results);

  renderTemplate(successView.element);

  successView.restartNow = (evt) => {
    evt.preventDefault();
    welcomeScreen();
  };
};


export default renderSuccess;
