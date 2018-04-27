import AbstractView from "./../abstract-view";

class GenreView extends AbstractView {
  constructor(data, level, state) {
    super();
    this.data = data;
    this.level = level;
    this.state = state;
  }

  get tracks() {
    let listOfTracks = ``;
    for (let i = 0; i < this.data.levels[this.level].answers.length; i++) {
      listOfTracks += ` <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${this.data.levels[this.level].answers[i].src}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="${this.data.levels[this.level].answers[i].title}">
          <label class="genre-answer-check" data-identity="${this.data.levels[this.level].answers[i].title}" for="${this.data.levels[this.level].answers[i].title}"></label>
        </div>`;
    }
    return listOfTracks;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
    <div class="main-wrap">
      <h2 class="title">${this.data.levels[this.level].title}</h2>
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

  bind() {
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
