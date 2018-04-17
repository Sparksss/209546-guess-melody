const countNotes = (state) => {
  return new Array(3 - state.notes).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``);
};

export default countNotes;
