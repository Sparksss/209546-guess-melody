export const getNotes = (state) => {
  return new Array(state.notes).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``);
};

