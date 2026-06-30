import { motion } from "framer-motion";

const withContinuity = [
  { label: "Boot", desc: "INIT.md runs", color: "var(--color-accent-9)" },
  { label: "Work", desc: "Execute tasks", color: "var(--color-accent-8)" },
  { label: "Checkpoint", desc: "Save to STATE.md", color: "var(--color-accent-7)" },
  { label: "Persist", desc: "Git commit", color: "var(--color-accent-secondary-9)" },
  { label: "Next Boot", desc: "Load state back", color: "var(--color-accent-9)" },
  { label: "Continue", desc: "Resume from last", color: "var(--color-accent-8)" },
];

const withoutContinuity = [
  { label: "Boot", desc: "Blank slate", color: "var(--color-neutral-6)" },
  { label: "Work", desc: "Execute tasks", color: "var(--color-neutral-7)" },
  { label: "End", desc: "State lost", color: "var(--color-neutral-5)" },
  { label: "Boot", desc: "Blank again", color: "var(--color-neutral-6)" },
  { label: "Work", desc: "Re-discover", color: "var(--color-neutral-7)" },
  { label: "End", desc: "Lost again", color: "var(--color-neutral-5)" },
];

export function LifecycleTimeline() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-3 text-sm font-semibold text-[var(--color-accent-11)]">With continuity</p>
        <div className="flex items-center gap-1">
          {withContinuity.map((step, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center rounded-lg border-2 px-3 py-2"
                style={{ borderColor: step.color, backgroundColor: "var(--color-bg-overlay)" }}
              >
                <div className="text-xs font-bold" style={{ color: step.color }}>{step.label}</div>
                <div className="text-[9px] text-[var(--color-fg-secondary)]">{step.desc}</div>
              </motion.div>
              {i < withContinuity.length - 1 && (
                <svg width="20" height="12" viewBox="0 0 20 12">
                  <line x1="3" y1="6" x2="17" y2="6" stroke={step.color} strokeWidth="2" />
                  <polygon points="17,3 17,9 20,6" fill={step.color} />
                </svg>
              )}
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-[var(--color-fg-secondary)]">Every session inherits accumulated context from every previous session.</p>
      </div>

      <div className="h-px bg-[var(--color-border)]" />

      <div>
        <p className="mb-3 text-sm font-semibold text-[var(--color-neutral-8)]">Without continuity</p>
        <div className="flex items-center gap-1 opacity-60">
          {withoutContinuity.map((step, i) => (
            <div key={i} className="flex items-center">
              <div
                className="flex flex-col items-center rounded-lg border-2 px-3 py-2"
                style={{ borderColor: step.color, backgroundColor: "var(--color-bg-inset)" }}
              >
                <div className="text-xs font-bold text-[var(--color-neutral-8)]">{step.label}</div>
                <div className="text-[9px] text-[var(--color-neutral-6)]">{step.desc}</div>
              </div>
              {i < withoutContinuity.length - 1 && (
                <svg width="20" height="12" viewBox="0 0 20 12">
                  <line x1="3" y1="6" x2="17" y2="6" stroke="var(--color-neutral-5)" strokeWidth="2" strokeDasharray="2,2" />
                </svg>
              )}
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-[var(--color-fg-secondary)]">Every session starts from zero. No memory of past work.</p>
      </div>
    </div>
  );
}
