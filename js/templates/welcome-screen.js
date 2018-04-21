import WelcomeView from "./../view/welcomeView";
import {startGame} from "./../data/models/startGame";
import {renderTemplate} from "./../utils";
import {initializationState} from "./../data/models/initialization-state";
import changeView from "./../changeState";

const renderWelcome = () => {
  const previewView = new WelcomeView(startGame);
  const state = initializationState();

  renderTemplate(previewView.element);
  previewView.playGame = () => {
    changeView(state);
  };

};

export default renderWelcome;
