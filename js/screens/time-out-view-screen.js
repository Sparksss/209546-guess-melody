import {renderTemplate} from "./../utils";
import welcomeScreen from "./welcome-view-screen";
import TimeOutView from "../view/time-out-view";


const timeOutView = new TimeOutView();
renderTemplate(timeOutView.element);

timeOutView.restartGame = (evt) => {
  evt.preventDefault();
  welcomeScreen();
};
