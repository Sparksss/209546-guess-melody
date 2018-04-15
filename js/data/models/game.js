const game = {
  artistLevels: [
    {
      type: `Artist`,
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          title: `Jingle Punks`,
          isCorrect: false,
          img: `https://i.vimeocdn.com/portrait/992615_300x300`,
        },
        {
          title: `Audionautix`,
          isCorrect: false,
          img: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        },
        {
          title: `Gunnar Olsen`,
          isCorrect: true,
          img: `https://f4.bcbits.com/img/0004181452_10.jpg`,
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
