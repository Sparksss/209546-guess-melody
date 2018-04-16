export const INITIAL_STATE = {
  time: 300,
  notes: 3,
  answers: [],
};

export const lostNote = (state) => state.notes - 1 > 0;

export const gameOver = (state) => {
  if (!lostNote(state)) {
    throw new Error(`Notes ended!`);
  }

  --state.notes;

  return state;
};
