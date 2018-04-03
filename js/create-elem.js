const createElement = (str) => {
  const parser = document.createElement(`template`);
  parser.innerHTML = str;
  return parser.content;
};

export default createElement;
