import { motion } from "framer-motion";

const files = [
  { name: "AGENTS.md", annotation: "boot instructions", delay: 0.1 },
  { name: "IDENTITY.md", annotation: "who the agent is", delay: 0.2 },
  { name: "STATE.md", annotation: "what's happening now", delay: 0.3 },
  { name: "MEMORY.md", annotation: "what the agent knows", delay: 0.4 },
  { name: "TODO.md", annotation: "what to do next", delay: 0.5 },
  { name: "SNAPSHOT.md", annotation: "last known good state", delay: 0.6 },
];

export function FolderVisualSection() {
  return (
    <section id="workspace" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          What your agent's workspace looks like
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          The agent workspace is plain markdown. AGENTS.md declares identity and boot rules. STATE.md holds current truth. TODO.md tracks active tasks. MEMORY.md stores durable facts. Each file has one concern.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] shadow-lg"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5">
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <span className="ml-2 font-mono text-xs text-[var(--color-fg-secondary)]">my-agent/</span>
          </div>
          {/* File tree */}
          <div className="p-4 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-2 text-[var(--color-fg)]"
            >
              📁 my-agent/
            </motion.div>
            {files.map((file, i) => (
              <motion.div
                key={file.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: file.delay }}
                className="flex items-center gap-2 py-0.5"
              >
                <span className="text-[var(--color-fg-secondary)]">{i === files.length - 1 ? "└──" : "├──"}</span>
                <span className="font-semibold text-[var(--color-accent-11)]">{file.name}</span>
                <span className="text-[var(--color-fg-secondary)]">←</span>
                <span className="text-[var(--color-fg-secondary)]">{file.annotation}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
