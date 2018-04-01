const mainScreen = document.querySelector(`.main`);

const renderScreen = (screenTemplate) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenTemplate);
};

export default renderScreen;
