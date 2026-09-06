export interface Project {
  id: string;
  name: string;
  question: string;
  subtitle: string;
  description: string;
  role: string;
  tags: string[];
  categories: string[];
  time: number;
  challenge: string;
  steps: string[];
  learning: string;
}

// Ported verbatim from HTML_Site/index.html `const projects = [...]`
export const projects: Project[] = [
  {
    id: "glow",
    name: "Glow",
    question: "What if AI could feel like a friend?",
    subtitle: "Agentic AI Beauty Shopping Companion",
    description: "Glow turns beauty shopping chaos into a four-tap experience.",
    role: "Solo end-to-end UX Architect Intern · Accenture Avanade · May–July 2026",
    tags: ["AI Interaction", "Agentic Design", "UX Strategy"],
    categories: ["ai"],
    time: 4,
    challenge:
      "The real challenge was designing a conversational flow that felt human, not robotic.",
    steps: [
      "Designed end-to-end as a solo project, from research through prototype.",
      "Created workflows, scenarios, and conversational flows.",
      "Built the brand and design system from scratch.",
    ],
    learning: "I love the full stack of design. From research to motion. From chaos to system.",
  },
  {
    id: "ayojak",
    name: "Ayojak",
    question: "How do you make complexity feel effortless?",
    subtitle: "Organizer Dashboard & Design System",
    description: "Ayojak transforms manual event management into a cognitive-friendly system.",
    role: "Exhibitions, stalls & expos · Dashboard and design system",
    tags: ["Design Systems", "Information Design", "Cognitive UX"],
    categories: ["systems"],
    time: 6,
    challenge:
      "Structure the information hierarchy around cognitive ergonomics, using UX Magic research to guide a complex manual process.",
    steps: [
      "Built a molecular design system.",
      "Used research-driven information architecture to address cognitive overload.",
      "Gave every component a clear purpose in the organizer’s workflow.",
    ],
    learning: "The interface grows out of the information hierarchy and the tasks it supports.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    question: "What if dense information could breathe?",
    subtitle: "Cognitive Ergonomics Redesign Study",
    description:
      "Exploring better rhythm and information hierarchy in an information-dense interface.",
    role: "Independent redesign study · Not an official Perplexity project",
    tags: ["Research", "Interaction Design", "UX Strategy"],
    categories: ["research"],
    time: 5,
    challenge: "Users didn’t need less information; they needed better rhythm.",
    steps: [
      "Ran competitor analysis and a heuristic evaluation.",
      "Created wireframes and mockups.",
      "Reworked information hierarchy and interaction patterns to address cognitive load.",
    ],
    learning: "The interface itself became the system for making information easier to navigate.",
  },
  {
    id: "reloom",
    name: "Reloom",
    question: "How do you make sustainability feel like convenience?",
    subtitle: "Sustainable Fashion Ecosystems Application",
    description:
      "Reloom connects resale, repair, and reuse — three separate mental models in one flow.",
    role: "Journey mapping · System-state prototyping",
    tags: ["Sustainable Design", "Systems", "Interaction Design"],
    categories: ["systems", "sustainability"],
    time: 5,
    challenge: "Make sustainability feel like convenience, not compromise.",
    steps: [
      "Mapped user journeys to locate friction points.",
      "Connected resale, repair, and reuse within one experience.",
      "Built system-state prototypes to clarify navigation.",
    ],
    learning: "Connected journeys need to support the way people understand each activity.",
  },
];
