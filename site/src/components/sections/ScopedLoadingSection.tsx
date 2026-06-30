import { useState } from "react";
import { motion } from "framer-motion";
import { NestingTree } from "@/components/svg/NestingTree";

const chains = [
  {
    id: "code-edit",
    label: "Code edit",
    files: ["AGENTS.md", "STATE.md", "project-a/STATE.md", "module/STATE.md"],
    desc: "Editing code in a specific module. Loads global identity, project state, and module state. Skips MEMORY, TODO, PLAN — not relevant to this action.",
  },
  {
    id: "research",
    label: "Research task",
    files: ["AGENTS.md", "MEMORY.md", "KNOWLEDGE.md", "project-b/STATE.md"],
    desc: "Conducting research. Loads memory index, curated knowledge, and project-b state. Skips module-level files — research is project-scoped, not module-scoped.",
  },
  {
    id: "multi-agent",
    label: "Multi-agent run",
    files: ["AGENTS.md", "STATE.md", "PLAN.md", "TODO.md", "project-a/STATE.md", "task-42/STATE.md"],
    desc: "Coordinating multiple agents on a task. Loads the full project chain down to task-42 state. Each agent gets scoped access to its portion.",
  },
];

export function ScopedLoadingSection() {
  const [active, setActive] = useState(0);

  const chain = chains[active];

  return (
    <section id="scoped-loading" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Scoped Loading
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          Files nest into project directories. The agent loads only the smallest relevant chain for the current task. Working on /backend/auth/ loads root AGENTS.md, project STATE.md, and module STATE.md. Everything else stays on disk.
        </p>

        {/* Nesting tree visual */}
        <NestingTree />

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-border)]" />
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-secondary)]">How it works in practice</span>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>

        {/* Interactive chain selector */}
        <div className="mb-8 flex flex-wrap gap-2">
          {chains.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-all ${
                active === i
                  ? "border-[var(--color-accent-9)] bg-[var(--color-accent-3)] text-[var(--color-accent-11)]"
                  : "border-[var(--color-border)] bg-[var(--color-bg-overlay)] text-[var(--color-fg-secondary)] hover:border-[var(--color-neutral-7)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Visual chain */}
          <motion.div
            key={chain.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-2"
          >
            {chain.files.map((file, i) => (
              <div key={file} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.12 }}
                  className="rounded-lg border-2 px-4 py-2"
                  style={{
                    borderColor: i === 0 ? "var(--color-accent-9)" : i === chain.files.length - 1 ? "var(--color-accent-secondary-9)" : "var(--color-border)",
                    backgroundColor: i === chain.files.length - 1 ? "var(--color-accent-secondary-3)" : "var(--color-bg-overlay)",
                  }}
                >
                  <span className="font-mono text-xs font-bold text-[var(--color-fg)]">{file}</span>
                </motion.div>
                {i < chain.files.length - 1 && (
                  <svg width="2" height="20" viewBox="0 0 2 20">
                    <line x1="1" y1="0" x2="1" y2="20" stroke="var(--color-accent-7)" strokeWidth="2" strokeDasharray="3,2" />
                  </svg>
                )}
              </div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: chain.files.length * 0.12 + 0.2 }}
              className="mt-2 rounded-md bg-[var(--color-accent-3)] px-3 py-1"
            >
              <span className="text-[10px] font-bold uppercase text-[var(--color-accent-11)]">Only {chain.files.length} files loaded</span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            key={chain.id + "-desc"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-6"
          >
            <p className="text-sm text-[var(--color-fg)]">{chain.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {chain.files.map((f) => (
                <span key={f} className="rounded bg-[var(--color-neutral-4)] px-2 py-1 font-mono text-[10px] text-[var(--color-fg-secondary)]">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
