const express = require("express");
const router = express.Router();

const actors = [
  {
    id: 1,
    name: "Toni Mihajlovski",
    image: "/thumbnails/actors/artist3.webp",
    bio: `Mihajlovski was born in Kumanovo, Yugoslavia on the 1st of July, 1967. After completing The Faculty of Arts in Skopje at the Ss. Cyril and Methodius University in Skopje he became a member of the drama section in the Macedonian National Theater in 1994. During the 5th annual "JoakimInterFest" in 2010 which took place in Kragujevac, Serbia, he received the award for best actor`,
    awards: [
      "Award for Best Actor at JoakimInterFest, Kragujevac, Serbia (2010)",
      "Lifetime Achievement Award 'Petre Prličko', Veleshki Teatar (2024)",
      "Multiple prestigious awards in Macedonia and the region",
    ],
    movies: [
      "/thumbnails/actorMovies/movie1.webp",
      "/thumbnails/actorMovies/movie2.webp",
      "/thumbnails/actorMovies/movie3.webp",
      "/thumbnails/actorMovies/movie4.webp",
      "/thumbnails/actorMovies/movie5.webp",
    ],
  },
  {
    id: 2,
    name: "Igor Dzambazov",
    image: "/thumbnails/actors/artist1.webp",
    bio: `Igor Džambazov was born on July 15, 1963, in Skopje, Macedonia. He is a prominent Macedonian actor, showman, TV host, singer, and writer, known for his unique charisma and contributions to the entertainment industry. Coming from a family of artists, he studied at the Faculty of Dramatic Arts in Skopje. Throughout his career, he has hosted numerous TV shows, acted in theater and film, and published several books. His humor and talent have made him a beloved public figure across the Balkans.`,
    awards: [
      "Golden Ladybug of Popularity – Best Entertainer of the Year (multiple times)",
      "Award for Cultural Contribution – Macedonian Ministry of Culture (2017)",
      "Best TV Host – TV Festival Balkanika (2005)",
    ],
    movies: [
      "/thumbnails/actorMovies/movie1.webp",
      "/thumbnails/actorMovies/movie2.webp",
      "/thumbnails/actorMovies/movie3.webp",
      "/thumbnails/actorMovies/movie4.webp",
      "/thumbnails/actorMovies/movie5.webp",
    ],
  },
  {
    id: 3,
    name: "Rade Sherbedzija",
    image: "/thumbnails/actors/artist2.webp",
    bio: `Rade Šerbedžija is a renowned Croatian actor, director, and musician born on July 27, 1946, in Bunić, Croatia (then Yugoslavia). He gained fame in the former Yugoslavia through his prolific theater and film work, later transitioning to international success with roles in Hollywood productions such as "The Saint," "Mission: Impossible 2," "Snatch," and "Harry Potter and the Deathly Hallows." Known for his commanding presence and deep voice, Šerbedžija has also made significant contributions to theater and music in the Balkans.`,
    awards: [
      "Golden Arena for Best Actor – Pula Film Festival (multiple times)",
      "Vladimir Nazor Award for Lifetime Achievement (Croatia)",
      "International Achievement Award – Hollywood Film Festival (2004)",
    ],
    movies: [
      "/thumbnails/actorMovies/movie1.webp",
      "/thumbnails/actorMovies/movie2.webp",
      "/thumbnails/actorMovies/movie3.webp",
      "/thumbnails/actorMovies/movie4.webp",
      "/thumbnails/actorMovies/movie5.webp",
    ],
  },
  {
    id: 4,
    name: "Sashko Kocev",
    image: "/thumbnails/actors/artist4.webp",
    bio: `Sashko Kocev is a prominent Macedonian actor, comedian, and television host known for his dynamic performances on stage, in film, and on TV. Born in Skopje, Macedonia, he graduated from the Faculty of Dramatic Arts at the Ss. Cyril and Methodius University. He gained widespread popularity through his work in stand-up comedy, theatrical performances, and hosting the long-running late-night show “Eden na Eden.” Kocev is also recognized for his contributions to modern Macedonian cinema and entertainment.`,
    awards: [
      "Best Actor Award – Macedonian National Theater (multiple years)",
      "Recognition for Outstanding Contribution to Macedonian Comedy",
      "Audience Choice Award – Macedonian Film Festival",
    ],
    movies: [
      "/thumbnails/actorMovies/movie1.webp",
      "/thumbnails/actorMovies/movie2.webp",
      "/thumbnails/actorMovies/movie3.webp",
      "/thumbnails/actorMovies/movie4.webp",
      "/thumbnails/actorMovies/movie5.webp",
    ],
  },
];

router.get("/", (req, res) => {
  res.json(actors);
});

module.exports = router;
