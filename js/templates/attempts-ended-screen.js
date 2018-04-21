import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-view-screen";
import {results} from "./../data/models/endGame";
import AttemptsEnded from "../view/attempts-ended-view";

const renderAttemptsEnded = () => {
  const attemptsEnded = new AttemptsEnded(results);
  renderTemplate(attemptsEnded.element);

  attemptsEnded.restartGame = (evt) => {
    evt.preventDefault();
    welcomeScreen();
  };
};

export default renderAttemptsEnded;
