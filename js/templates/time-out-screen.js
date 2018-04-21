import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-screen";
import {results} from "./../data/models/endGame";
import TimeOutView from "../view/time-out-view";


const timeOutView = new TimeOutView(results);
renderTemplate(timeOutView.element);

timeOutView.restartGame = (evt) => {
  evt.preventDefault();
  welcomeScreen();
};
