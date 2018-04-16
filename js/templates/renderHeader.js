const countNotes = (state) => {
  return new Array(state.notes).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``);
};

const renderNotes = (state) => {
  return `${countNotes(state)}`;
};

export {renderNotes};
