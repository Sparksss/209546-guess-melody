export const atristsTemplate = (artists) => `
<div class="main-answer-wrapper">
  <input class="main-answer-r" type="radio" id="${artists.id}" name="answer" value="val-3"/>
  <label class="main-answer" for="answer-3">
  <img class="main-answer-preview" src="${artists.src}"
alt="Lorde" width="134" height="134">
 ${artists.nameArtist}
  </label>`;
