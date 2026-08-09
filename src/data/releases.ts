export type Track = {
  title: string;
  artist: string;
  meta: string;
  hue: number;
};

export const trending: Track[] = [
  { title: "Mirrorball Economy", artist: "Vela Ruiz", meta: "1.4M plays", hue: 24 },
  { title: "Night Freight", artist: "Kodak Bloom", meta: "980K plays", hue: 12 },
  { title: "Sidewalk Chorus", artist: "The Grind Union", meta: "870K plays", hue: 38 },
  { title: "Static Gospel", artist: "Ama Otieno", meta: "744K plays", hue: 5 },
  { title: "Loop Money", artist: "PRSM", meta: "690K plays", hue: 45 },
  { title: "Two-Way Radio", artist: "Halcyon Fleet", meta: "612K plays", hue: 30 },
  { title: "Low Ceiling", artist: "Juno Sparrow", meta: "540K plays", hue: 20 },
  { title: "Analog Payday", artist: "Bitter Palm", meta: "488K plays", hue: 40 },
];

export const newlyDropped: Track[] = [
  { title: "Low Ceiling Tapes", artist: "Juno Sparrow", meta: "EP · today", hue: 20 },
  { title: "Analog Payday", artist: "Bitter Palm", meta: "Single · today", hue: 40 },
  { title: "Roster Notes", artist: "Mona Vex", meta: "Album · 1d ago", hue: 8 },
  { title: "Freight & Feathers", artist: "Cassio North", meta: "Single · 2d ago", hue: 33 },
  { title: "Rooms We Rent", artist: "Little Static", meta: "EP · 2d ago", hue: 16 },
  { title: "Sync Brief No. 4", artist: "Odell Ray", meta: "Album · 3d ago", hue: 48 },
  { title: "Backline Sessions", artist: "Mara Holt", meta: "Single · 3d ago", hue: 28 },
  { title: "Tarp City", artist: "Otis Reuel", meta: "EP · 4d ago", hue: 14 },
];

export const showsToTry: Track[] = [
  { title: "Backline Confessions", artist: "Mara Holt", meta: "Series · 12 eps", hue: 28 },
  { title: "The Pressing Plant", artist: "Otis Reuel", meta: "Series · 8 eps", hue: 14 },
  { title: "Soundcheck Diaries", artist: "The Grind Union", meta: "Weekly", hue: 40 },
  { title: "Liner Notes Live", artist: "Juno Sparrow", meta: "Series · 21 eps", hue: 8 },
  { title: "Monitor Mix", artist: "Halcyon Fleet", meta: "Daily", hue: 33 },
  { title: "Setbreak", artist: "Cassio North", meta: "Series · 6 eps", hue: 48 },
  { title: "Tour Bus Theology", artist: "Mona Vex", meta: "Weekly", hue: 20 },
  { title: "Direct-to-Tape", artist: "Odell Ray", meta: "Series · 15 eps", hue: 5 },
];

export const discoverPodcasts: Track[] = [
  { title: "A&R Is Dead, Long Live A&R", artist: "PRSM", meta: "Biweekly", hue: 24 },
  { title: "Royalty Rundown", artist: "Ama Otieno", meta: "Weekly", hue: 12 },
  { title: "The Sync Lab", artist: "Vela Ruiz", meta: "Series · 30 eps", hue: 38 },
  { title: "Press Kit", artist: "Kodak Bloom", meta: "Daily", hue: 16 },
  { title: "Bedroom to Boardroom", artist: "Bitter Palm", meta: "Weekly", hue: 45 },
  { title: "The Mastering Hour", artist: "Little Static", meta: "Series · 9 eps", hue: 30 },
  { title: "Catalog Therapy", artist: "Mara Holt", meta: "Biweekly", hue: 8 },
  { title: "Vinyl & Verdicts", artist: "Otis Reuel", meta: "Weekly", hue: 40 },
];

