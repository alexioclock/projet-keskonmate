export default [
  // Déjà vus (1) : GoT, The Office, The Big Bang Theory
  // En cours (2) : La Casa de Papel
  // A voir (3) : Squid Game
  // Pas dans une liste : Death Note
  {
    id: 1,
    seasonNb: null,
    seriesNb: 1,
    episodeNb: null,
    createdAt: '2021-10-27T12:40:34+02:00',
    updatedAt: null,
    // 1 = Already watched, 2 = Watching, 3 = To watch
    type: 1,
    series:
    [
      {
        id: 1,
        title: 'Game of Thrones',
      },
    ],
    users: {
      id: 1,
      email: 'tux@keskonmate.io',
    },
  },
  {
    id: 2,
    seasonNb: null,
    seriesNb: 2,
    episodeNb: null,
    createdAt: '2021-10-27T12:40:34+02:00',
    updatedAt: null,
    // 1 = Already watched, 2 = Watching, 3 = To watch
    type: 1,
    series:
      {
        id: 2,
        title: 'The Office',
      },

    users: {
      id: 1,
      email: 'tux@keskonmate.io',
    },
  },
  {
    id: 3,
    seasonNb: null,
    seriesNb: 4,
    episodeNb: null,
    createdAt: '2021-10-27T12:40:34+02:00',
    updatedAt: null,
    // 1 = Already watched, 2 = Watching, 3 = To watch
    type: 1,
    series:
    [
      {
        id: 4,
        title: 'The Big Bang Theory',
      },
    ],
    users: {
      id: 1,
      email: 'tux@keskonmate.io',
    },
  },
  {
    id: 4,
    seasonNb: null,
    seriesNb: 5,
    episodeNb: null,
    createdAt: '2021-10-27T12:40:34+02:00',
    updatedAt: null,
    // 1 = Already watched, 2 = Watching, 3 = To watch
    type: 3,
    series:
    [
      {
        id: 5,
        title: 'Squid Game',
      },
    ],
    users: {
      id: 1,
      email: 'tux@keskonmate.io',
    },
  },
  {
    id: 5,
    seasonNb: null,
    seriesNb: 3,
    episodeNb: null,
    createdAt: '2021-10-27T12:40:34+02:00',
    updatedAt: null,
    // 1 = Already watched, 2 = Watching, 3 = To watch
    type: 2,
    series:
    [
      {
        id: 3,
        title: 'La Casa de Papel',
      },
    ],
    users: {
      id: 1,
      email: 'tux@keskonmate.io',
    },
  },
];
