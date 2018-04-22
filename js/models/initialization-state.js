import config from "../lib/config";

const initializationState = () => {
  return Object.assign({}, config);
};

const lostNote = (state) => state.notes - 1 > 0;

const gameOver = (state) => {
  if (!lostNote(state)) {
    throw new Error(`Notes ended!`);
  }

  --state.notes;

  return state;
};


export {initializationState, lostNote, gameOver};
