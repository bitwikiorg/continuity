import { motion } from "framer-motion";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const packs = [
  {
    name: "developer",
    purpose: "General coding agent",
    files: ["AGENTS.md", "INIT.md", "STATE.md", "TODO.md", "PLAN.md", "SNAPSHOT.md", "CHECKPOINT.md"],
  },
  {
    name: "backend",
    purpose: "APIs, databases, auth",
    files: ["AGENTS.md", "STATE.md", "TODO.md", "WARNING.md", "CHECKPOINT.md"],
  },
  {
    name: "frontend",
    purpose: "UI, routes, components",
    files: ["AGENTS.md", "STATE.md", "TODO.md", "CHECKPOINT.md"],
  },
  {
    name: "researcher",
    purpose: "Long-running research",
    files: ["AGENTS.md", "STATE.md", "TODO.md", "MEMORY.md", "KNOWLEDGE.md", "LEARNINGS.md"],
  },
  {
    name: "judge",
    purpose: "Evaluation and review",
    files: ["AGENTS.md", "RUBRIC.md", "CLAIMS.md", "EVIDENCE.md", "DECISION.md", "RISKS.md"],
  },
  {
    name: "security",
    purpose: "Risk and secrets control",
    files: ["AGENTS.md", "THREAT_MODEL.md", "WARNING.md", "CHECKPOINT.md", "INCIDENTS.md"],
  },
  {
    name: "ops",
    purpose: "Infrastructure and production",
    files: ["AGENTS.md", "INFRASTRUCTURE.md", "RUNBOOK.md", "WARNING.md", "SNAPSHOT.md"],
  },
  {
    name: "orchestrator",
    purpose: "Multi-agent coordination",
    files: ["AGENTS.md", "TASKS.md", "PLAN.md", "EVENTS.md", "SNAPSHOT.md", "BINDING.schema.json"],
  },
  {
    name: "docs-writer",
    purpose: "Documentation systems",
    files: ["AGENTS.md", "TODO.md", "STRUCTURE.md", "STYLE.md"],
  },
];

export function TemplateSection() {
  return (
    <section id="packs" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          State Packs
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          A pack is a set of state files wired for one operating mode. The developer pack has 7 files. The researcher pack has 6. Each pack gives you a complete system, not a single template.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-mono text-[var(--color-accent-11)]">{pack.name}</CardTitle>
                  <CardDescription>{pack.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-fg-secondary)]">
                    {pack.files.length} files
                  </p>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="files">
                      <AccordionTrigger className="text-xs">
                        View files
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-wrap gap-1.5">
                          {pack.files.map((file) => (
                            <a
                              key={file}
                              href={`https://github.com/bitwikiorg/continuity/blob/main/packs/${pack.name}/${file}`}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-2 py-1 font-mono text-xs text-[var(--color-fg-secondary)] transition-colors hover:border-[var(--color-accent-9)] hover:text-[var(--color-accent-11)]"
                            >
                              {file}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <a
                    href={`https://github.com/bitwikiorg/continuity/tree/main/packs/${pack.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--color-fg-secondary)] transition-colors hover:text-[var(--color-accent-11)]"
                  >
                    Browse on GitHub
                    <ArrowSquareOut size={12} />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
