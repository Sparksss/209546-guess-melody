export const INITIAL_STATE = Object.freeze({
  time: 300,
  notes: 3,
  answers: [],
  level: 0
});

export const lostNote = (state) => state.notes - 1 > 0;

export const gameOver = (state) => {
  if (!lostNote(state)) {
    throw new Error(`Notes ended!`);
  }

  const notes = state.notes--;

  return Object.assign({}, state, {
    notes
  });
};
