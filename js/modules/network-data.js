import {GameData} from "../models/game";

const LINKS = {
  URL_GET_DATA: `https://es.dump.academy/guess-melody/questions`,
  URL_STATISTICS: `https://es.dump.academy/guess-melody/stats/${GameData.ID}`
};

const STATUSES = {
  STATUS_MIN: 200,
  STATUS_MAX: 300,
  CONNECTION_LOST: `Отсутствует доступ к сети Интернет!`
};

export {LINKS, STATUSES};
