// Case study content. Each project: hero, details, links, and sections (the skip tabs).
// Section blocks: {img, overlays:[{video|gif, x,y,w,h in % of the slide}]}, {text}, {videos:[...], controls, caption}, {embed}, {soon}.
window.PROJECTS = [
{
  id: 'glow', card: 'work/cards/glow.jpg', name: 'Glow', subtitle: 'Agentic AI Beauty Shopping Companion',
  question: 'What if AI could feel like a friend?',
  hero: { image: 'work/glow/cover.jpg', video: 'work/glow/intro.mp4', tint: '#6426eb' },
  details: {
    Overview: "Beauty shopping agentic AI that researches, compares and debates products to find personalised recommendations based on the user's skin, preferences and beauty profile.",
    Role: 'UX / Product Designer', Team: 'Solo', Type: 'Academic Project', Organisation: 'MIT Institute of Design',
    Achievement: 'Designed and prototyped an agentic AI system for personalised beauty product discovery.',
    Timeline: '2026 · Academic Project'
  },
  tags: ['Agentic AI', 'UX Strategy', 'Product Design'],
  prototype: 'https://embed.figma.com/proto/o19XpPF1zOR0s5H1Az4SeA/Anoushka-Project-Glow?node-id=739-2536&viewport=769%2C288%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=739%3A2536&show-proto-sidebar=1&page-id=729%3A3515&embed-host=share',
  sections: [
    { title: 'Challenge', blocks: [{ img: 'work/glow/problem-statement.jpg' }, { img: 'work/glow/design-process.jpg' }] },
    { title: 'Research', blocks: [{ img: 'work/glow/meet-persona.jpg' }, { img: 'work/glow/user-journey-before.jpg' }, { img: 'work/glow/secondary-research.jpg' }, { img: 'work/glow/competitive-analysis.jpg' }, { img: 'work/glow/what-users-say.jpg' }, { img: 'work/glow/agentic-ai-oppurtunity.jpg' }] },
    { title: 'Solution', blocks: [{ img: 'work/glow/solution.jpg' }, { img: 'work/glow/introducing-glow.jpg' }, { img: 'work/glow/feature-list.jpg' }] },
    { title: 'Agent System', blocks: [{ img: 'work/glow/information-architecture.jpg' }, { img: 'work/glow/agent-architecture.jpg' }] },
    { title: 'Brand & UI', blocks: [{ img: 'work/glow/brand-guidelines-process.jpg' }, { img: 'work/glow/brand-guidelines.jpg' }, { img: 'work/glow/creative-ideations.jpg' }] },
    { title: 'Prototype', blocks: [{ img: 'work/glow/product-prototype.jpg' }, { img: 'work/glow/set-up-ai-skin-profile.jpg', overlays: [{ video: 'work/glow/task-1.mp4', x: 40.312, y: 23.981, w: 19.368, h: 71.951 }] }, { img: 'work/glow/ask-glow-for-recommendations.jpg', overlays: [{ video: 'work/glow/task-2.mp4', x: 40.312, y: 24.259, w: 19.323, h: 71.937 }] }, { img: 'work/glow/personalized-to-meera.jpg', overlays: [{ video: 'work/glow/task-3.mp4', x: 40.312, y: 24.259, w: 19.219, h: 71.944 }] }, { img: 'work/glow/compare-products-with-glow.jpg', overlays: [{ video: 'work/glow/task-4.mp4', x: 40.312, y: 24.259, w: 19.323, h: 71.944 }] }, { img: 'work/glow/meera-s-journey-after.jpg' }] },
    { title: 'Impact', blocks: [{ img: 'work/glow/what-sets-glow-apart.jpg' }, { img: 'work/glow/business-viability.jpg', overlays: [{ gif: 'work/glow/siren.gif', x: 72.708, y: 73.333, w: 1.25, h: 2.222 }] }, { img: 'work/glow/future-scope.jpg' }, { img: 'work/glow/learnings-and-takeaways.jpg' }, { img: 'work/glow/end-slide.jpg' }, { img: 'work/glow/thanks.jpg' }] }
  ]
},
{
  id: 'perplexity', card: 'work/cards/perplexity.jpg', name: 'Perplexity', subtitle: 'Cognitive Ergonomics Redesign',
  question: 'What if dense information could breathe?',
  hero: { image: 'work/perplexity/1-perplexity-main.jpg', tint: '#fbfbf6' },
  details: {
    Overview: 'A cognitive ergonomics redesign exploring how dense AI-generated information can be made easier to navigate, understand and process.',
    Role: 'UX Researcher / Designer', Team: '4 members', Type: 'Cognitive Ergonomics · Interaction Design', Organisation: 'MIT Institute of Design',
    Achievement: 'Applied cognitive ergonomics principles to rethink information hierarchy and interaction within an AI search experience.',
    Timeline: '2026 · Academic Project'
  },
  tags: ['Cognitive UX', 'Research', 'Information Design', 'Interaction'],
  prototype: 'https://embed.figma.com/proto/r9yBifMBxjkuIM9MxnrM7o/Portfolio?node-id=24-292&viewport=339%2C93%2C0.02&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A5&embed-host=share',
  prototypeLabel: 'View in Figma',
  sections: [
    { title: 'Overview', blocks: [{ img: 'work/perplexity/2-perplexity-intro.jpg' }] },
    { title: 'Evaluation', blocks: [{ img: 'work/perplexity/3-cognitive-ergo.jpg' }] },
    { title: "Fitts' Law", blocks: [{ img: 'work/perplexity/4-fitts-law-gifs.jpg', overlays: [{ video: 'work/perplexity/fitts-toggle.mp4', x: 18.125, y: 14.873, w: 30.538, h: 18.407 }, { video: 'work/perplexity/fitts-rename.mp4', x: 18.125, y: 34.335, w: 30.432, h: 18.407 }, { video: 'work/perplexity/fitts-space.mp4', x: 49.096, y: 14.873, w: 30.281, h: 18.407 }, { video: 'work/perplexity/fitts-article.mp4', x: 49.096, y: 34.335, w: 30.291, h: 18.407 }] }] },
    { title: 'User Testing', blocks: [{ img: 'work/perplexity/5-user-insights.jpg' }] },
    { title: 'Redesign', blocks: [{ img: 'work/perplexity/6-redesign-with-video.jpg', overlays: [{ video: 'work/perplexity/redesign.mp4', x: 15.34, y: 4.544, w: 66.893, h: 12.159 }] }] },
    { title: 'Conclusion', blocks: [{ img: 'work/perplexity/7-conclusion.jpg' }] }
  ]
},
{
  id: 'ayojak', card: 'work/cards/ayojak.jpg', name: 'Ayojak', subtitle: 'B2B Exhibition Management Platform',
  question: 'How do you make complexity feel effortless?',
  hero: { image: 'work/ayojak/first.jpg', video: 'work/ayojak/intro.mp4', tint: '#edecf1' },
  details: {
    Overview: 'A B2B exhibition management platform using Object-Oriented UX to organise complex exhibition operations, entities and workflows into a clearer dashboard experience.',
    Role: 'UX / Product Designer', Team: '3 members', Type: 'Academic Project', Organisation: 'MIT Institute of Design',
    Achievement: 'Applied OOUX methodology to structure a complex B2B dashboard and simplify exhibition management workflows.',
    Timeline: '2026 · Academic Project'
  },
  tags: ['OOUX', 'B2B', 'Dashboard', 'UX Strategy'],
  sections: [
    { title: 'Overview', blocks: [{ img: 'work/ayojak/1-about.jpg' }, { img: 'work/ayojak/2-problem-and-persona.jpg' }] },
    { title: 'Research', blocks: [{ img: 'work/ayojak/3-primary-research.jpg' }, { img: 'work/ayojak/5-competitive-analysis.jpg' }] },
    { title: 'Task Flows', blocks: [{ img: 'work/ayojak/4-task-flow.jpg' }, { img: 'work/ayojak/6-swimlane-diagram.jpg' }] },
    { title: 'OOUX', blocks: [{ img: 'work/ayojak/7-grammar-and-user-stories.jpg' }, { img: 'work/ayojak/9-task-prioritisation.jpg' }, { img: 'work/ayojak/10-visualization.jpg' }] },
    { title: 'Design System', blocks: [{ img: 'work/ayojak/11-design-system.jpg' }] },
    { title: 'Screens', blocks: [{ img: 'work/ayojak/12-low-fidelity.jpg' }, { img: 'work/ayojak/13-high-fidelity-screens.jpg' }, { img: 'work/ayojak/14-organiser-interface.jpg' }, { img: 'work/ayojak/15-vendor-application.jpg' }] },
    { title: 'Outcome', blocks: [{ img: 'work/ayojak/8-measuring-improvement.jpg' }, { img: 'work/ayojak/16-conclusion.jpg' }] }
  ]
},
{
  id: 'tribes', card: 'work/cards/tribes.jpg', name: 'Tribes of Maharashtra', subtitle: 'A Cultural UX Project',
  question: 'How can design keep living cultures visible?',
  hero: { image: 'work/tribes/cover-main.jpg', tint: '#0e0e0e' },
  details: {
    Overview: 'A cultural research and rapid prototyping project exploring the crafts, communities and experiences of tribes across Maharashtra.',
    Role: 'UX Researcher / Designer', Team: '5 members', Type: 'Cultural Research · Rapid Prototyping', Organisation: 'MIT Institute of Design',
    Achievement: 'Conducted cultural research, rapidly prototyped concepts and tested them with users, resulting in the usable Karagir HTML prototype.',
    Timeline: '2026 · Academic Project'
  },
  tags: ['Cultural Research', 'Prototyping', 'Testing', 'Service Design'],
  prototypeLocal: 'work/tribes/karagir-prototype.html',
  sections: [
    { title: 'Context', blocks: [{ img: 'work/tribes/2-overview.jpg' }, { img: 'work/tribes/3-why-it-matters.jpg' }, { img: 'work/tribes/4-statistics.jpg' }] },
    { title: 'Secondary Research', blocks: [{ img: 'work/tribes/5-tribe-map.jpg' }, { img: 'work/tribes/6-research.jpg' }, { img: 'work/tribes/7-research-literature-study.jpg' }, { img: 'work/tribes/8-literature-study.jpg' }, { img: 'work/tribes/9-artefact-analysis.jpg' }] },
    { title: 'Field Research', blocks: [{ img: 'work/tribes/10-primary-research.jpg' }, { img: 'work/tribes/11-interviews.jpg' }, { img: 'work/tribes/12-takeaways.jpg' }, { img: 'work/tribes/13-personas.jpg' }] },
    { title: 'Ideation', blocks: [{ img: 'work/tribes/14-problem-statement.jpg' }, { img: 'work/tribes/15-ideation.jpg' }, { img: 'work/tribes/16-crazy-8.jpg' }, { img: 'work/tribes/17-concept.jpg' }] },
    { title: 'Design', blocks: [{ img: 'work/tribes/18-info-arch.jpg' }, { img: 'work/tribes/19-user-flows.jpg' }, { img: 'work/tribes/20-wireframes.jpg' }, { img: 'work/tribes/21-ai-agents.jpg' }, { img: 'work/tribes/22-concept.jpg' }] },
    { title: 'Testing', blocks: [{ img: 'work/tribes/23-usability-testing.jpg' }] },
    { title: 'Prototype', blocks: [{ embed: 'work/tribes/karagir-prototype.html', label: 'Karagir prototype' }, { img: 'work/tribes/24-thank-you.jpg' }] }
  ]
},
{
  id: 'reloom', card: 'work/cards/reloom.jpg', name: 'Reloom', subtitle: 'Circular Fashion Marketplace',
  question: 'How do you make sustainability feel like convenience?',
  hero: { image: 'work/reloom/1-reloom-cover.jpg', tint: '#e8f3ec' },
  details: {
    Overview: 'A circular fashion marketplace designed around thrifting, donating, reusing and giving clothes another life.',
    Role: 'UX Researcher / Designer', Team: '4 members', Type: 'UX Research · Service Design · Product Design', Organisation: 'MIT Institute of Design',
    Achievement: 'Explored the clothing lifecycle and designed a circular marketplace connecting people with ways to recirculate clothing.',
    Timeline: '2026 · Academic Project'
  },
  tags: ['Circular Design', 'UX Research', 'Sustainability', 'Product Design'],
  prototypeJump: 'Product', prototypeLabel: 'Watch Prototype',
  sections: [
    { title: 'Context', blocks: [{ img: 'work/reloom/2-about.jpg' }] },
    { title: 'Research', blocks: [{ img: 'work/reloom/3-research.jpg' }, { img: 'work/reloom/4-insights.jpg' }] },
    { title: 'Personas', blocks: [{ img: 'work/reloom/5-personas.jpg' }] },
    { title: 'Solution', blocks: [{ img: 'work/reloom/6-reloom-app-solution.jpg' }, { img: 'work/reloom/8-value-prop-an-worth.jpg' }] },
    { title: 'Product', blocks: [{ img: 'work/reloom/7-reloom-ui-screens.jpg' }, { videos: ['work/reloom/prototype.mp4'], controls: true, caption: 'Prototype walkthrough' }] },
    { title: 'Testing', blocks: [{ img: 'work/reloom/9-testing.jpg' }] },
    { title: 'Reflection', blocks: [{ img: 'work/reloom/10-reflection.jpg' }, { img: 'work/reloom/11-thanks.jpg' }] }
  ]
},
{
  id: 'seva', card: 'work/cards/seva.jpg', name: 'Maha e-Seva Kendra', subtitle: 'A Service Design Case Study',
  question: 'How do you make public services feel less daunting?',
  hero: { image: 'work/maha/cover-main.jpg', tint: '#4f2fde' },
  details: {
    Overview: 'A UX research and service design project exploring how citizens interact with government services through Maha e-Seva Kendras.',
    Role: 'UX Researcher / Designer', Team: '4 members', Type: 'UX Research · Service Design', Organisation: 'MIT Institute of Design',
    Achievement: 'Mapped the service ecosystem and identified opportunities to improve the experience of accessing public services.',
    Timeline: '2026 · Academic Project'
  },
  tags: ['UX Research', 'Service Design', 'Public Systems', 'Systems Thinking'],
  external: { label: 'Watch Service Video', href: 'https://drive.google.com/drive/folders/1bfQlouhFdKjNeVe_liypOMcn6mPBxS_j' },
  sections: [
    { title: 'Context', blocks: [{ img: 'work/maha/2-introduction.jpg' }, { img: 'work/maha/3-service-definition.jpg' }] },
    { title: 'Research', blocks: [{ img: 'work/maha/4-secondary-research.jpg' }, { img: 'work/maha/5-primary-research.jpg' }, { img: 'work/maha/6-interview-insights.jpg' }] },
    { title: 'Insights', blocks: [{ img: 'work/maha/7-gap-model.jpg' }, { img: 'work/maha/8-empathy-map.jpg' }, { img: 'work/maha/9-lifetime-usage-map.jpg' }, { img: 'work/maha/10-personas.jpg' }] },
    { title: 'Current Service', blocks: [{ img: 'work/maha/11-user-journey.jpg' }, { img: 'work/maha/12-value-flow.jpg' }, { img: 'work/maha/13-value-eq.jpg' }, { img: 'work/maha/14-service-scape.jpg' }, { img: 'work/maha/15-service-blue-print.jpg' }, { img: 'work/maha/16-breakpoints-in-system.jpg' }] },
    { title: 'Ideation', blocks: [{ img: 'work/maha/17-ideation.jpg' }, { img: 'work/maha/18-design-brief.jpg' }, { img: 'work/maha/19-to-be-service.jpg' }, { img: 'work/maha/20-storyboard-outcomes.jpg' }] },
    { title: 'New Service', blocks: [{ img: 'work/maha/21-levels-of-service-value-creation.jpg' }, { img: 'work/maha/22-new-value-flow.jpg' }, { img: 'work/maha/23-new-value-eq.jpg' }, { img: 'work/maha/24-final-storyboard.jpg' }, { img: 'work/maha/25-new-service-blueprint.jpg' }] },
    { title: 'Screens', blocks: [{ img: 'work/maha/26-screens.jpg' }, { img: 'work/maha/27-thank-you.jpg' }] }
  ]
}
];

