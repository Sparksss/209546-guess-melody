import createElement from './createElem';


createElement(`<div>Разметка исходного шаблона</div>`);

const templates = document.querySelector(`#templates`).content;
const mainScreen = document.querySelector(`.main`);
const MAX_VALUE_SCREENS = 9;
const MIN_VALUE_SCREENS = 0;
let screensByOrder = [
  `.main--welcome`, `.logo`, `.main--level-artist`, `.main--level-genre`,
  `.main--result`, `.logo`, `.main--result`,
  `.logo`, `.main--result`, `.logo`
];

let screenNumber = 0;

const allScreens = screensByOrder.map((screenTemplate) => {
  return templates.querySelector(screenTemplate);
});

const showScreen = () => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(allScreens[screenNumber]);
};

document.addEventListener(`keydown`, (evt) => {
  if (screenNumber < MAX_VALUE_SCREENS) {
    if ((evt.altKey) && evt.key === `ArrowRight`) {
      ++screenNumber;
    }
  }
  if (screenNumber > MIN_VALUE_SCREENS) {
    if ((evt.altKey) && evt.key === `ArrowLeft`) {
      --screenNumber;
    }
  }
  showScreen(screenNumber);
});
