const createSection = (str = ``) => {
  const element = document.createElement(`section`);
  element.style.marginBottom = `200px`;
  element.innerHTML = str;
  return element;
};

const mainScreen = document.querySelector(`.main`);

const renderTemplate = (screenTemplate) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenTemplate);
};

export {renderTemplate, createSection};
