import Application from "../app";
import config from "../lib/config";

class GameScreen {
  constructor(model) {
    this.model = model;
    this.level = new LevelView(this.model.currentState);
  }

  init() {
  }
}
