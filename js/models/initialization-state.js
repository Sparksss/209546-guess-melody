import GameConfig from "../lib/config";

const initializationState = () => {
  return Object.assign({}, GameConfig);
};

export {initializationState};
