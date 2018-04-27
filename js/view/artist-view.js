import AbstractView from "./../abstract-view";
import renderState from "./../screens/change-state-game-view-screen";

class ArtistView extends AbstractView {
  constructor(data, level, state) {
    super();
    this.data = data;
    this.level = level;
    this.state = state;
  }

  get artistsList() {
    let listArtists = ``;
    const lengOfArtistList = this.data.levels[this.level].answers.length;
    for (let i = 0; i < lengOfArtistList; i++) {
      listArtists += `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" data-identity="${this.data.levels[this.level].answers[i].title}" src="${this.data.levels[this.level].answers[i].img}"
                 alt="${this.data.levels[this.level].answers[i].title}" width="134" height="134">
            ${this.data.levels[this.level].answers[i].title}
          </label>
        </div>`;
    }
    return listArtists;
  }

  get template() {
    return `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <h2 class="title main-title">${this.data.levels[this.level].title}</h2>
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

  onAnswer() {
  }

  bind() {
    this.element.querySelector(`form.main-list`).addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`main-answer-preview`)) {
        this.onAnswer(evt.target.dataset.identity, `Artist`);
      }
    });
  }
}

export default ArtistView;
