import countNotes from "../renderHeader";
import AbstractView from "./../../abstract-view";

class GenreView extends AbstractView {
  constructor(data, state) {
    super();
    this.data = data;
    this.state = state;
  }

  get tracks() {
    let listOfTracks = ``;
    for (let i = 0; i < this.data.genreLevels[0].answers.length; i++) {
      listOfTracks += ` <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${this.data.genreLevels[0].answers[i].src}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="${this.data.genreLevels[0].answers[i].title}"></label>
        </div>`;
    }
    return listOfTracks;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(../..#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span>
        <span class="timer-value-dots">:</span>
        <span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">${countNotes(this.state)}</div>
    <div class="main-wrap">
      <h2 class="title">${this.data.genreLevels[0].title}</h2>
      <form class="genre">
        ${this.tracks}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;
  }

  changeScreen() {
  }

  bind() {
    this.element.querySelector(`form.genre`).addEventListener(`click`, (evt) => {
      this.changeScreen(evt);
    });
  }
}


export default GenreView;
