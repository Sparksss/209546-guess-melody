import GetStateGame from "../view/state-game-view";

const renderState = (state) => {
  const elementStateGame = new GetStateGame(state);
  return elementStateGame.template;
};

export default renderState;

