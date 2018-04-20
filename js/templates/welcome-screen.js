import WelcomeView from "./../templates/view/welcomeView";
import {startGame} from "./../data/models/startGame";
import {renderTemplate} from "./../utils";
import renderArtist from "./artist-screen";

const renderWelcome = () => {
  const previewView = new WelcomeView(startGame);

  renderTemplate(previewView.element);

  previewView.playGame = () => {
    renderArtist();
  };

};

export default renderWelcome;
