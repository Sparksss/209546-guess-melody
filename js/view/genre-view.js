import AbstractView from "./../abstract-view";

class GenreView extends AbstractView {
  constructor(data, level) {
    super();
    this.data = data;
    this.level = level;
  }

  get tracks() {
    let listOfTracks = ``;
    for (let i = 0; i < this.data[this.level].answers.length; i++) {
      listOfTracks += ` <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${this.data[this.level].answers[i].src}" data-control="play"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-${i}">
          <label class="genre-answer-check" data-identity="${this.data[this.level].answers[i].genre}" for="a-${i}"></label>
        </div>`;
    }
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

  onAnswer() {
  }

  submitCheckedAnswers() {
  }

  controlMusic() {
  }

  bind() {
    this.element.querySelectorAll(`.player-control`).forEach((elem) => elem.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      evt.target.previousElementSibling.dataset.control = this.controlMusic(evt.target.previousElementSibling, evt.target.previousElementSibling.dataset.control);
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
}


export default GenreView;
