import { useState } from "react";
import { motion } from "framer-motion";
import { fileNodes, fileEdges } from "@/data/files";

type Tier = "all" | "required" | "recommended" | "advanced";

const tierLabels: Record<Tier, string> = {
  all: "All",
  required: "Minimum",
  recommended: "Standard",
  advanced: "Full",
};

const tierDescs: Record<Tier, string> = {
  all: "Every file in the system.",
  required: "The bare minimum. 10 files that give your agent identity, state, and boot capability.",
  recommended: "Adds memory, tools, context budget, snapshots, and health checks. Good for most projects.",
  advanced: "Adds checkpoints, events, and binding discipline. For complex multi-agent or production systems.",
};

const tierColors: Record<string, string> = {
  required: "var(--color-accent-9)",
  recommended: "var(--color-accent-secondary-9)",
  advanced: "var(--sand-9, #c8956d)",
};

const classColors: Record<string, string> = {
  state: "var(--color-accent-9)",
  history: "var(--color-accent-secondary-9)",
  library: "var(--sand-9, #c8956d)",
  capability: "var(--color-neutral-9)",
};

export function TierSelectorSection() {
  const [activeTier, setActiveTier] = useState<Tier>("all");

  const isVisible = (nodeTier: string) => {
    if (activeTier === "all") return true;
    if (activeTier === "required") return nodeTier === "required";
    if (activeTier === "recommended") return nodeTier === "required" || nodeTier === "recommended";
    return true;
  };

  const visibleNodes = fileNodes.filter((n) => isVisible(n.tier));
  const visibleIds = new Set(visibleNodes.map((n) => n.id));
  const visibleEdges = fileEdges.filter(
    (e) => visibleIds.has(e.source) && visibleIds.has(e.target)
  );

  return (
    <section id="tiers" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Pick your tier
        </motion.h2>
        <p className="mb-8 text-[var(--color-fg-secondary)]">
          Four tiers from minimum to advanced. Each tier adds more files. Click a tier to see which files belong to it.
        </p>

        {/* Tier buttons */}
        <div className="mb-6 flex flex-wrap gap-2">
          {(Object.keys(tierLabels) as Tier[]).map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              aria-label={`Show ${tierLabels[tier]} tier files`}
              className={`rounded-lg border-2 px-5 py-2.5 text-sm font-bold transition-all ${
                activeTier === tier
                  ? "border-[var(--color-accent-9)] bg-[var(--color-accent-3)] text-[var(--color-accent-11)]"
                  : "border-[var(--color-border)] bg-[var(--color-bg-overlay)] text-[var(--color-fg-secondary)] hover:border-[var(--color-neutral-7)]"
              }`}
            >
              {tierLabels[tier]}
            </button>
          ))}
        </div>

        <p className="mb-6 text-sm text-[var(--color-fg-secondary)]">{tierDescs[activeTier]}</p>

        <div className="mb-6 rounded-lg border-2 border-[var(--color-accent-9)] bg-[var(--color-accent-1)] p-4">
          <p className="text-sm font-bold text-[var(--color-accent-11)]">30+ files is heavy. Most agents need 3-5.</p>
          <p className="mt-1 text-xs text-[var(--color-fg-secondary)]">
            The full template set exists because different loop types need different state shapes. Start with AGENTS.md + TODO.md + STATE.md. Add files only when your agent's loop actually needs them.
          </p>
        </div>

        {/* File mesh with tier filtering */}
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-4">
          <svg viewBox="0 0 850 750" className="min-w-[850px]" style={{ maxHeight: "600px" }}>
            {/* Edges */}
            {visibleEdges.map((edge, i) => {
              const s = fileNodes.find((n) => n.id === edge.source)!;
              const t = fileNodes.find((n) => n.id === edge.target)!;
              return (
                <line
                  key={i}
                  x1={s.x}
                  y1={s.y}
                  x2={t.x}
                  y2={t.y}
                  stroke={tierColors[s.tier] || "var(--color-border)"}
                  strokeWidth={1}
                  opacity={0.4}
                />
              );
            })}
            {/* Nodes */}
            {visibleNodes.map((node) => (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={node.x - 50}
                  y={node.y - 14}
                  width={100}
                  height={28}
                  rx={6}
                  fill={"var(--color-bg-overlay)"}
                  stroke={tierColors[node.tier]}
                  strokeWidth={1.5}
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
                <circle cx={node.x + 42} cy={node.y - 10} r={3} fill={classColors[node.class]} />
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Tier legend */}
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-[var(--color-accent-9)]" /><span className="text-xs text-[var(--color-fg)]">Minimum (required)</span></div>
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-[var(--color-accent-secondary-9)]" /><span className="text-xs text-[var(--color-fg)]">Standard (recommended)</span></div>
          <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full" style={{ backgroundColor: "var(--sand-9, #c8956d)" }} /><span className="text-xs text-[var(--color-fg)]">Full (advanced)</span></div>
        </div>
      </div>
    </section>
  );
}
