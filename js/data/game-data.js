import {tracksList} from "./artist-data";

const gameData = {
  "level-01": {
    artist: tracksList[0],
    answers: {
     artist1: false,
     artist2: true,
     artist3: false

    }
  ,
  "level-02": {
    artist: tracksList[1],
    check() {
      return false;
    }
  },
  "level-03": {
    artist: tracksList[2],
    check() {
      return false;
    }
  },
  "level-04": {
    artist: tracksList[3],
    check() {
      return false;
    }
  },
  "level-05": {
    artist: tracksList[4],
    check() {
      return false;
    }
  }

};
