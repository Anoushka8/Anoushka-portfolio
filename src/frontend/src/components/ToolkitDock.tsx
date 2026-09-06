interface Tool {
  name: string;
  icon: string;
  width: number;
  height: number;
}

const TOOLS: Tool[] = [
  { name: "Figma", icon: "https://www.google.com/s2/favicons?domain=figma.com&sz=128", width: 52, height: 52 },
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer/0055FF", width: 48, height: 48 },
  { name: "Claude", icon: "https://cdn.simpleicons.org/claude/D97757", width: 48, height: 48 },
  { name: "AI Studio", icon: "https://www.google.com/s2/favicons?domain=aistudio.google.com&sz=128", width: 52, height: 52 },
  { name: "Procreate", icon: "https://www.google.com/s2/favicons?domain=procreate.com&sz=128", width: 52, height: 52 },
  { name: "Stitch", icon: "https://www.gstatic.com/labs-code/stitch/favicon-192x192.png", width: 52, height: 52 },
  {
    name: "Illustrator",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg",
    width: 52,
    height: 52,
  },
  {
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    width: 52,
    height: 52,
  },
  { name: "Miro", icon: "https://cdn.simpleicons.org/miro/FFD02F", width: 52, height: 52 },
];

function ToolGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="tool-group" role={hidden ? undefined : "list"} aria-hidden={hidden ? "true" : undefined}>
      {TOOLS.map((tool) => (
        <div className="dock-item" role={hidden ? undefined : "listitem"} key={tool.name}>
          <span className="dock-icon">
            <img src={tool.icon} alt="" width={tool.width} height={tool.height} />
          </span>
          <span>{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function ToolkitDock() {
  return (
    <section className="toolkit-block" aria-labelledby="toolkit-title">
      <h3 id="toolkit-title">My Design Toolkit</h3>
      <p>Tools I move between while researching, designing, prototyping, and building.</p>
      <div className="dock-scroll" aria-label="Design toolkit">
        <div className="tool-dock">
          <ToolGroup />
          <ToolGroup hidden />
        </div>
      </div>
    </section>
  );
}
