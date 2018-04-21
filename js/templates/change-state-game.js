import GetStateGame from "./view/stateGameView";
import {renderTemplate} from "../utils";

const renderState = (state) => {
  const elementStateGame = new GetStateGame(state);
  renderTemplate(elementStateGame.element);
};

export default renderState;

