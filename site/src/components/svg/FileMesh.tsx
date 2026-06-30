import { useState } from "react";
import { fileNodes, fileEdges } from "@/data/files";

const tierColors: Record<string, string> = {
  required: "var(--color-accent-9)",
  recommended: "var(--color-accent-secondary-9)",
  advanced: "var(--color-neutral-9)",
};

const classColors: Record<string, string> = {
  state: "var(--color-accent-9)",
  history: "var(--color-accent-secondary-9)",
  library: "var(--sand-9, #c8956d)",
  capability: "var(--color-neutral-9)",
};

export function FileMesh() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const activeId = hovered || selected;
  const connectedIds = new Set<string>();
  if (activeId) {
    fileEdges.forEach((e) => {
      if (e.source === activeId) connectedIds.add(e.target);
      if (e.target === activeId) connectedIds.add(e.source);
    });
  }

  const activeNode = fileNodes.find((n) => n.id === activeId);
  const activeEdges = activeId
    ? fileEdges.filter((e) => e.source === activeId || e.target === activeId)
    : [];

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="overflow-x-auto">
        <svg viewBox="0 0 850 750" className="min-w-[850px]" style={{ maxHeight: "600px" }}>
          {/* Edges */}
          {fileEdges.map((edge, i) => {
            const s = fileNodes.find((n) => n.id === edge.source)!;
            const t = fileNodes.find((n) => n.id === edge.target)!;
            const isActive = activeId && (edge.source === activeId || edge.target === activeId);
            const isDimmed = activeId && !isActive;
            return (
              <g key={i}>
                <line
                  x1={s.x}
                  y1={s.y}
                  x2={t.x}
                  y2={t.y}
                  stroke={isActive ? "var(--color-accent-9)" : "var(--color-neutral-7)"}
                  strokeWidth={isActive ? 2 : 1}
                  opacity={isDimmed ? 0.15 : isActive ? 0.8 : 0.3}
                />
                {isActive && edge.label && (
                  <text
                    x={(s.x + t.x) / 2}
                    y={(s.y + t.y) / 2 - 4}
                    textAnchor="middle"
                    fill="var(--color-accent-11)"
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="bold"
                    opacity={0.8}
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}
          {/* Nodes */}
          {fileNodes.map((node) => {
            const isActive = node.id === activeId;
            const isConnected = connectedIds.has(node.id);
            const isDimmed = activeId && !isActive && !isConnected;
            return (
              <g
                key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(selected === node.id ? null : node.id)}
                style={{ cursor: "pointer", opacity: isDimmed ? 0.3 : 1 }}
              >
                <rect
                  x={node.x - 50}
                  y={node.y - 14}
                  width={100}
                  height={28}
                  rx={6}
                  fill={isActive ? "var(--color-accent-3)" : "var(--color-bg-overlay)"}
                  stroke={isActive ? "var(--color-accent-9)" : tierColors[node.tier]}
                  strokeWidth={isActive ? 2 : 1}
                />
                <text
                  x={node.x}
                  y={node.y + 2}
                  textAnchor="middle"
                  fill="var(--color-fg)"
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {node.label}
                </text>
                {/* Tier indicator dot */}
                <circle
                  cx={node.x + 42}
                  cy={node.y - 10}
                  r={3}
                  fill={classColors[node.class]}
                />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="flex w-full flex-col gap-2 lg:w-64">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-3">
          {activeNode ? (
            <>
              <p className="font-mono text-sm font-bold text-[var(--color-accent-11)]">{activeNode.label}</p>
              <p className="mt-1 text-xs text-[var(--color-fg)]">{activeNode.role}</p>
              <p className="mt-2 text-[10px] uppercase text-[var(--color-fg-secondary)]">Tier: {activeNode.tier}</p>
              <p className="text-[10px] uppercase text-[var(--color-fg-secondary)]">Class: {activeNode.class}</p>
              {activeEdges.length > 0 && (
                <>
                  <p className="mt-2 text-[10px] uppercase text-[var(--color-fg-secondary)]">Connections:</p>
                  <ul className="mt-1 space-y-1">
                    {activeEdges.map((e, i) => (
                      <li key={i} className="text-[10px] text-[var(--color-fg)]">
                        {e.source === activeNode.id ? "\u2192" : "\u2190"} {e.source === activeNode.id ? e.target : e.source}
                        {e.label && <span className="text-[var(--color-fg-secondary)]"> ({e.label})</span>}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className="text-xs text-[var(--color-fg-secondary)]">Hover or click a file node to see its role and connections.</p>
          )}
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-3">
          <p className="mb-1 text-[10px] uppercase text-[var(--color-fg-secondary)]">Legend</p>
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-[var(--color-accent-9)]" /><span className="text-[10px] text-[var(--color-fg)]">State</span></div>
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-[var(--color-accent-secondary-9)]" /><span className="text-[10px] text-[var(--color-fg)]">History</span></div>
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--sand-9, #c8956d)" }} /><span className="text-[10px] text-[var(--color-fg)]">Library</span></div>
        </div>
      </div>
    </div>
  );
}
