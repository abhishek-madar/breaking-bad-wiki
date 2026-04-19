const seasons = [
  {
    num: "01",
    name: "Pilot Season",
    year: "2008",
    episodes_count: 7,
    rating: 8.7,
    synopsis:
      "Walter White, a 50-year-old chemistry teacher, is diagnosed with terminal lung cancer. Faced with mounting debts and desperate to secure his family's future, he partners with former student Jesse Pinkman to manufacture methamphetamine. The unlikely duo navigates a treacherous criminal underworld while Walter begins his transformation from mild-mannered teacher to ruthless drug manufacturer.",
    episodes: [
      { num: "E01", title: "Pilot", rating: "9.0", tier: "high" },
      { num: "E02", title: "Cat's in the Bag", rating: "8.5", tier: "" },
      {
        num: "E03",
        title: "...And the Bag's in the River",
        rating: "8.9",
        tier: "high",
      },
      { num: "E04", title: "Cancer Man", rating: "8.2", tier: "" },
      { num: "E05", title: "Gray Matter", rating: "8.3", tier: "" },
      {
        num: "E06",
        title: "Crazy Handful of Nothin'",
        rating: "9.3",
        tier: "perfect",
      },
      {
        num: "E07",
        title: "A No-Rough-Stuff-Type Deal",
        rating: "8.8",
        tier: "high",
      },
    ],
  },
  {
    num: "02",
    name: "The Fallout",
    year: "2009",
    episodes_count: 13,
    rating: 8.8,
    synopsis:
      "Walter and Jesse expand their operation while battling the consequences of their first season's actions. Jesse struggles with guilt and addiction, while Walter's lies to his family grow more elaborate. The season culminates in a devastating plane crash over Albuquerque with terrifying ripple effects from Walt's decisions.",
    episodes: [
      { num: "E01", title: "Seven Thirty-Seven", rating: "8.5", tier: "" },
      { num: "E02", title: "Grilled", rating: "9.2", tier: "perfect" },
      { num: "E03", title: "Bit by a Dead Bee", rating: "8.2", tier: "" },
      { num: "E04", title: "Down", rating: "8.2", tier: "" },
      { num: "E05", title: "Breakage", rating: "8.3", tier: "" },
      { num: "E06", title: "Peekaboo", rating: "8.9", tier: "high" },
      { num: "E07", title: "Negro y Azul", rating: "8.5", tier: "" },
      { num: "E08", title: "Better Call Saul", rating: "9.0", tier: "high" },
      { num: "E09", title: "4 Days Out", rating: "9.4", tier: "perfect" },
      { num: "E10", title: "Over", rating: "8.6", tier: "" },
      { num: "E11", title: "Mandala", rating: "8.9", tier: "high" },
      { num: "E12", title: "Phoenix", rating: "9.4", tier: "perfect" },
      { num: "E13", title: "ABQ", rating: "8.9", tier: "high" },
    ],
  },
  {
    num: "03",
    name: "Escalation",
    year: "2010",
    episodes_count: 13,
    rating: 9.1,
    synopsis:
      "Walt's operation grows significantly as he enters into business with drug lord Gustavo Fring. Walter and Jesse work in a state-of-the-art underground lab, producing the purest methamphetamine in the American Southwest. Meanwhile, the Salamanca cousins arrive seeking vengeance, and DEA agent Hank Schrader closes in on Heisenberg.",
    episodes: [
      { num: "E01", title: "No Más", rating: "8.6", tier: "" },
      { num: "E02", title: "Caballo Sin Nombre", rating: "8.7", tier: "" },
      { num: "E03", title: "I.F.T.", rating: "8.6", tier: "" },
      { num: "E04", title: "Green Light", rating: "8.6", tier: "" },
      { num: "E05", title: "Más", rating: "8.8", tier: "high" },
      { num: "E06", title: "Sunset", rating: "9.1", tier: "perfect" },
      { num: "E07", title: "One Minute", rating: "9.7", tier: "perfect" },
      { num: "E08", title: "I See You", rating: "8.9", tier: "high" },
      { num: "E09", title: "Kafkaesque", rating: "8.8", tier: "high" },
      { num: "E10", title: "Fly", rating: "7.9", tier: "" },
      { num: "E11", title: "Abiquiú", rating: "8.9", tier: "high" },
      { num: "E12", title: "Half Measures", rating: "9.5", tier: "perfect" },
      { num: "E13", title: "Full Measure", rating: "9.5", tier: "perfect" },
    ],
  },
  {
    num: "04",
    name: "The War",
    year: "2011",
    episodes_count: 13,
    rating: 9.5,
    synopsis:
      "The tension between Walt and Gus Fring escalates into an all-out war. Walt fights for survival against the seemingly untouchable drug kingpin while navigating Jesse's growing loyalty to Fring. The season features some of the most masterfully crafted television ever produced, culminating in one of the most shocking finales in television history.",
    episodes: [
      { num: "E01", title: "Box Cutter", rating: "9.1", tier: "perfect" },
      { num: "E02", title: "Thirty-Eight Snub", rating: "8.6", tier: "" },
      { num: "E03", title: "Open House", rating: "8.6", tier: "" },
      { num: "E04", title: "Bullet Points", rating: "8.9", tier: "high" },
      { num: "E05", title: "Shotgun", rating: "9.0", tier: "high" },
      { num: "E06", title: "Cornered", rating: "9.0", tier: "high" },
      { num: "E07", title: "Problem Dog", rating: "9.2", tier: "perfect" },
      { num: "E08", title: "Hermanos", rating: "9.4", tier: "perfect" },
      { num: "E09", title: "Bug", rating: "9.2", tier: "perfect" },
      { num: "E10", title: "Salud", rating: "9.4", tier: "perfect" },
      { num: "E11", title: "Crawl Space", rating: "9.7", tier: "perfect" },
      { num: "E12", title: "End Times", rating: "9.4", tier: "perfect" },
      { num: "E13", title: "Face Off", rating: "9.9", tier: "perfect" },
    ],
  },
  {
    num: "05A",
    name: "The Empire",
    year: "2012",
    episodes_count: 8,
    rating: 9.5,
    synopsis:
      "With Gus Fring eliminated, Walt, Jesse, and Mike establish their own distribution network. Walt's empire expands dramatically as he embraces his Heisenberg persona entirely. Mike's methodical professionalism clashes with Walt's recklessness, while the DEA intensifies their investigation.",
    episodes: [
      { num: "E01", title: "Live Free or Die", rating: "9.2", tier: "perfect" },
      { num: "E02", title: "Madrigal", rating: "9.0", tier: "high" },
      { num: "E03", title: "Hazard Pay", rating: "9.0", tier: "high" },
      { num: "E04", title: "Fifty-One", rating: "9.0", tier: "high" },
      { num: "E05", title: "Dead Freight", rating: "9.7", tier: "perfect" },
      { num: "E06", title: "Buyout", rating: "9.2", tier: "perfect" },
      { num: "E07", title: "Say My Name", rating: "9.6", tier: "perfect" },
      { num: "E08", title: "Gliding Over All", rating: "9.6", tier: "perfect" },
    ],
  },
  {
    num: "05B",
    name: "The Reckoning",
    year: "2013",
    episodes_count: 8,
    rating: 9.9,
    synopsis:
      "The final eight episodes deliver one of television's most acclaimed endings. Hank discovers Walt's secret, setting off a catastrophic chain of events. Family bonds are shattered, partnerships are betrayed, and Walter White must face the full consequences of who he has become.",
    episodes: [
      { num: "E09", title: "Blood Money", rating: "9.6", tier: "perfect" },
      { num: "E10", title: "Buried", rating: "9.4", tier: "perfect" },
      { num: "E11", title: "Confessions", rating: "9.6", tier: "perfect" },
      { num: "E12", title: "Rabid Dog", rating: "9.3", tier: "perfect" },
      { num: "E13", title: "To'hajiilee", rating: "9.9", tier: "perfect" },
      { num: "E14", title: "Ozymandias", rating: "10.0", tier: "perfect" },
      { num: "E15", title: "Granite State", rating: "9.6", tier: "perfect" },
      { num: "E16", title: "Felina", rating: "9.9", tier: "perfect" },
    ],
  },
];

