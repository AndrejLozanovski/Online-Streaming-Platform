const podcasts = [
  {
    id: 1,
    title: "Repertoar Teatarski Podkast",
    year: 2020,
    image: "/thumbnails/podcasts/podcast1.webp",
    genre: ["Podcast", "Theater", "Arts", "Culture"],
    description:
      "Repertoar Teatarski Podkast is a specialized podcast focused on theater arts and performance culture. Each episode features discussions about current theatrical productions, interviews with directors, actors, and playwrights, and critical analysis of contemporary and classical theater works. The podcast serves as a valuable resource for theater enthusiasts and professionals alike, offering insights into the creative processes behind stage productions and exploring theatrical traditions from various cultural perspectives.",
    hosts: ["Various theater critics and professionals"],
    producers: ["Independent theater collective"],
    language: "Regional language",
    platform: ["Spotify", "Apple Podcasts", "Google Podcasts"],
  },
  {
    id: 2,
    title: "Куќа на среќата",
    year: 2019,
    image: "/thumbnails/podcasts/podcast2.webp",
    genre: ["Podcast", "Lifestyle", "Wellness", "Personal Development"],
    description:
      "Куќа на среќата (House of Happiness) is a motivational podcast focused on personal wellbeing and creating a balanced, fulfilling life. The host explores topics related to mental health, positive psychology, and practical techniques for achieving happiness in everyday life. Through conversations with experts and sharing personal experiences, the podcast offers listeners valuable insights on building resilience, nurturing relationships, and finding joy in small moments.",
    hosts: ["Professional wellness coach/lifestyle expert"],
    producers: ["Independent production"],
    language: "Macedonian",
    platform: ["Spotify", "Apple Podcasts", "YouTube"],
  },
  {
    id: 3,
    title: "Подкаст со Ивица Димитријевиќ",
    year: 2020,
    image: "/thumbnails/podcasts/podcast3.webp",
    genre: ["Podcast", "Interview", "Culture", "Current Affairs"],
    description:
      "Подкаст со Ивица Димитријевиќ features in-depth conversations between host Ivica Dimitrijevikj and various guests including public figures, experts, and interesting personalities. The podcast covers a wide range of topics from politics and society to arts and entertainment, providing thoughtful analysis and personal perspectives. Each episode offers listeners the opportunity to hear extended, unfiltered discussions that go beyond typical media sound bites.",
    hosts: ["Ivica Dimitrijevikj"],
    producers: ["Independent production"],
    language: "Macedonian",
    platform: ["Spotify", "Apple Podcasts", "Google Podcasts", "YouTube"],
  },
  {
    id: 4,
    title: "Кај си бе",
    year: 2020,
    image: "/thumbnails/podcasts/podcast4.webp",
    genre: ["Podcast", "Conversation", "Culture", "Society"],
    description:
      "Кај си бе (Where Are You) is a conversational podcast featuring candid discussions about contemporary Macedonian society and culture. The hosts engage in authentic, often humorous exchanges about everyday life, current events, and social phenomena. With its distinctive gear and puzzle piece logo symbolizing how different perspectives fit together, the podcast creates a space for genuine dialogue that resonates with listeners seeking thoughtful yet accessible content. The informal, friendly tone makes complex topics approachable while maintaining depth and substance.",
    hosts: ["Creative team/conversationalists"],
    producers: ["Independent production"],
    language: "Macedonian",
    platform: ["Spotify", "Apple Podcasts", "YouTube", "Local streaming platforms"],
  },
  {
    id: 5,
    title: "Имам нешто да ти кажам",
    year: 2021,
    image: "/thumbnails/podcasts/podcast5.webp",
    genre: ["Podcast", "Storytelling", "Personal", "Human Interest"],
    description:
      "Имам нешто да ти кажам (I Have Something to Tell You) is an intimate storytelling podcast where guests share personal, often untold stories from their lives. The format provides a safe space for individuals to express meaningful experiences, life-changing moments, and personal revelations. Through these authentic narratives, the podcast explores themes of vulnerability, courage, and the shared human experience, creating powerful connections between speakers and listeners.",
    hosts: ["Experienced interviewer/storytelling facilitator"],
    producers: ["Independent creative team"],
    language: "Macedonian",
    platform: ["Spotify", "Apple Podcasts", "YouTube", "SoundCloud"],
  },
  {
    id: 6,
    title: "Мегафон",
    year: 2018,
    image: "/thumbnails/podcasts/podcast6.webp",
    genre: ["Podcast", "News", "Politics", "Social Commentary"],
    description:
      "Мегафон (Megaphone) is a current affairs podcast that amplifies important social and political issues. The show features analysis of news events, discussions of policy matters, and conversations about activism and social change. With a focus on giving voice to underrepresented perspectives and critical viewpoints, the podcast serves as a platform for deeper understanding of complex societal challenges and emerging movements for change.",
    hosts: ["Journalist/Political commentator team"],
    producers: ["Media collective or independent news organization"],
    language: "Macedonian",
    platform: ["Spotify", "Apple Podcasts", "Google Podcasts", "YouTube"],
  },
];

exports.handler = async (event, context) => {
  const method = event.httpMethod;

  // Handle GET /api/podcasts
  if (method === 'GET') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
      body: JSON.stringify(podcasts),
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
