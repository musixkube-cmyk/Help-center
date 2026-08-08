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
];

export const newlyDropped: Track[] = [
  { title: "Low Ceiling Tapes", artist: "Juno Sparrow", meta: "EP · today", hue: 20 },
  { title: "Analog Payday", artist: "Bitter Palm", meta: "Single · today", hue: 40 },
  { title: "Roster Notes", artist: "Mona Vex", meta: "Album · 1d ago", hue: 8 },
  { title: "Freight & Feathers", artist: "Cassio North", meta: "Single · 2d ago", hue: 33 },
  { title: "Rooms We Rent", artist: "Little Static", meta: "EP · 2d ago", hue: 16 },
  { title: "Sync Brief No. 4", artist: "Odell Ray", meta: "Album · 3d ago", hue: 48 },
];
