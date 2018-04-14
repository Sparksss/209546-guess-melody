const game = {
  levels: [
    {
      type: `Genre`,
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
      type: `Genre`,
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
    {
      type: `Artist`,
      title: `Выберите инди-рок треки`,
      answers: [
        {
          title: `answer-01`,
          isCorrect: false,
          musicSrc: `#`
        },
        {
          title: `answer-02`,
          isCorrect: true,
          musicSrc: `#`
        },
        {
          title: `answer-03`,
          isCorrect: false,
          musicSrc: `#`
        },
        {
          title: `answer-04`,
          isCorrect: true,
          musicSrc: `#`
        }
      ]
    },
  ]
};

export {game};
