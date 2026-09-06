export interface ArchiveCard {
  id: string;
  eyebrow: string;
  eyebrowBlue: boolean;
  title: string;
  description: string;
  meta: [string, string];
}

// Ported verbatim from HTML_Site/work.html `.archive-grid` markup
export const archiveCards: ArchiveCard[] = [
  {
    id: "glow",
    eyebrow: "Agentic AI / UX Architecture",
    eyebrowBlue: false,
    title: "Glow",
    description:
      "Beauty shopping reimagined as a four-tap conversation that feels useful, personal, and human.",
    meta: ["Accenture · 2026", "4 min read"],
  },
  {
    id: "ayojak",
    eyebrow: "Design Systems / Cognitive UX",
    eyebrowBlue: true,
    title: "Ayojak",
    description:
      "A research-led organizer dashboard that turns complex event operations into an understandable system.",
    meta: ["Product System", "6 min read"],
  },
  {
    id: "perplexity",
    eyebrow: "Research / Interaction",
    eyebrowBlue: true,
    title: "Perplexity",
    description:
      "An independent redesign study exploring rhythm and hierarchy in an information-dense interface.",
    meta: ["Independent Study", "5 min read"],
  },
  {
    id: "reloom",
    eyebrow: "Sustainability / Systems",
    eyebrowBlue: true,
    title: "Reloom",
    description:
      "A connected experience for resale, repair, and reuse, designed around three different mental models.",
    meta: ["Journey Mapping", "5 min read"],
  },
  {
    id: "emrys-craft",
    eyebrow: "Brand / Packaging",
    eyebrowBlue: false,
    title: "Emrys Craft",
    description:
      "A sustainable craft brand built from leftover materials, playful constraints, and purpose-led packaging.",
    meta: ["Founder Project", "2023–Present"],
  },
  {
    id: "social-psychology-of-innerwear",
    eyebrow: "Behavioral Research",
    eyebrowBlue: true,
    title: "Social Psychology of Innerwear",
    description:
      "A qualitative study of adolescents’ attitudes, habits, and stigma around an intimate everyday product.",
    meta: ["Academic Research", "Exploration"],
  },
];
