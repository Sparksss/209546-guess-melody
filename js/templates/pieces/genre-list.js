export const genreTemplate = (trackList) => `
<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${trackList.src}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="${trackList.genre}" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>`;
