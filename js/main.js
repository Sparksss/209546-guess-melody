const templates = document.querySelector(`#templates`).content;
const listOfGameScreens = templates.querySelectorAll(`section`);
const mainScreen = document.querySelector(`.main`);
let SortedListAppScreens = [
  listOfGameScreens[0], listOfGameScreens[1], listOfGameScreens[3], listOfGameScreens[2], listOfGameScreens[4], listOfGameScreens[5], listOfGameScreens[6], listOfGameScreens[7],
  listOfGameScreens[8], listOfGameScreens[9]
];

let screenNumber = 0;

const showScreen = () => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(SortedListAppScreens[screenNumber]);
};

document.addEventListener(`keydown`, (e) => {
  if (screenNumber < 9) {
    if ((e.altKey) && e.key === `ArrowRight`) {
      showScreen(screenNumber);
      ++screenNumber;
    }
  }
  if (screenNumber > 0) {
    if ((e.altKey) && e.key === `ArrowLeft`) {
      --screenNumber;
      showScreen(screenNumber);
    }
  }
});
