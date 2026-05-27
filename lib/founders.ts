export type Founder = {
  name: string;
  role: string;
  bio: string;
  /** Initials shown when photo is not yet provided */
  initials: string;
  photo?: string;
};

// Placeholder content — user will provide real names, roles, photos, bios before launch.
// Keeping the structure typed so the Founders section renders without crashing in the meantime.
export const FOUNDERS: Founder[] = [
  {
    name: "Founder One",
    role: "Co-founder · Product",
    bio: "Building the product organizers actually want.",
    initials: "F1",
  },
  {
    name: "Founder Two",
    role: "Co-founder · Engineering",
    bio: "Making the platform fast, reliable, and city-first.",
    initials: "F2",
  },
];