const characters = [
  {
    name: "Walter White",
    actor: "Bryan Cranston",
    initial: "W",
    role: "A high school chemistry teacher turned methamphetamine manufacturer, whose transformation into the ruthless drug lord 'Heisenberg' forms the spine of the series.",
    tags: ["Protagonist", "Heisenberg", "Emmy x4"],
    tagTypes: ["", "", "award"],
  },
  {
    name: "Jesse Pinkman",
    actor: "Aaron Paul",
    initial: "J",
    role: "Walt's former student and drug dealer. Jesse's humanity and conscience serve as a moral counterweight to Walt's descent, making him the series' emotional anchor.",
    tags: ["Co-Protagonist", "Emmy x3", "Heart"],
    tagTypes: ["", "award", ""],
  },
  {
    name: "Skyler White",
    actor: "Anna Gunn",
    initial: "S",
    role: "Walter's wife, whose suspicions about her husband grow into horror as she uncovers the terrifying truth about who Walter has become.",
    tags: ["Main Cast", "Emmy x2", "Moral Core"],
    tagTypes: ["", "award", ""],
  },
  {
    name: "Hank Schrader",
    actor: "Dean Norris",
    initial: "H",
    role: "DEA agent and Walt's brother-in-law. His dogged pursuit of Heisenberg makes him one of television's most compelling investigators.",
    tags: ["DEA", "Recurring Lead", "Emmy Nom."],
    tagTypes: ["", "", "award"],
  },
  {
    name: "Gustavo Fring",
    actor: "Giancarlo Esposito",
    initial: "G",
    role: "Polished fast-food magnate and drug kingpin who serves as Walt's employer and eventual nemesis. A masterclass in restrained menace.",
    tags: ["Antagonist", "Emmy Nom.", "Drug Lord"],
    tagTypes: ["", "award", ""],
  },
  {
    name: "Saul Goodman",
    actor: "Bob Odenkirk",
    initial: "S",
    role: "Flamboyant criminal lawyer whose moral flexibility makes him invaluable to Walt's operation. Later the star of the acclaimed spin-off Better Call Saul.",
    tags: ["Comic Relief", "Spin-off Star", "Legal"],
    tagTypes: ["", "award", ""],
  },
  {
    name: "Mike Ehrmantraut",
    actor: "Jonathan Banks",
    initial: "M",
    role: "Former cop turned fixer for Gus Fring. Mike's professionalism, loyalty, and quiet menace make him one of the show's most beloved characters.",
    tags: ["Fixer", "Emmy Nom.", "Pragmatist"],
    tagTypes: ["", "award", ""],
  },
  {
    name: "Marie Schrader",
    actor: "Betsy Brandt",
    initial: "M",
    role: "Skyler's sister and Hank's wife. Her kleptomania and family devotion add texture to Albuquerque's domestic landscape.",
    tags: ["Supporting", "Family", "Purple"],
    tagTypes: ["", "", ""],
  },
];

