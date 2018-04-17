const createElement = (str) => {
  const parser = document.createElement(`template`);
  parser.innerHTML = str;
  return parser.content;
};


const mainScreen = document.querySelector(`.main`);

const renderTemplate = (screenTemplate) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenTemplate.cloneNode(true));
};

export {createElement, renderTemplate};
