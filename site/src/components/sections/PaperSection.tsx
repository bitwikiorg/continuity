import { motion } from "framer-motion";
import { FileText, ArrowSquareOut, Code } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const takeaways = [
  {
    title: "Artifact Grammar",
    desc: "State overwrites in place, history appends, knowledge is curated. Separation prevents drift and bloat.",
  },
  {
    title: "Operational Model",
    desc: "Scoped loading: load only the smallest relevant state chain. Reconciliation invariant: state must approximate reality after work.",
  },
  {
    title: "Negative Evidence",
    desc: "Repo context files can increase cost 20%+ and reduce task success. Continuity treats this as hard design pressure: compact, scoped, current, validated.",
  },
  {
    title: "Multi-Agent Blackboard",
    desc: "Repository as shared surface. Agents claim tasks, load state slices, execute on branches, publish evidence. Not a scheduler — a coordination layer.",
  },
  {
    title: "Threat Model",
    desc: "Prompt injection, silent override, stale-state obedience, false completion. Mitigation: treat imported text as untrusted, validate every file, require evidence.",
  },
];

export function PaperSection() {
  return (
    <section id="paper" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          The Paper
        </motion.h2>
        <p className="mb-10 max-w-3xl text-[var(--color-fg-secondary)]">
          Continuity is backed by a formal systems paper. Repository-native state-as-code for persistent AI coding agents — artifact grammar, operational model, constraints, multi-agent collaboration, evaluation agenda, and threat model.
        </p>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          {/* PDF link card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-8"
          >
            <FileText size={48} className="mb-4 text-[var(--color-accent-9)]" />
            <h3 className="mb-2 text-xl font-bold text-[var(--color-fg)]">
              Repository-native state-as-code
            </h3>
            <p className="mb-6 text-sm text-[var(--color-fg-secondary)]">
              The full paper (PDF for humans, LaTeX source for agents): artifact grammar, operational model, negative evidence, multi-agent blackboard, evaluation agenda, threat model, and implementation blueprint.
            </p>
            <a href="/continuity/continuity-paper-v4.pdf" target="_blank" rel="noreferrer">
              <Button variant="outline" size="default" className="w-full">
                <FileText size={16} />
                Read the Paper (PDF)
                <ArrowSquareOut size={14} />
              </Button>
            </a>
            <a href="/continuity/continuity-latex-v4/" target="_blank" rel="noreferrer">
              <Button variant="outline" size="default" className="w-full mt-3">
                <Code size={16} />
                LaTeX Source
                <ArrowSquareOut size={14} />
              </Button>
            </a>
          </motion.div>

          {/* Key takeaways */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {takeaways.map((t, i) => (
              <div
                key={t.title}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4"
              >
                <h4 className="mb-1 text-sm font-bold text-[var(--color-accent-9)]">
                  {t.title}
                </h4>
                <p className="text-sm text-[var(--color-fg-secondary)]">
                  {t.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
