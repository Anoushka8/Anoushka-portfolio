export type LibraryKind = "mine" | "recommended" | "books";

export interface LibraryItem {
  kind: LibraryKind;
  title: string;
  label: string;
  note: string;
  color: string;
  link?: string;
}

// Ported verbatim from HTML_Site/index.html `const libraryItems = [...]`
export const libraryItems: LibraryItem[] = [
  {
    kind: "mine",
    title: "UX, Cognition & AI",
    label: "My Medium",
    note: "Writing about cognition, AI-driven interaction, and the decisions behind digital products.",
    color: "blue",
    link: "https://medium.com/@dandawateanoushka",
  },
  {
    kind: "mine",
    title: "Systems Behind Screens",
    label: "My Medium",
    note: "Notes on design systems, information hierarchy, and making complexity feel effortless.",
    color: "cobalt",
    link: "https://medium.com/@dandawateanoushka",
  },
  {
    kind: "mine",
    title: "Human Behavior, Digital Products",
    label: "My Medium",
    note: "Observations about choice, habits, and how interfaces shape behavior.",
    color: "sky",
    link: "https://medium.com/@dandawateanoushka",
  },
  {
    kind: "recommended",
    title: "Human–AI Interaction",
    label: "Recommended Article Slot",
    note: "Reserved for a Medium article Anoushka recommends. Title and link coming soon.",
    color: "indigo",
  },
  {
    kind: "recommended",
    title: "Cognitive UX",
    label: "Recommended Article Slot",
    note: "Reserved for a Medium article Anoushka recommends. Title and link coming soon.",
    color: "blue",
  },
  {
    kind: "recommended",
    title: "Design Systems",
    label: "Recommended Article Slot",
    note: "Reserved for a Medium article Anoushka recommends. Title and link coming soon.",
    color: "cobalt",
  },
  {
    kind: "books",
    title: "The Design of Everyday Things",
    label: "Don Norman",
    note: "A shelf placeholder for a foundational UX title. Final favorites can be swapped in.",
    color: "sky",
  },
  {
    kind: "books",
    title: "Don’t Make Me Think",
    label: "Steve Krug",
    note: "A shelf placeholder for a practical usability classic. Final favorites can be swapped in.",
    color: "indigo",
  },
  {
    kind: "books",
    title: "Mismatch",
    label: "Kat Holmes",
    note: "A shelf placeholder about inclusive design. Final favorites can be swapped in.",
    color: "blue",
  },
  {
    kind: "books",
    title: "Ruined by Design",
    label: "Mike Monteiro",
    note: "A shelf placeholder about design responsibility. Final favorites can be swapped in.",
    color: "cobalt",
  },
  {
    kind: "books",
    title: "Thinking, Fast and Slow",
    label: "Daniel Kahneman",
    note: "A shelf placeholder connecting behavior and decision making. Final favorites can be swapped in.",
    color: "sky",
  },
  {
    kind: "books",
    title: "Universal Principles of Design",
    label: "Lidwell, Holden & Butler",
    note: "A shelf placeholder for cross-disciplinary design principles. Final favorites can be swapped in.",
    color: "indigo",
  },
  {
    kind: "books",
    title: "Design Is a Job",
    label: "Mike Monteiro",
    note: "A shelf placeholder about the professional practice of design. Final favorites can be swapped in.",
    color: "blue",
  },
  {
    kind: "books",
    title: "About Face",
    label: "Alan Cooper",
    note: "A shelf placeholder for interaction design fundamentals. Final favorites can be swapped in.",
    color: "teal",
  },
  {
    kind: "books",
    title: "The User Experience Team of One",
    label: "Leah Buley",
    note: "A shelf placeholder about resourceful UX practice. Final favorites can be swapped in.",
    color: "red",
  },
  {
    kind: "books",
    title: "Creative Confidence",
    label: "Tom & David Kelley",
    note: "A shelf placeholder about building creative confidence. Final favorites can be swapped in.",
    color: "ink",
  },
  {
    kind: "books",
    title: "Change by Design",
    label: "Tim Brown",
    note: "A shelf placeholder about design thinking in organizations. Final favorites can be swapped in.",
    color: "blue",
  },
  {
    kind: "books",
    title: "Sprint",
    label: "Jake Knapp",
    note: "A shelf placeholder about solving product problems through focused prototyping. Final favorites can be swapped in.",
    color: "teal",
  },
  {
    kind: "recommended",
    title: "Research Operations",
    label: "Recommended Article Slot",
    note: "Reserved for a Medium article Anoushka recommends. Title and link coming soon.",
    color: "red",
  },
  {
    kind: "recommended",
    title: "Designing for Trust",
    label: "Recommended Article Slot",
    note: "Reserved for a Medium article Anoushka recommends. Title and link coming soon.",
    color: "ink",
  },
  {
    kind: "recommended",
    title: "Ethical AI",
    label: "Recommended Article Slot",
    note: "Reserved for a Medium article Anoushka recommends. Title and link coming soon.",
    color: "blue",
  },
  {
    kind: "recommended",
    title: "Inclusive Design",
    label: "Recommended Article Slot",
    note: "Reserved for a Medium article Anoushka recommends. Title and link coming soon.",
    color: "teal",
  },
];

/**
 * Deterministic interleave, ported verbatim from HTML_Site/index.html `renderLibrary()`:
 * round-robin mine/recommended into `articles`, then round-robin articles/books into final order.
 */
export function buildLibraryOrder(items: LibraryItem[]): LibraryItem[] {
  const mine = items.filter((item) => item.kind === "mine").slice();
  const recommended = items.filter((item) => item.kind === "recommended").slice();
  const books = items.filter((item) => item.kind === "books").slice();
  const articles: LibraryItem[] = [];
  const ordered: LibraryItem[] = [];

  while (mine.length || recommended.length) {
    if (mine.length) articles.push(mine.shift()!);
    if (recommended.length) articles.push(recommended.shift()!);
  }
  while (articles.length || books.length) {
    if (articles.length) ordered.push(articles.shift()!);
    if (books.length) ordered.push(books.shift()!);
  }
  return ordered;
}
