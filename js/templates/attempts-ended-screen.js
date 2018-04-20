import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-screen";
import {results} from "./../data/models/endGame";
import AttemptsEnded from "./view/attemptsEndedView";

const renderAttemptsEnded = () => {
  const attemptsEnded = new AttemptsEnded(results);
  renderTemplate(attemptsEnded.element);

  attemptsEnded.restartGame = (evt) => {
    evt.preventDefault();
    welcomeScreen();
  };
};

export default renderAttemptsEnded;
