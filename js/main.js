const templates = document.querySelector(`#templates`).content;
const screens = templates.querySelectorAll(`section`);
const mainScreen = document.querySelector(`.main`);
let checkKey = false;
let numberScreen = 0;
let arrScreens = [
  screens[0], screens[1], screens[3], screens[2], screens[4], screens[5], screens[6], screens[7],
  screens[8], screens[9]
];


const showScreen = () => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(arrScreens[numberScreen]);
};


document.addEventListener(`keydown`, (e) => {
  if (e.key === `Alt`) {
    checkKey = true;
  }
});

document.addEventListener(`keydown`, (e) => {
  if (numberScreen < 9) {
    if (e.key === `ArrowRight` && checkKey === true) {
      showScreen(numberScreen);
      ++numberScreen;
    }
  }

  if (numberScreen > 0) {
    if (e.key === `ArrowLeft` && checkKey === true) {
      --numberScreen;
      showScreen(numberScreen);
    }
  }
});

document.addEventListener(`keyup`, (e) => {
  if (e.key === `Alt`) {
    checkKey = false;
  }
});
