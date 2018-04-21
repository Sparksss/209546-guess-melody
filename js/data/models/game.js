const game = {
  levels: [
    {
      type: `Artist`,
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          title: `Jingle Punks`,
          isCorrect: true,
          img: `https://i.vimeocdn.com/portrait/992615_300x300`,
        },
        {
          title: `Audionautix`,
          isCorrect: false,
          img: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        },
        {
          title: `Gunnar Olsen`,
          isCorrect: false,
          img: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        }
      ]
    },
    {
      type: `Artist`,
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          title: `Zemfira`,
          isCorrect: false,
          img: `http://placehold.it/134x134`,
        },
        {
          title: `Beatles`,
          isCorrect: false,
          img: `http://placehold.it/134x134`,
        },
        {
          title: `DDT`,
          isCorrect: true,
          img: `http://placehold.it/134x134`,
        }
      ]
    },
    // {
    //   type: `Artist`,
    //   title: `Кто исполняет эту песню?`,
    //   answers: [
    //     {
    //       title: `Сплин`,
    //       isCorrect: true,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Наутилус помпилус`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Кино`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     }
    //   ]
    // },
    // {
    //   type: `Artist`,
    //   title: `Кто исполняет эту песню?`,
    //   answers: [
    //     {
    //       title: `Алиса`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Краснознамённая дивизия имени моей бабушки`,
    //       isCorrect: true,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Пошлая Молли`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     }
    //   ]
    // },
    // {
    //   type: `Artist`,
    //   title: `Кто исполняет эту песню?`,
    //   answers: [
    //     {
    //       title: `Stone sour`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Slipknot`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Ария`,
    //       isCorrect: true,
    //       img: `http://placehold.it/134x134`,
    //     }
    //   ]
    // },
    // {
    //   type: `Artist`,
    //   title: `Кто исполняет эту песню?`,
    //   answers: [
    //     {
    //       title: `Zemfira`,
    //       isCorrect: true,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Ночные снайперы`,
    //       isCorrect: true,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Алиса`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     }
    //   ]
    // },
    // {
    //   type: `Artist`,
    //   title: `Кто исполняет эту песню?`,
    //   answers: [
    //     {
    //       title: `БИ-2`,
    //       isCorrect: true,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Смысловые галлюцинации`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Серж горелый`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     }
    //   ]
    // },
    // {
    //   type: `Artist`,
    //   title: `Кто исполняет эту песню?`,
    //   answers: [
    //     {
    //       title: `Ночные снайперы`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Кукрыниксы`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Кипелов`,
    //       isCorrect: true,
    //       img: `http://placehold.it/134x134`,
    //     }
    //   ]
    // },
    // {
    //   type: `Artist`,
    //   title: `Кто исполняет эту песню?`,
    //   answers: [
    //     {
    //       title: `Пикник`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Машина времени`,
    //       isCorrect: true,
    //       img: `http://placehold.it/134x134`,
    //     },
    //     {
    //       title: `Браво`,
    //       isCorrect: false,
    //       img: `http://placehold.it/134x134`,
    //     }
    //   ]
    // },
    {
      type: `Genre`,
      title: `Выберите инди-рок треки`,
      answers: [
        {
          title: `a-1`,
          isCorrect: false,
          src: `#`
        },
        {
          title: `a-2`,
          isCorrect: true,
          src: `#`
        },
        {
          title: `a-3`,
          isCorrect: false,
          src: `#`
        },
        {
          title: `a-4`,
          isCorrect: true,
          src: `#`
        }
      ]
    },
  ],
  statistics: [],
};

export {game};
