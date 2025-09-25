const kids = [
  {
    id: 1,
    title: "Fifi & the Flowertots",
    year: 2005,
    image: "/thumbnails/kids/kids6.webp",
    genre: ["Animation", "Children", "Fantasy"],
    description:
      "This animated children's series follows the warm and fuzzy adventures of a band of little beings inhabiting a magical garden world. Fifi Forget-Me-Not, the title character and group's happy leader, lives in a giant yellow watering can and tends to the flowers in her organic garden. Along with twin sisters Buttercup and Daisy, shy Violet, fussy Primrose and the boisterous Poppy, these friends enjoy playing, dancing and singing songs. Insect pals Flutterby and Bumble also fly by to add to the fun.",
    director: ["Tim Harper"],
    writers: ["Keith Chapman"],
    cast: ["Jane Horrocks", "Tim Whitnall", "Marc Silk"],
    producers: ["Keith Chapman", "Greg Lynn"],
    cinematography: ["N/A"],
    editing: ["N/A"],
    costume: ["N/A"],
  },
  {
    id: 2,
    title: "Five Plus",
    year: 2014,
    image: "/thumbnails/kids/kids7.webp",
    genre: ["Children", "Animation", "Educational"],
    description:
      "In an imaginary skyscraper, Petko the dog and his friends Lina, Cvetko, Komsho and others go through various situations and experience adventures related to children's everyday interests, problems, dreams, and hopes.",
    director: ["Darko Pejanović"],
    writers: ["Darko Pejanović", "Aleksandra Pejanović"],
    cast: ["Petko", "Lina", "Cvetko", "Komsho", "Bibi"],
    producers: ["Oxo Production"],
    cinematography: ["N/A"],
    editing: ["Oxo Team"],
    costume: ["N/A"],
  },
  {
    id: 3,
    title: "Dajte Muzika",
    year: 2020,
    image: "/thumbnails/kids/kids8.webp",
    genre: ["Children", "Musical", "Family"],
    description:
      "A musical TV show where a group of talented kids, guided by their music teacher, perform original songs and go through fun adventures that highlight friendship, teamwork, and everyday life values.",
    director: ["Kristina Leventis"],
    writers: ["Kristina Leventis", "Jovan Jovanov"],
    cast: ["Mila", "Anastasija", "Antonio"],
    producers: ["MRT", "Riki Kompani"],
    cinematography: ["Vladimir Samoilovski"],
    editing: ["MRT Editing Team"],
    costume: ["MRT Costume Department"],
    music: ["Jovan Jovanov", "Kristijan Gabrovski", "Lazar Cvetkoski"],
  },
  {
    id: 4,
    title: "Zlatno Slavejče",
    year: 1971,
    image: "/thumbnails/kids/kids9.webp",
    genre: ["Children", "Musical", "Festival"],
    description:
      "Zlatno Slavejče is the oldest and most prestigious children's music festival in North Macedonia, where young talents perform original songs written especially for them. The festival promotes musical creativity and cultural heritage through children's voices.",
    director: ["Various"],
    writers: ["Various Authors"],
    cast: ["Selected Child Performers Each Year"],
    producers: ["Children's Cultural Center - Karpoš"],
    cinematography: ["N/A"],
    editing: ["Festival Media Team"],
    costume: ["Festival Costume Designers"],
    music: ["Various Macedonian Composers"],
  },
  {
    id: 5,
    title: "Naše Maalo",
    year: 2000,
    image: "/thumbnails/kids/kids10.webp",
    genre: ["Children", "Drama", "Family", "Educational"],
    description:
      "Naše Maalo follows a group of children from different ethnic backgrounds living in the same neighborhood, showing their friendships, adventures, and challenges while promoting unity, understanding, and multicultural values.",
    director: ["Marjan Alčevski", "Aleksandar Popovski"],
    writers: ["Darko Mitrevski", "Goran Stefanovski", "Svetlana Stojanovska"],
    cast: ["Darko", "Goran", "Muki"],
    producers: ["Search for Common Ground", "MRT"],
    cinematography: ["Blazhe Todorovski"],
    editing: ["MRT Editing Team"],
    costume: ["MRT Costume Department"],
    music: ["Branko Nikolov", "Zoran Aleksandrov – Dzoro"],
  },
  {
    id: 6,
    title: "Bušava Azbuka",
    year: 2012,
    image: "/thumbnails/kids/kids11.webp",
    genre: ["Children", "Educational", "Animation"],
    description:
      "Bušava Azbuka is an animated educational series that teaches children the alphabet and basic literacy skills through fun stories, colorful characters, and catchy songs.",
    director: ["Marija Petrova"],
    writers: ["Jovan Stojanovski", "Marija Petrova"],
    cast: ["Voices of Various Child Actors"],
    producers: ["MRT", "Studio Za Animation"],
    cinematography: ["N/A"],
    editing: ["Animation Team"],
    costume: ["N/A"],
    music: ["Aleksandar Dimovski"],
  },
  {
    id: 7,
    title: "Tom and Jerry",
    year: 1940,
    image: "/thumbnails/kids/kids1.webp",
    genre: ["Animation", "Comedy", "Family"],
    description:
      "Tom and Jerry is a classic animated series featuring the comedic rivalry between Tom, a house cat, and Jerry, a clever mouse, involving slapstick chase sequences and humorous antics.",
    director: ["William Hanna", "Joseph Barbera"],
    writers: ["William Hanna", "Joseph Barbera"],
    cast: ["William Hanna", "June Foray", "Mel Blanc"],
    producers: ["Fred Quimby", "Hanna-Barbera Productions"],
    cinematography: ["N/A"],
    editing: ["N/A"],
    costume: ["N/A"],
    music: ["Scott Bradley"],
  },
  {
    id: 8,
    title: "Garfield",
    year: 1988,
    image: "/thumbnails/kids/kids2.webp",
    genre: ["Animation", "Comedy", "Family"],
    description:
      "Garfield is an animated series based on the comic strip about a lazy, sarcastic orange cat named Garfield, his owner Jon Arbuckle, and the lovable but dim-witted dog Odie.",
    director: ["Phil Roman"],
    writers: ["Jim Davis"],
    cast: ["Lou Rawls", "Thom Huge", "Gregg Berger"],
    producers: ["Phil Roman Entertainment"],
    cinematography: ["N/A"],
    editing: ["N/A"],
    costume: ["N/A"],
    music: ["Desirée Goyette"],
  },
  {
    id: 9,
    title: "Ben 10",
    year: 2005,
    image: "/thumbnails/kids/kids3.webp",
    genre: ["Animation", "Action", "Adventure", "Sci-Fi"],
    description:
      "Ben 10 follows a young boy named Ben Tennyson who discovers a mysterious alien device called the Omnitrix, which allows him to transform into various alien creatures to fight evil and save the world.",
    director: ["Alex Winter"],
    writers: ["Man of Action Studios"],
    cast: ["Tara Strong", "Meagan Smith", "Montse Hernández"],
    producers: ["Cartoon Network Studios", "Man of Action Studios"],
    cinematography: ["N/A"],
    editing: ["N/A"],
    costume: ["N/A"],
    music: ["Andy Sturmer"],
  },
  {
    id: 10,
    title: "Samurai Jack",
    year: 2001,
    image: "/thumbnails/kids/kids4.webp",
    genre: ["Animation", "Action", "Adventure", "Fantasy"],
    description:
      "Samurai Jack follows a noble samurai who is sent to a dystopian future ruled by the evil shape-shifting demon Aku. Jack embarks on a quest to return to the past and defeat Aku to save the world.",
    director: ["Genndy Tartakovsky"],
    writers: ["Genndy Tartakovsky"],
    cast: ["Phil LaMarr", "Mako Iwamatsu", "Grey DeLisle"],
    producers: ["Cartoon Network Studios", "Williams Street"],
    cinematography: ["N/A"],
    editing: ["N/A"],
    costume: ["N/A"],
    music: ["James L. Venable"],
  },
  {
    id: 11,
    title: "The Powerpuff Girls",
    year: 1998,
    image: "/thumbnails/kids/kids5.webp",
    genre: ["Animation", "Action", "Comedy", "Superhero"],
    description:
      "The Powerpuff Girls are three superpowered sisters—Blossom, Bubbles, and Buttercup—created by Professor Utonium to fight crime and protect the city of Townsville from various villains.",
    director: ["Craig McCracken"],
    writers: ["Craig McCracken"],
    cast: ["Cathy Cavadini", "Tara Strong", "Elizabeth Daily"],
    producers: ["Cartoon Network Studios"],
    cinematography: ["N/A"],
    editing: ["N/A"],
    costume: ["N/A"],
    music: ["James L. Venable"],
  },
];

exports.handler = async (event, context) => {
  const method = event.httpMethod;

  // Handle GET /api/kids
  if (method === 'GET') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
      body: JSON.stringify(kids),
    };
  }

  // Handle OPTIONS for CORS
  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
      body: '',
    };
  }

  return {
    statusCode: 405,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
    body: JSON.stringify({ message: "Method not allowed" }),
  };
};
