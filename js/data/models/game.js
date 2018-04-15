const game = {
  artistLevels: [
    {
      type: `Artist`,
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          title: `Пелагея`,
          isCorrect: false,
          img: `http://placehold.it/134x134`,
        },
        {
          title: `Краснознаменная дивизия имени моей бабушки`,
          isCorrect: false,
          img: `http://placehold.it/134x134`,
        },
        {
          title: `Lorde`,
          isCorrect: true,
          img: `http://placehold.it/134x134`,
        }
      ]
    },
    {
      type: `Artist`,
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          title: `Hammer Fall`,
          isCorrect: false,
          img: `http://placehold.it/134x134`,
        },
        {
          title: `Beatles`,
          isCorrect: true,
          img: `http://placehold.it/134x134`,
        },
        {
          title: `DDT`,
          isCorrect: false,
          img: `http://placehold.it/134x134`,
        }
      ]
    },
  ],
  genreLevels: [
    {
      type: `Genre`,
      title: `Выберите инди-рок треки`,
      answers: [
        {
          title: `answer-01`,
          isCorrect: false,
          src: `#`
        },
        {
          title: `answer-02`,
          isCorrect: true,
          src: `#`
        },
        {
          title: `answer-03`,
          isCorrect: false,
          src: `#`
        },
        {
          title: `answer-04`,
          isCorrect: true,
          src: `#`
        }
      ]
    },
  ],
  statistics: [],
};

export {game};
