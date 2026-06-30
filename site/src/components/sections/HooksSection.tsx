import { motion } from "framer-motion";

export function HooksSection() {
  return (
    <section id="hooks" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Hooks
        </motion.h2>
        <p className="mb-10 max-w-3xl text-[var(--color-fg-secondary)]">
          Optional automation for state file changes. Continuity is templates + scripts, not a runtime — hooks add CI-like validation for teams that need it.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] shadow-lg"
        >
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5">
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <span className="ml-2 font-mono text-xs text-[var(--color-fg-secondary)]">hooks.yaml</span>
          </div>
          <div className="p-4 font-mono text-sm leading-relaxed">
            <pre className="whitespace-pre-wrap text-[var(--color-fg)]">{`watch:
  - file: STATE.md
    on_change:
      - append: logs/events.jsonl
      - webhook: \${CONTINUITY_STATE_WEBHOOK}
  - file: TODO.md
    on_done:
      - move_to: completed/
      - append: logs/events.jsonl`}</pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
