import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const adapters = [
  {
    runtime: "Claude Code",
    entryFile: "CLAUDE.md",
    description: "Auto-loads CLAUDE.md on every turn. File-based read/write.",
  },
  {
    runtime: "OpenAI Codex",
    entryFile: "AGENTS.md",
    description: "Auto-loads AGENTS.md across global, repo, and directory scopes.",
  },
  {
    runtime: "Hermes",
    entryFile: "AGENTS.md",
    description: "Progressively discovers local context files as agent moves through project.",
  },
  {
    runtime: "OpenClaw",
    entryFile: "AGENTS.md",
    description: "Uses SKILL.md directories with loading order and security gates.",
  },
  {
    runtime: "Agent Zero",
    entryFile: "AGENTS.md",
    description: "Auto-loads AGENTS.md. Supports promptinclude for auto-injection.",
  },
];

export function SkillSection() {
  return (
    <section id="skill" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Adapters
        </motion.h2>
        <p className="mb-10 max-w-3xl text-[var(--color-fg-secondary)]">
          Continuity works with any agent that reads files. Each adapter tells your runtime which file to load first and how to write state back after work.
        </p>

        {/* Adapter cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adapters.map((adapter, i) => (
            <motion.div
              key={adapter.runtime}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-[var(--color-fg)]">{adapter.runtime}</CardTitle>
                  <CardDescription className="font-mono text-[var(--color-accent-11)]">{adapter.entryFile}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--color-fg-secondary)]">{adapter.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Accordion for expandable details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <Accordion type="single" collapsible>
            {adapters.map((adapter) => (
              <AccordionItem key={adapter.runtime} value={adapter.runtime}>
                <AccordionTrigger>{adapter.runtime}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-[var(--color-fg-secondary)]">
                    <span className="font-mono text-[var(--color-accent-11)]">{adapter.entryFile}</span> — {adapter.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
