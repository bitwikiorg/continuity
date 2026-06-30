import { motion } from "framer-motion";
import { LifecycleTimeline } from "@/components/svg/LifecycleTimeline";

const reconSteps = [
  { num: 1, label: "Action", desc: "Agent completes a task", color: "var(--color-accent-9)", bg: "var(--color-accent-3)" },
  { num: 2, label: "Reality changes", desc: "The world state is different", color: "var(--color-accent-secondary-9)", bg: "var(--color-accent-secondary-3)" },
  { num: 3, label: "Old state invalid", desc: "File claims no longer accurate", color: "var(--sand-9, #c8956d)", bg: "var(--sand-3, #e8dcc8)" },
  { num: 4, label: "Update & reconcile", desc: "State files updated, index refreshed", color: "var(--color-accent-9)", bg: "var(--color-accent-3)" },
];

const loopSteps = [
  { num: 1, label: "Agent works", short: "Execute task" },
  { num: 2, label: "Updates STATE.md", short: "Write truth" },
  { num: 3, label: "Moves tasks to completed/", short: "Archive done" },
  { num: 4, label: "Appends to memory/", short: "Store learning" },
  { num: 5, label: "Next session loads state", short: "Inherit context" },
  { num: 6, label: "Agent inherits context", short: "Accumulate" },
];

export function UpdateAfterWorkSection() {
  const radius = 130;
  const centerX = 200;
  const centerY = 180;

  return (
    <section id="update-after-work" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Update After Work
        </motion.h2>
        <p className="mb-10 max-w-3xl text-[var(--color-fg-secondary)]">
          After meaningful work, the agent updates state to match reality. STATE.md gets the new truth. TODO.md moves completed tasks to completed/. SNAPSHOT.md refreshes as a recovery checkpoint. LEARNINGS.md captures insights. Without this loop, the files are static config.
        </p>

        {/* 1. Lifecycle timeline (before/after comparison) */}
        <LifecycleTimeline />

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-border)]" />
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-secondary)]">What happens after each action</span>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>

        {/* 2. Reconciliation 4-step flow */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-2">
          {reconSteps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center lg:flex-row lg:items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center rounded-xl border-2 px-5 py-4 text-center"
                style={{ borderColor: step.color, backgroundColor: step.bg, minWidth: "160px" }}
              >
                <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold" style={{ backgroundColor: step.color, color: "var(--color-bg)" }}>
                  {step.num}
                </div>
                <div className="text-sm font-bold" style={{ color: step.color }}>{step.label}</div>
                <div className="mt-1 text-[11px] text-[var(--color-fg-secondary)]">{step.desc}</div>
              </motion.div>
              {i < reconSteps.length - 1 && (
                <div className="my-2 lg:mx-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="lg:rotate-0 rotate-90">
                    <motion.path
                      d="M 4 12 L 20 12"
                      stroke="var(--color-border)" strokeWidth="2" fill="none" markerEnd="url(#arrowReconUA)"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3 }}
                    />
                    <defs><marker id="arrowReconUA" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="var(--color-border)" /></marker></defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reconciliation example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-10 max-w-2xl rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-5"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-secondary)]">Example</p>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex gap-2">
              <span className="text-[var(--color-accent-11)]">ACTION:</span>
              <span className="text-[var(--color-fg)]">Agent deploys API to production</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[var(--color-accent-secondary-11)]">REALITY:</span>
              <span className="text-[var(--color-fg)]">API is now live at https://api.example.com</span>
            </div>
            <div className="flex gap-2">
              <span style={{ color: "var(--sand-9, #c8956d)" }}>STALE:</span>
              <span className="text-[var(--color-fg-secondary)] line-through">STATE.md says "API not deployed"</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[var(--color-accent-11)]">UPDATE:</span>
              <span className="text-[var(--color-fg)]">STATE.md → "API deployed at https://api.example.com"</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[var(--color-accent-11)]">INDEX:</span>
              <span className="text-[var(--color-fg)]">MEMORY.md updated with deployment timestamp</span>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[var(--color-border)]" />
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-secondary)]">The cycle</span>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>

        {/* 3. Feedback loop circular visual + step list */}
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <svg viewBox="0 0 400 360" className="w-full max-w-[420px]">
              <motion.path
                d="M 200 50 A 130 130 0 1 1 199.9 50"
                fill="none"
                stroke="var(--color-accent-9)"
                strokeWidth="2"
                strokeDasharray="6,4"
                opacity={0.4}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <text x={centerX} y={centerY - 5} textAnchor="middle" fill="var(--color-fg-secondary)" fontSize="11" fontFamily="monospace">
                feedback
              </text>
              <text x={centerX} y={centerY + 12} textAnchor="middle" fill="var(--color-fg-secondary)" fontSize="11" fontFamily="monospace">
                loop
              </text>
              {loopSteps.map((step, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                return (
                  <motion.g
                    key={step.num}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                  >
                    <circle
                      cx={x}
                      cy={y}
                      r="26"
                      fill="var(--color-accent-3)"
                      stroke="var(--color-accent-9)"
                      strokeWidth="2"
                    />
                    <text x={x} y={y + 3} textAnchor="middle" fill="var(--color-accent-11)" fontSize="12" fontFamily="monospace" fontWeight="bold">
                      {step.num}
                    </text>
                    <text
                      x={x}
                      y={y < centerY ? y - 32 : y + 40}
                      textAnchor="middle"
                      fill="var(--color-fg)"
                      fontSize="8"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {step.label}
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            {loopSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-9)] text-sm font-bold text-[var(--color-accent-contrast)]">
                  {step.num}
                </span>
                <div>
                  <p className="text-sm font-medium text-[var(--color-fg)]">{step.label}</p>
                  <p className="text-xs text-[var(--color-fg-secondary)]">{step.short}</p>
                </div>
                {i < loopSteps.length - 1 && (
                  <span className="ml-auto text-[var(--color-accent-9)]">&rarr;</span>
                )}
                {i === loopSteps.length - 1 && (
                  <span className="ml-auto text-xs font-mono text-[var(--color-accent-11)]">&larr; back to 1</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
