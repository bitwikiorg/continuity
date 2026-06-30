import { motion } from "framer-motion";
import { ArrowRight, GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const branches = [
  { x1: 200, y1: 48, x2: 80, y2: 90 },
  { x1: 200, y1: 48, x2: 200, y2: 90 },
  { x1: 200, y1: 48, x2: 320, y2: 90 },
];

const level2 = [
  { x: 30, y: 90, label: "IDENTITY.md", delay: 0.8 },
  { x: 150, y: 90, label: "STATE.md", delay: 0.9 },
  { x: 270, y: 90, label: "INIT.md", delay: 1.0 },
];

const level3Lines = [
  { x: 10, y: 150, x2: 80, y2: 200 },
  { x: 180, y: 150, x2: 200, y2: 200 },
  { x: 290, y: 150, x2: 320, y2: 200 },
];

const level3Nodes = [
  { x: 30, y: 200, label: "project-a/", delay: 1.4, color: "var(--sand-3, #e8dcc8)", stroke: "var(--sand-9, #c8956d)" },
  { x: 150, y: 200, label: "MEMORY.md", delay: 1.5, color: "var(--color-accent-3)", stroke: "var(--color-accent-9)" },
  { x: 270, y: 200, label: "TOOLS.md", delay: 1.6, color: "var(--color-accent-secondary-3)", stroke: "var(--color-accent-secondary-9)" },
];

const particles = [0, 1, 2, 3, 4, 5];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:py-24">
        {/* Text column (primary) */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-11)]"
          >
            BITwiki open framework
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black leading-tight tracking-tight text-[var(--color-fg)] sm:text-6xl"
          >
            CONTINUITY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl font-bold text-[var(--color-fg)] sm:text-3xl"
          >
            AI agents forget everything between conversations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-3 max-w-xl text-lg text-[var(--color-fg-secondary)]"
          >
            CONTINUITY gives them a memory that persists — in files you can read, edit, and version.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-base text-[var(--color-fg-secondary)]"
          >
            State files serve loops: observe → reason → act → update state. For any agent that actually iterates.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#problem">
              <Button size="lg">
                Explore the system
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="https://github.com/bitwikiorg/continuity" target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline">
                <GithubLogo size={18} />
                View on GitHub
              </Button>
            </a>
            <a href="https://hub.bitwiki.org/" target="_blank" rel="noreferrer">
              <Button size="lg" variant="ghost">
                <ArrowSquareOut size={18} />
                Join the ecosystem
              </Button>
            </a>
          </motion.div>
        </div>

        {/* SVG tree column (secondary) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative hidden lg:block"
        >
          <svg viewBox="0 0 400 350" className="w-full">
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <rect x="150" y="20" width="100" height="28" rx="6" fill="var(--color-accent-3)" stroke="var(--color-accent-9)" strokeWidth="2"/>
              <text x="200" y="38" textAnchor="middle" fill="var(--color-fg)" fontSize="11" fontFamily="monospace" fontWeight="bold">AGENTS.md</text>
            </motion.g>

            {branches.map((line, i) => (
              <motion.path
                key={"br-" + i}
                d={`M ${line.x1} ${line.y1} Q ${(line.x1 + line.x2) / 2} ${(line.y1 + line.y2) / 2 + 10} ${line.x2} ${line.y2}`}
                fill="none"
                stroke="var(--color-accent-7)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
              />
            ))}

            {level2.map((node, i) => (
              <motion.g key={"l2-" + i} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: node.delay }}>
                <rect x={node.x} y={node.y} width="100" height="26" rx="5" fill="var(--color-accent-secondary-3)" stroke="var(--color-accent-secondary-9)" strokeWidth="1.5"/>
                <text x={node.x + 50} y={node.y + 17} textAnchor="middle" fill="var(--color-fg)" fontSize="10" fontFamily="monospace" fontWeight="bold">{node.label}</text>
              </motion.g>
            ))}

            {level3Lines.map((line, i) => (
              <motion.path
                key={"l3l-" + i}
                d={`M ${line.x + 50} ${line.y + 26} Q ${line.x + 60} ${line.y + 60} ${line.x2} ${line.y2}`}
                fill="none"
                stroke="var(--color-accent-5)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2 + i * 0.12, duration: 0.3 }}
              />
            ))}

            {level3Nodes.map((node, i) => (
              <motion.g key={"l3n-" + i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: node.delay }}>
                <rect x={node.x} y={node.y} width="100" height="24" rx="5" fill={node.color} stroke={node.stroke} strokeWidth="1.5"/>
                <text x={node.x + 50} y={node.y + 16} textAnchor="middle" fill="var(--color-fg)" fontSize="9" fontFamily="monospace">{node.label}</text>
              </motion.g>
            ))}

            <motion.path
              d="M 80 224 Q 90 250 80 270"
              fill="none"
              stroke="var(--sand-7, #d4af8a)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.8, duration: 0.3 }}
            />
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
              <rect x="20" y="270" width="120" height="22" rx="4" fill="var(--sand-1, #f5f0e6)" stroke="var(--sand-7, #d4af8a)" strokeWidth="1"/>
              <text x="80" y="285" textAnchor="middle" fill="var(--color-fg-secondary)" fontSize="8" fontFamily="monospace">subsystem/STATE.md</text>
            </motion.g>

            {particles.map((p, i) => (
              <motion.circle
                key={"p-" + i}
                cx={50 + i * 60}
                cy={320}
                r="2"
                fill="var(--color-accent-7)"
                opacity={0.3}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
