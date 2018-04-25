import WelcomeView from "./../view/welcome-view";
import {renderTemplate} from "./../utils";
import Application from "../app";

const renderWelcome = () => {
  const previewView = new WelcomeView();

  renderTemplate(previewView.element);
  previewView.playGame = () => {
    Application.showGame();
  };

};

export default renderWelcome;