const emmyAwards = [
  { icon: "🏆", name: "Outstanding Drama Series", year: "2013, 2014" },
  {
    icon: "🎭",
    name: "Lead Actor — Bryan Cranston",
    year: "2008, 2009, 2010, 2014",
  },
  {
    icon: "🎭",
    name: "Supporting Actor — Aaron Paul",
    year: "2010, 2012, 2014",
  },
  { icon: "🎭", name: "Supporting Actress — Anna Gunn", year: "2013, 2014" },
  { icon: "✍️", name: "Outstanding Writing — Drama Series", year: "2014" },
  { icon: "🎬", name: "Outstanding Directing — Drama Series", year: "2012" },
];

const otherAwards = [
  { icon: "🌟", name: "Golden Globe — Best Drama Series", year: "2014" },
  { icon: "🌟", name: "Golden Globe — Bryan Cranston", year: "2014" },
  { icon: "📽", name: "Peabody Award — Excellence", year: "2008" },
  { icon: "🎖", name: "Critics' Choice — Best Drama", year: "2013, 2014" },
  { icon: "🎖", name: "SAG Award — Drama Ensemble", year: "2014" },
  { icon: "🏅", name: "WGA Award — Drama Series", year: "2010" },
];

const ratings = [
  {
    source: "IMDb",
    score: "9.5",
    max: "/10",
    label: "Highest rated drama ever",
  },
  {
    source: "Rotten Tomatoes",
    score: "96%",
    max: "",
    label: "Certified Fresh · All seasons",
  },
  {
    source: "Metacritic",
    score: "99",
    max: "/100",
    label: "Season 5B universal acclaim",
  },
  {
    source: "IMDb S5B",
    score: "9.9",
    max: "/10",
    label: "Season 5 Part B average",
  },
  {
    source: "Audience Score",
    score: "98%",
    max: "",
    label: "Rotten Tomatoes audience",
  },
  {
    source: "Episodes Ranked",
    score: "#1",
    max: "",
    label: "Ozymandias — best ep. ever",
  },
];

const dialogues = [
  {
    quote:
      "I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks.",
    speaker: "Walter White",
    context: "Season 4, Episode 6 — 'Cornered'",
    full: false,
  },
  {
    quote: "Say my name.",
    speaker: "Walter White / Heisenberg",
    context: "Season 5, Episode 7 — 'Say My Name'",
    full: false,
  },
  {
    quote:
      "I did it for me. I liked it. I was good at it. And I was really... I was alive.",
    speaker: "Walter White",
    context: "Season 5, Episode 16 — 'Felina'",
    full: true,
  },
  {
    quote: "Yeah, Mr. White! Yeah, science!",
    speaker: "Jesse Pinkman",
    context: "Season 1 — The joy of chemistry",
    full: false,
  },
  {
    quote: "Stay out of my territory.",
    speaker: "Heisenberg",
    context: "Season 2 — Message to competition",
    full: false,
  },
  {
    quote:
      "The moral of the story is: I chose a half measure, when I should have gone all the way. I'll never make that mistake again. No more half measures, Walter.",
    speaker: "Mike Ehrmantraut",
    context: "Season 3, Episode 12 — 'Half Measures'",
    full: true,
  },
];