export type Artist = {
  name: string;
  genre: string;
  meta: string;
  hue: number;
};

export const popularArtists: Artist[] = [
  { name: "Vela Ruiz", genre: "Electronic / Pop", meta: "4.2M monthly", hue: 24 },
  { name: "Kodak Bloom", genre: "Indie Rock", meta: "3.1M monthly", hue: 12 },
  { name: "Ama Otieno", genre: "Afrobeat", meta: "2.8M monthly", hue: 5 },
  { name: "PRSM", genre: "Hip-Hop", meta: "2.4M monthly", hue: 45 },
  { name: "The Grind Union", genre: "Punk", meta: "1.9M monthly", hue: 38 },
  { name: "Halcyon Fleet", genre: "Dream Pop", meta: "1.6M monthly", hue: 30 },
  { name: "Juno Sparrow", genre: "Folk", meta: "1.3M monthly", hue: 20 },
  { name: "Mona Vex", genre: "Alt-R&B", meta: "1.1M monthly", hue: 8 },
];

export const recommendedForYou: Track[] = [
  { title: "Late Bloom", artist: "Cassio North", meta: "Because you played Vela Ruiz", hue: 33 },
  { title: "Slow Press", artist: "Bitter Palm", meta: "Because you played Kodak Bloom", hue: 40 },
  { title: "Tape Hiss Hours", artist: "Little Static", meta: "From your saves", hue: 16 },
  { title: "Crosstalk", artist: "Halcyon Fleet", meta: "Because you played PRSM", hue: 30 },
  { title: "Faulty Cable", artist: "Odell Ray", meta: "From your follows", hue: 48 },
  { title: "Roomtone", artist: "Juno Sparrow", meta: "Because you played Mona Vex", hue: 20 },
  { title: "Second Set", artist: "The Grind Union", meta: "From your saves", hue: 38 },
  { title: "Borrowed Light", artist: "Mara Holt", meta: "Because you played Ama Otieno", hue: 28 },
];

export const newSingles: Track[] = [
  { title: "Paperthin", artist: "Vela Ruiz", meta: "Single · today", hue: 24 },
  { title: "Cargo Cult", artist: "PRSM", meta: "Single · today", hue: 45 },
  { title: "Dial Tone", artist: "Halcyon Fleet", meta: "Single · 1d ago", hue: 30 },
  { title: "Burner Phone", artist: "Kodak Bloom", meta: "Single · 1d ago", hue: 12 },
  { title: "Velvet Static", artist: "Mona Vex", meta: "Single · 2d ago", hue: 8 },
  { title: "Half-Life Radio", artist: "Ama Otieno", meta: "Single · 2d ago", hue: 5 },
  { title: "Gold Lamé", artist: "Cassio North", meta: "Single · 3d ago", hue: 33 },
  { title: "Midnight Press", artist: "Bitter Palm", meta: "Single · 3d ago", hue: 40 },
];

export type Playlist = {
  title: string;
  curator: string;
  meta: string;
  hue: number;
};

export const albumTrendingPlaylists: Playlist[] = [
  { title: "Mirrorball Top 50", curator: "Musicosy Editorial", meta: "50 tracks", hue: 24 },
  { title: "After Hours Pressing", curator: "Vela Ruiz", meta: "32 tracks", hue: 12 },
  { title: "New Indie Now", curator: "Musicosy Editorial", meta: "41 tracks", hue: 38 },
  { title: "Afro Forward", curator: "Ama Otieno", meta: "28 tracks", hue: 5 },
  { title: "Sync Vault", curator: "PRSM", meta: "60 tracks", hue: 45 },
  { title: "Bedroom Pop Bangers", curator: "Little Static", meta: "44 tracks", hue: 16 },
  { title: "Tour Bus Anthems", curator: "Halcyon Fleet", meta: "36 tracks", hue: 30 },
  { title: "Pressing Plant Picks", curator: "Musicosy Editorial", meta: "52 tracks", hue: 20 },
];
