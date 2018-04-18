import WelcomeView from "./templates/welcomeView";
import {startGame} from "./data/models/startGame";
import artistScreen from "./templates/artist-module";
import {renderTemplate} from "./utils";

const previewView = new WelcomeView(startGame);

renderTemplate(previewView.element);

previewView.playGame = () => {
  artistScreen();
};
