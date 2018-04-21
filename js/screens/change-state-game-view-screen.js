import GetStateGame from "../view/state-game-view";
import {renderTemplate} from "./../utils";

const renderState = (state) => {
  const elementStateGame = new GetStateGame(state);
  renderTemplate(elementStateGame.element);
};

export default renderState;

