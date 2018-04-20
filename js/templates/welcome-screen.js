import WelcomeView from "./../templates/view/welcomeView";
import {startGame} from "./../data/models/startGame";
import {renderTemplate} from "./../utils";
import renderArtist from "./artist-screen";
import {INITIAL_STATE} from "./../data/progress-bar-data";

const renderWelcome = () => {
  const previewView = new WelcomeView(startGame);

  renderTemplate(previewView.element);
  INITIAL_STATE.notes = 3;
  INITIAL_STATE.time = 300;
  INITIAL_STATE.answers = [];
  previewView.playGame = () => {
    renderArtist();
  };

};

export default renderWelcome;
