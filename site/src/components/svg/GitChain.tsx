import { useState } from "react";
import { motion } from "framer-motion";

interface Commit {
  hash: string;
  state: string;
  desc: string;
  files: string[];
}

const commits: Commit[] = [
  { hash: "a3f2b1", state: "State A", desc: "Initial boot", files: ["AGENTS.md", "IDENTITY.md", "STATE.md"] },
  { hash: "c7e4d9", state: "State B", desc: "Added MEMORY.md", files: ["AGENTS.md", "IDENTITY.md", "STATE.md", "MEMORY.md"] },
  { hash: "f1a8e3", state: "State C", desc: "Task completed", files: ["AGENTS.md", "IDENTITY.md", "STATE.md", "MEMORY.md", "TODO.md"] },
  { hash: "b9d2c5", state: "State D", desc: "Checkpoint saved", files: ["AGENTS.md", "IDENTITY.md", "STATE.md", "MEMORY.md", "TODO.md", "SNAPSHOT.md"] },
  { hash: "HEAD", state: "Current", desc: "Working state", files: ["AGENTS.md", "IDENTITY.md", "STATE.md", "MEMORY.md", "TODO.md", "SNAPSHOT.md", "PLAN.md"] },
];

export function GitChain() {
  const [selected, setSelected] = useState<number | null>(4);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-1 overflow-x-auto pb-2">
        {commits.map((commit, i) => (
          <div key={i} className="flex items-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="flex flex-col items-center rounded-lg border-2 px-3 py-2 transition-all hover:scale-105"
              style={{
                borderColor: selected === i ? "var(--color-accent-9)" : i === commits.length - 1 ? "var(--color-accent-secondary-9)" : "var(--color-border)",
                backgroundColor: selected === i ? "var(--color-accent-3)" : "var(--color-bg-overlay)",
              }}
            >
              <div className="font-mono text-xs font-bold" style={{ color: i === commits.length - 1 ? "var(--color-accent-secondary-11)" : "var(--color-accent-11)" }}>
                {commit.hash}
              </div>
              <div className="text-[10px] text-[var(--color-fg)]">{commit.state}</div>
              <div className="text-[8px] text-[var(--color-fg-secondary)]">{commit.desc}</div>
            </motion.button>
            {i < commits.length - 1 && (
              <svg width="24" height="40" viewBox="0 0 24 40">
                <line x1="4" y1="20" x2="20" y2="20" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="3,2" />
                <polygon points="20,16 20,24 24,20" fill="var(--color-border)" />
              </svg>
            )}
          </div>
        ))}
      </div>
      {selected !== null && (
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-4"
        >
          <p className="mb-2 font-mono text-xs text-[var(--color-accent-11)]">
            {commits[selected].hash} \u2014 {commits[selected].state}
          </p>
          <p className="mb-2 text-sm text-[var(--color-fg)]">{commits[selected].desc}</p>
          <div className="text-xs text-[var(--color-fg-secondary)]">Files in this snapshot:</div>
          <div className="mt-1 flex flex-wrap gap-1">
            {commits[selected].files.map((f) => (
              <span key={f} className="rounded bg-[var(--color-neutral-4)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-fg-secondary)]">
                {f}
              </span>
            ))}
          </div>
          {selected < commits.length - 1 && (
            <p className="mt-3 text-xs text-[var(--color-accent-11)]">
              \u2190 Restoring here reverts to this cognitive state. Later commits are preserved.
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
