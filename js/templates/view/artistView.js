import countNotes from "../renderHeader";
import AbstractView from "../../abstract-view";

class ArtistView extends AbstractView {
  constructor(data, state, levels) {
    super();
    this.data = data;
    this.state = state;
    this.levels = levels;
  }

  get artistsList() {
    let listArtists = ``;
    const lengOfArtistList = this.data.artistLevels[this.levels].answers.length;
    for (let i = 0; i < lengOfArtistList; i++) {
      listArtists += `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="${this.data.artistLevels[this.levels].answers[i].img}"
                 alt="${this.data.artistLevels[this.levels].answers[i].title}" width="134" height="134">
            ${this.data.artistLevels[this.levels].answers[i].title}
          </label>
        </div>`;
    }
    return listArtists;
  }

  get template() {
    return `<section class="main main--level main--level-artist">
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
      <h2 class="title main-title">${this.data.artistLevels[this.levels].title}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">${this.artistsList}</form>
    </div>
  </section>`;
  }

  changeView() {
  }

  bind() {
    this.element.querySelector(`form.main-list`).addEventListener(`click`, (evt) => {
      this.changeView(evt);
    });
  }
}

export default ArtistView;
