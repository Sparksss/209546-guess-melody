import GetStateGame from "../view/state-game-view";
import {initializationState} from "./../data/models/initialization-state";
import {renderTemplate} from "./../utils";

const initState = initializationState();
const stateGame = new GetStateGame(initState);
const insertState = document.querySelector(`.app`);
renderTemplate(stateGame.element, insertState);

