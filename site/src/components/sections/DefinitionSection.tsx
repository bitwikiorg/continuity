import { motion } from "framer-motion";

export function DefinitionSection() {
  return (
    <section id="definition" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-[var(--color-fg)]">
            What is Continuity
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-fg-secondary)]">
            Continuity is a library of markdown files that give AI agents persistent state. Agents lose everything when a session ends. Continuity fixes that by storing identity, tasks, knowledge, and memory in files the agent reads at startup and updates after work. The files are plain text. They work with any agent that can read files. They version with git.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
