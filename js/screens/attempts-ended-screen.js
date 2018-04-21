import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-view-screen";
import AttemptsEnded from "../view/attempts-ended-view";

const renderAttemptsEnded = () => {
  const attemptsEnded = new AttemptsEnded();
  renderTemplate(attemptsEnded.element);

  attemptsEnded.restartGame = (evt) => {
    evt.preventDefault();
    welcomeScreen();
  };
};

export default renderAttemptsEnded;
