import { motion } from "framer-motion";
import { Info } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { CloneIcon, CopyFilesIcon, ReplaceIcon, BootIcon } from "@/components/svg/QuickStartIcons";

const steps = [
  { num: 1, title: "Clone", icon: <CloneIcon />, desc: "Clone the continuity repo to get the template files." },
  { num: 2, title: "Copy files", icon: <CopyFilesIcon />, desc: "Copy the files you need into your project directory." },
  { num: 3, title: "Replace placeholders", icon: <ReplaceIcon />, desc: "Fill in {{VARIABLES}} with your agent's identity and context." },
  { num: 4, title: "Boot", icon: <BootIcon />, desc: "Point your agent to AGENTS.md. It reads INIT.md and boots itself." },
];

export function QuickStartSection() {
  return (
    <section id="quickstart" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Quick Start
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          Clone the repo. Copy a pack. Replace the placeholders. Point your agent to the entry file. Four steps to a stateful agent.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center pt-6">
                  <div className="mb-3 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-9)] text-xs font-bold text-[var(--color-accent-contrast)]">
                      {step.num}
                    </span>
                    <h3 className="font-semibold text-[var(--color-fg)]">{step.title}</h3>
                  </div>
                  <p className="text-center text-xs text-[var(--color-fg-secondary)]">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Terminal commands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] shadow-lg"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5">
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <div className="h-3 w-3 rounded-full bg-[var(--color-neutral-7)]" />
            <span className="ml-2 font-mono text-xs text-[var(--color-fg-secondary)]">bash</span>
          </div>
          {/* Terminal content */}
          <div className="p-4 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-2"
            >
              <span className="text-[var(--color-fg-secondary)]"># 1. Clone</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-3"
            >
              <span className="text-[var(--color-fg)]">git clone https://github.com/bitwikiorg/continuity.git</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-2"
            >
              <span className="text-[var(--color-fg-secondary)]"># 2. Copy files you need</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mb-3"
            >
              <span className="text-[var(--color-fg)]">cp continuity/AGENTS.md continuity/IDENTITY.md continuity/STATE.md ~/my-agent/</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mb-2"
            >
              <span className="text-[var(--color-fg-secondary)]"># 3. Replace placeholders</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="mb-3"
            >
              <span className="text-[var(--color-fg)]"># Search for {'{{UPPER_CASE}}'} markers and fill in your values</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="mb-2"
            >
              <span className="text-[var(--color-fg-secondary)]"># 4. Boot — point your agent to AGENTS.md</span>
            </motion.div>
          </div>
        </motion.div>

        {/* B3: Make It Your Own callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl rounded-lg border-2 border-[var(--color-accent-9)] bg-[var(--color-accent-1)] p-5"
        >
          <div className="flex items-start gap-3">
            <Info size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-11)]" />
            <p className="text-sm text-[var(--color-fg)]">
              Templates become user-oriented when you make your own state schemas and contents. Copy the templates, fill in the placeholders, then modify the schema to fit your agent&apos;s needs. Your state files should reflect YOUR agent&apos;s loops, not ours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
