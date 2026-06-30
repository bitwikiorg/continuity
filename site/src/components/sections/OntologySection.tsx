import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StateIcon, HistoryIcon, LibraryIcon } from "@/components/svg/OntologyIcons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const classes = [
  {
    name: "State",
    icon: <StateIcon />,
    where: "Root .md files",
    mutability: "Overwrite in place",
    answers: "What IS",
    example: "STATE.md holds the current operational truth. When you update it, the old version lands in its nested pair first. Current value in root, history in the nested directory. No data lost.",
    files: ["AGENTS.md", "IDENTITY.md", "STATE.md", "TODO.md", "PLAN.md"],
  },
  {
    name: "History",
    icon: <HistoryIcon />,
    where: "Nested dirs (append-only)",
    mutability: "Append, never modify",
    answers: "What WAS",
    example: "snapshots/ and journal/ are append-only. Each entry is a new file. Old entries are preserved. You can always look back at what happened and when.",
    files: ["snapshots/*.md", "journal/*.md", "logs/events.jsonl", "WARNING.md"],
  },
  {
    name: "Library",
    icon: <LibraryIcon />,
    where: "Nested dirs (curated)",
    mutability: "Add, update, remove",
    answers: "What is KNOWN",
    example: "memory/ and KNOWLEDGE.md are curated. You add new entries, update facts when they change, and remove outdated ones. Timeless knowledge, not a timeline.",
    files: ["memory/semantic/*", "KNOWLEDGE.md", "TOOLS.md"],
  },
];

export function OntologySection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="ontology" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Three-Class Ontology
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          Every file belongs to one of three classes. State files hold current truth and overwrite in place. History directories store append-only records that never change. Library directories hold curated knowledge you add, update, or remove over time.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {classes.map((cls) => (
            <Card
              key={cls.name}
              className="cursor-pointer transition-all hover:shadow-lg"
              onClick={() => setExpanded(expanded === cls.name ? null : cls.name)}
            >
              <CardHeader>
                <div className="flex items-center justify-center pb-2">{cls.icon}</div>
                <CardTitle className="text-center text-lg">{cls.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-fg-secondary)]">Where:</span>
                    <span className="text-[var(--color-fg)]">{cls.where}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-fg-secondary)]">Mutability:</span>
                    <span className="text-[var(--color-fg)]">{cls.mutability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-fg-secondary)]">Answers:</span>
                    <span className="text-[var(--color-fg)]">{cls.answers}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6"
          >
            <Accordion type="single" collapsible>
              {classes.filter(c => c.name === expanded).map((cls) => (
                <AccordionItem key={cls.name} value={cls.name}>
                  <AccordionTrigger>{cls.name} — concrete example</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-3 text-sm text-[var(--color-fg)]">{cls.example}</p>
                    <p className="mb-1 text-xs uppercase text-[var(--color-fg-secondary)]">Typical files:</p>
                    <div className="flex flex-wrap gap-2">
                      {cls.files.map((f) => (
                        <span key={f} className="rounded bg-[var(--color-neutral-4)] px-2 py-1 font-mono text-xs text-[var(--color-fg-secondary)]">
                          {f}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}
      </div>
    </section>
  );
}
