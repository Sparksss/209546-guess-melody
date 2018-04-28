import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-view-screen";
import AttemptsEnded from "../view/attempts-ended-view";

const renderAttemptsEnded = (state) => {
  state.answers.splice(0);
  state.countAnswers.splice(0);
  const attemptsEnded = new AttemptsEnded();
  renderTemplate(attemptsEnded.element);

  attemptsEnded.restartGame = (evt) => {
    evt.preventDefault();
    welcomeScreen();
  };
};

export default renderAttemptsEnded;