// Supporting work: compact cards. Replace `href` with the exact Behance project URL; add `image: 'path.jpg'` later.
window.EXTRAS = [
  { name: 'Talking to AI: What Makes Us Feel Heard?', desc: 'A research study comparing emotional design and perceived emotional connection in chatbots, examining what makes people feel heard when interacting with AI.', tags: ['AI Research', 'Emotional Design', 'Comparative Study'], href: 'work/extras/talking-to-ai.pdf', cta: 'Read Paper', paper: true },
  { name: 'IPL Data Visualisation', desc: 'Interactive / visual exploration of IPL data.', tags: ['Data Visualisation', 'Information Design'], href: 'https://www.behance.net/gallery/231655563/Information-Visualization-Indian-premiere-league', image: 'photos/behance/ipl.jpg', cta: 'Behance' },
  { name: 'Social Psychology of Innerwear', desc: "Research into adolescent girls' experiences, stigma, education and retail behaviour around intimate clothing.", tags: ['Social Psychology', 'UX Research', 'Cultural Research'], href: 'https://www.behance.net/gallery/244590121/The-Social-Psychology-of-Intimate-Clothing', image: 'photos/behance/innerwear.jpg', cta: 'Behance' },
  { name: 'Eva', desc: 'Playful agentic AI assistant concept exploring proactive and contextual assistance.', tags: ['Agentic AI', 'Interaction Design', 'Conversational UX'], href: 'https://www.behance.net/gallery/244027267/Eva-Agentic-AI-Companion-Design-(Samsung-Hackathon)', image: 'photos/behance/eva.jpg', cta: 'Behance' },
  { name: 'FairSquare', desc: 'Platform concept for discovering, comparing and booking exhibition stalls.', tags: ['Product Design', 'UX Strategy', 'Exhibition Management'], href: 'https://www.behance.net/gallery/244042447/FairSquare-Book-Stalls-Anywhere', image: 'photos/behance/fairsquare.jpg', cta: 'Behance' },
  { name: 'Poli Bhaji Kendra', desc: 'Research-led exploration of the ecosystem and service experience around local vegetable markets.', tags: ['UX Research', 'Service Design', 'Systems Thinking'], href: 'https://www.behance.net/gallery/231653605/Poli-Bhaji-Kendra-UX-Research-and-Service-Case-Study', image: 'photos/behance/poli.jpg', cta: 'Behance' }
];
