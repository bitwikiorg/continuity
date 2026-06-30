import { motion } from "framer-motion";
import { BootFlow } from "@/components/svg/BootFlow";

export function BootSection() {
  return (
    <section id="boot" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Boot Sequence
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          INIT.md runs a 9-stage boot procedure. The agent verifies its environment, loads the right state chain, checks for drift, and declares READY, READY_WITH_WARNINGS, or BLOCKED.
        </p>
        <BootFlow />
      </div>
    </section>
  );
}
