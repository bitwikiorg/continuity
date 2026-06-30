import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const terms = [
  { term: "State", definition: "What the agent currently knows and is doing." },
  { term: "Ontology", definition: "How files are classified (State/History/Library)." },
  { term: "Mesh", definition: "Files referencing each other in many-to-many relationships." },
  { term: "Nesting", definition: "Files placed in project subdirectories for scoped context." },
  { term: "MCP", definition: "Model Context Protocol — a standard for connecting AI tools." },
  { term: "Tier", definition: "A preset bundle of files (Minimum/Standard/Full/Advanced)." },
];

export function GlossarySection() {
  return (
    <section id="glossary" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Glossary
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">Terms used throughout this site, defined plainly.</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <Accordion type="single" collapsible>
            {terms.map((item, i) => (
              <AccordionItem key={item.term} value={`item-${i}`}>
                <AccordionTrigger>{item.term}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-[var(--color-fg-secondary)]">{item.definition}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
