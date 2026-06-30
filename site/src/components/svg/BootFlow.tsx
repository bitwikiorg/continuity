import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stages = [
  { name: "PREFLIGHT", desc: "Confirm environment" },
  { name: "INSPECT", desc: "Check required files" },
  { name: "SCAN", desc: "Security scan subdirs" },
  { name: "LOAD", desc: "Read canonical files" },
  { name: "RECONCILE", desc: "Compare state vs snapshot" },
  { name: "DISCOVER", desc: "Find tools & MCP servers" },
  { name: "VALIDATE", desc: "Verify file integrity" },
  { name: "DECLARE", desc: "READY / WARNINGS / BLOCKED" },
  { name: "SNAPSHOT", desc: "Write restoration anchor" },
];

export function BootFlow() {
  const [activeStage, setActiveStage] = useState(-1);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    let i = 0;
    const interval = setInterval(() => {
      setActiveStage(i);
      i++;
      if (i > stages.length) {
        i = 0;
        setActiveStage(-1);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setRunning(!running)}
        className="mb-2 rounded-md border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-fg-secondary)] hover:bg-[var(--color-bg-inset)]"
      >
        {running ? "Pause" : "Replay"}
      </button>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="rounded-md border-2 border-[var(--color-accent-9)] px-3 py-2 text-center">
          <div className="font-mono text-xs font-bold text-[var(--color-accent-11)]">INIT.md</div>
          <div className="text-[9px] text-[var(--color-fg-secondary)]">entry point</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M 4 10 L 16 10" stroke="var(--color-border)" strokeWidth="2" markerEnd="url(#arrowBoot)" />
          <defs><marker id="arrowBoot" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5" fill="var(--color-border)" /></marker></defs>
        </svg>
        {stages.map((stage, i) => (
          <div key={stage.name} className="flex items-center gap-2">
            <motion.div
              animate={{
                scale: activeStage === i ? 1.1 : 1,
                borderColor: activeStage === i ? "var(--color-accent-9)" : "var(--color-border)",
                backgroundColor: activeStage === i ? "var(--color-accent-3)" : "var(--color-bg-overlay)",
              }}
              transition={{ duration: 0.3 }}
              className="rounded-md border-2 px-3 py-2 text-center"
            >
              <div className="font-mono text-[10px] font-bold" style={{ color: activeStage === i ? "var(--color-accent-11)" : "var(--color-fg)" }}>
                {i + 1}. {stage.name}
              </div>
              <div className="text-[8px] text-[var(--color-fg-secondary)]">{stage.desc}</div>
            </motion.div>
            {i < stages.length - 1 && (
              <svg width="16" height="20" viewBox="0 0 16 20">
                <path d="M 3 10 L 13 10" stroke={activeStage > i ? "var(--color-accent-9)" : "var(--color-border)"} strokeWidth="2" />
              </svg>
            )}
          </div>
        ))}
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M 4 10 L 16 10" stroke="var(--color-border)" strokeWidth="2" markerEnd="url(#arrowBoot2)" />
          <defs><marker id="arrowBoot2" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5" fill="var(--color-border)" /></marker></defs>
        </svg>
        <motion.div
          animate={{
            borderColor: activeStage >= stages.length - 1 ? "var(--color-accent-9)" : "var(--color-border)",
            backgroundColor: activeStage >= stages.length - 1 ? "var(--color-accent-3)" : "var(--color-bg-overlay)",
          }}
          className="rounded-md border-2 px-3 py-2 text-center"
        >
          <div className="font-mono text-xs font-bold text-[var(--color-accent-11)]">READY</div>
          <div className="text-[9px] text-[var(--color-fg-secondary)]">or BLOCKED</div>
        </motion.div>
      </div>
    </div>
  );
}
