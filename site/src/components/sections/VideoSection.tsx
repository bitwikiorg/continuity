import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section id="video" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          The Architecture of Persistent AI
        </motion.h2>
        <p className="mb-10 max-w-3xl text-[var(--color-fg-secondary)]">
          A walkthrough of how Continuity externalizes agent state into versioned files — and why it matters.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-inset)] shadow-lg"
        >
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/MhI9HvM7qR0"
              title="CONTINUITY: The Architecture of Persistent AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
