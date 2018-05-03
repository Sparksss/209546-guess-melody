import AbstractView from "./../abstract-view";

class GenreView extends AbstractView {
  constructor(data, level) {
    super();
    this.data = data;
    this.level = level;
  }

  get tracks() {
    let listOfTracks = ``;
    const answersData = this.data[this.level].answers;
    answersData.forEach((currentAnswer, index) => {
      listOfTracks += ` <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${currentAnswer.src}" data-control="play"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-${index}">
          <label class="genre-answer-check" data-identity="${currentAnswer.genre}" for="a-${index}"></label>
        </div>`;
    });
    return listOfTracks;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
    <div class="main-wrap">
      <h2 class="title">${this.data[this.level].question}</h2>
      <form class="genre">
        ${this.tracks}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;
  }

  bind() {
    this.element.querySelectorAll(`.player-control`).forEach((elem) => elem.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      evt.target.previousElementSibling.dataset.control = this.controlMusic(evt.target.previousElementSibling, evt.target.previousElementSibling.dataset.control);
      evt.target.classList.toggle(`player-control--pause`);
    }));
    this.element.querySelector(`form.genre`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      if (evt.target.classList.contains(`genre-answer-check`)) {
        this.onAnswer(evt);
      } else if (evt.target.classList.contains(`genre-answer-send`)) {
        this.submitCheckedAnswers();
      }
    });
  }

  onAnswer() {
  }

  submitCheckedAnswers() {
  }

  controlMusic() {
  }
}


export default GenreView;
