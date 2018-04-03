const mainScreen = document.querySelector(`.main`);

const renderScreen = (screenTemplate) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screenTemplate.cloneNode(true));
};

export default renderScreen;
