import { motion } from "framer-motion";
import { Info } from "@phosphor-icons/react";

const entryFiles = [
  { name: "CLAUDE.md", tool: "Claude Code" },
  { name: "HERMES.md", tool: "Hermes Agent" },
  { name: "AGENTS.md", tool: "OpenAI Codex" },
  { name: "INIT.md", tool: "Custom / manual boot" },
  { name: "BOOT.md", tool: "Lightweight wake" },
  { name: "SKILL.md", tool: "Skill-based runtimes" },
];

const stateFiles = [
  { name: "STATE.md", desc: "Current truth" },
  { name: "TODO.md", desc: "Active tasks" },
  { name: "MEMORY.md", desc: "Durable recall" },
];

export function EntryPointSection() {
  return (
    <section id="entry-point" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          The Entry Point
        </motion.h2>
        <p className="mb-10 max-w-3xl text-[var(--color-fg-secondary)]">
          The entry file is whatever your runtime loads first: AGENTS.md, CLAUDE.md, INIT.md, BOOT.md, SKILL.md, or another adapter file. Continuity only requires that the agent loads the right state chain and writes back changed state.
        </p>

        {/* Three entry file cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {entryFiles.map((file, i) => (
            <motion.div
              key={file.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-6"
            >
              <div className="rounded-md bg-[var(--color-bg-overlay)] p-3 font-mono text-sm font-bold text-[var(--color-accent-11)]">
                {file.name}
              </div>
              <p className="mt-3 text-xs text-[var(--color-fg-secondary)]">{file.tool}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="my-6 flex justify-center"
        >
          <svg width="60" height="40" viewBox="0 0 60 40">
            <line x1="30" y1="0" x2="30" y2="28" stroke="var(--color-accent-9)" strokeWidth="2" />
            <path d="M 22 28 L 30 38 L 38 28" fill="none" stroke="var(--color-accent-9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* State files declared */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {stateFiles.map((sf) => (
              <div
                key={sf.name}
                className="rounded-lg border-2 border-[var(--color-accent-9)] bg-[var(--color-accent-1)] p-4"
              >
                <p className="font-mono text-sm font-bold text-[var(--color-accent-11)]">{sf.name}</p>
                <p className="mt-1 text-xs text-[var(--color-fg-secondary)]">{sf.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--color-fg-secondary)]">
            Most cases: AGENTS.md + TODO.md + optional identity file.
          </p>
        </motion.div>

        {/* B5: Auto-injection callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-10 max-w-3xl rounded-lg bg-[var(--color-bg-inset)] p-5"
        >
          <div className="flex items-start gap-3">
            <Info size={18} className="mt-0.5 shrink-0 text-[var(--color-fg-secondary)]" />
            <p className="text-sm text-[var(--color-fg-secondary)]">
              Some frameworks auto-inject files. AGENTS.promptinclude.md is for tools that support auto-loading (Agent Zero). If your agent auto-loads CLAUDE.md or AGENTS.md, nest your state references there.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
