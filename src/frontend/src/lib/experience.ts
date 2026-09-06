export interface ExperienceEntry {
  id: string;
  org: string;
  logo:
    | { kind: "image"; src: string; className: string }
    | { kind: "placeholder"; initials: string };
  time: string;
  title: string;
  summary: string;
  detail: string;
}

// Ported verbatim from HTML_Site/index.html `.experience-row` markup
export const experienceEntries: ExperienceEntry[] = [
  {
    id: "accenture",
    org: "Accenture",
    logo: { kind: "image", src: "/images/accenture-wordmark.png", className: "experience-logo accenture-logo" },
    time: "May – July 2026",
    title: "User Experience Architect Intern",
    summary:
      "At Accenture, I designed Glow, an agentic AI beauty-shopping companion, working end to end across research, conversational flows, wireframing, prototyping, brand, and design systems.",
    detail:
      "The core challenge was making an AI-led experience feel human and reducing beauty-shopping complexity into a focused four-tap journey.",
  },
  {
    id: "emrys",
    org: "Emrys Craft",
    logo: { kind: "placeholder", initials: "EC" },
    time: "2023 – Present",
    title: "Founder & Designer",
    summary:
      "At Emrys Craft, I lead creative direction across identity, sustainable packaging, production artwork, and exhibition sales, turning material constraints into a practical design system.",
    detail:
      "The project combines brand building with hands-on making, testing how leftover materials can become useful and desirable objects.",
  },
  {
    id: "harshdeep",
    org: "Harshdeep Foundation",
    logo: { kind: "placeholder", initials: "HF" },
    time: "June – July 2025",
    title: "Design & Social Media Intern",
    summary:
      "At Harshdeep Foundation, I created branding campaigns, social media design, and outreach material that helped an NGO communicate its work with greater clarity and consistency.",
    detail:
      "I translated program information into accessible visual stories across campaign formats while maintaining one recognizable identity.",
  },
  {
    id: "mit",
    org: "MIT ADT University",
    logo: { kind: "image", src: "/images/mit-adt-logo.png", className: "experience-logo mit-logo" },
    time: "2023 – Present",
    title: "B.Des User Experience Design",
    summary:
      "At MIT ADT University’s Institute of Design, I study user experience through research, interaction design, systems thinking, cognitive ergonomics, and collaborative studio practice.",
    detail:
      "Academic work lets me test methods across human–AI interaction, behavioral research, sustainability, information design, and service experiences.",
  },
];
