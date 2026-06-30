import { motion } from "framer-motion";

const frames = [
  {
    num: 1,
    caption: "You talk to an AI",
    delay: 0,
  },
  {
    num: 2,
    caption: "Session ends, AI forgets everything",
    delay: 0.2,
  },
  {
    num: 3,
    caption: "With CONTINUITY, AI reads its files and the loop inherits",
    delay: 0.4,
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          The Problem
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          AI agents wake up blank every session. Every observe → reason → act loop starts from zero. CONTINUITY files fix that.
        </p>

        {/* 3-frame story */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {/* Frame 1: You talk to an AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-6"
          >
            <svg viewBox="0 0 200 120" className="mx-auto mb-4 w-full max-w-[240px]">
              {/* Person */}
              <motion.g
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <circle cx="35" cy="40" r="12" fill="none" stroke="var(--color-accent-9)" strokeWidth="2"/>
                <path d="M 35 52 L 35 75 M 35 60 L 25 70 M 35 60 L 45 70 M 35 75 L 28 90 M 35 75 L 42 90" fill="none" stroke="var(--color-accent-9)" strokeWidth="2" strokeLinecap="round"/>
              </motion.g>
              {/* Chat bubble */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <rect x="90" y="30" width="90" height="50" rx="10" fill="var(--color-accent-3)" stroke="var(--color-accent-9)" strokeWidth="2"/>
                <path d="M 90 50 L 78 55 L 90 60" fill="var(--color-accent-3)" stroke="var(--color-accent-9)" strokeWidth="2" strokeLinejoin="round"/>
                <text x="135" y="50" textAnchor="middle" fill="var(--color-fg)" fontSize="8" fontFamily="monospace">What is my</text>
                <text x="135" y="62" textAnchor="middle" fill="var(--color-fg)" fontSize="8" fontFamily="monospace">server IP?</text>
              </motion.g>
            </svg>
            <p className="text-center text-sm font-medium text-[var(--color-fg)]">You talk to an AI</p>
          </motion.div>

          {/* Frame 2: Session ends, AI forgets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-6"
          >
            <svg viewBox="0 0 200 120" className="mx-auto mb-4 w-full max-w-[240px]">
              {/* Fading chat bubble */}
              <motion.g
                initial={{ opacity: 1 }}
                whileInView={{ opacity: [1, 0.2, 0.1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, times: [0, 0.5, 1] }}
              >
                <rect x="55" y="25" width="90" height="50" rx="10" fill="var(--color-neutral-5)" stroke="var(--color-neutral-7)" strokeWidth="2" strokeDasharray="4,3"/>
                <text x="100" y="45" textAnchor="middle" fill="var(--color-neutral-8)" fontSize="8" fontFamily="monospace">server IP:</text>
                <text x="100" y="57" textAnchor="middle" fill="var(--color-neutral-8)" fontSize="8" fontFamily="monospace">192.0.2.1</text>
              </motion.g>
              {/* Blank face */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <circle cx="100" cy="95" r="10" fill="none" stroke="var(--color-neutral-7)" strokeWidth="2" strokeDasharray="3,2"/>
                <line x1="95" y1="93" x2="97" y2="93" stroke="var(--color-neutral-7)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="103" y1="93" x2="105" y2="93" stroke="var(--color-neutral-7)" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="96" y1="99" x2="104" y2="99" stroke="var(--color-neutral-7)" strokeWidth="1" strokeLinecap="round"/>
              </motion.g>
              {/* Question marks */}
              <motion.text
                x="125" y="100" fill="var(--color-neutral-7)" fontSize="14" fontFamily="monospace" fontWeight="bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 0, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
              >
                ?
              </motion.text>
            </svg>
            <p className="text-center text-sm font-medium text-[var(--color-fg)]">Session ends, AI forgets everything</p>
          </motion.div>

          {/* Frame 3: With CONTINUITY, AI remembers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-lg border-2 border-[var(--color-accent-9)] bg-[var(--color-accent-1)] p-6"
          >
            <svg viewBox="0 0 200 120" className="mx-auto mb-4 w-full max-w-[240px]">
              {/* Files */}
              <motion.g
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <rect x="15" y="25" width="50" height="35" rx="4" fill="var(--color-accent-3)" stroke="var(--color-accent-9)" strokeWidth="2"/>
                <text x="40" y="42" textAnchor="middle" fill="var(--color-fg)" fontSize="7" fontFamily="monospace" fontWeight="bold">MEMORY</text>
                <text x="40" y="52" textAnchor="middle" fill="var(--color-fg)" fontSize="7" fontFamily="monospace" fontWeight="bold">.md</text>
              </motion.g>
              {/* Arrow from files to brain */}
              <motion.path
n                d="M 68 42 L 100 60"
                fill="none"
                stroke="var(--color-accent-9)"
                strokeWidth="2"
                markerEnd="url(#arrowFrame3)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4 }}
              />
              <defs>
                <marker id="arrowFrame3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6" fill="var(--color-accent-9)"/>
                </marker>
              </defs>
              {/* Brain/AI with checkmark */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, type: "spring" }}
              >
                <circle cx="130" cy="60" r="25" fill="var(--color-accent-3)" stroke="var(--color-accent-9)" strokeWidth="2"/>
                <text x="130" y="56" textAnchor="middle" fill="var(--color-fg)" fontSize="7" fontFamily="monospace" fontWeight="bold">AI</text>
                <motion.path
                  d="M 120 65 L 127 70 L 140 58"
                  fill="none"
                  stroke="var(--color-accent-11)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                />
              </motion.g>
              {/* Memory text */}
              <motion.text
                x="130" y="100" textAnchor="middle" fill="var(--color-accent-11)" fontSize="8" fontFamily="monospace" fontWeight="bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 }}
              >
                remembers!
              </motion.text>
            </svg>
            <p className="text-center text-sm font-medium text-[var(--color-accent-11)]">With CONTINUITY, AI reads its files and remembers</p>
          </motion.div>
        </div>

        {/* Before/After with real content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Without CONTINUITY */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-neutral-8)]">
              Without CONTINUITY
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="rounded-md bg-[var(--color-bg)] p-3">
                <p className="text-xs font-semibold text-[var(--color-neutral-8)]">Session 1</p>
                <p className="mt-1 text-[var(--color-fg-secondary)]">Agent observes: server IP is 192.0.2.1</p>
              </div>
              <div className="rounded-md bg-[var(--color-bg)] p-3">
                <p className="text-xs font-semibold text-[var(--color-neutral-8)]">Session 2</p>
                <p className="mt-1 text-[var(--color-fg-secondary)]">Loop starts from zero. Agent re-observes, re-learns. Intelligence evaporated.</p>
              </div>
            </div>
          </motion.div>

          {/* With CONTINUITY */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border-2 border-[var(--color-accent-9)] bg-[var(--color-accent-1)] p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-11)]">
              With CONTINUITY
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="rounded-md bg-[var(--color-bg)] p-3">
                <p className="text-xs font-semibold text-[var(--color-accent-11)]">Session 1</p>
                <p className="mt-1 text-[var(--color-fg)]">Agent observes: server IP is 192.0.2.1 <span className="text-[var(--color-accent-11)]">→ saves to MEMORY.md</span></p>
              </div>
              <div className="rounded-md bg-[var(--color-bg)] p-3">
                <p className="text-xs font-semibold text-[var(--color-accent-11)]">Session 2</p>
                <p className="mt-1 text-[var(--color-fg)]">Loop inherits: Agent reads MEMORY.md, knows the IP. The loop resumes, not restarts.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
