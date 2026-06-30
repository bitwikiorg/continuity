import { motion } from "framer-motion";

export function CloneIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <rect x="15" y="20" width="50" height="40" rx="4" fill="none" stroke="var(--color-accent-9)" strokeWidth="2" />
        <rect x="30" y="35" width="50" height="40" rx="4" fill="var(--color-accent-3)" stroke="var(--color-accent-9)" strokeWidth="2" />
        <line x1="38" y1="45" x2="72" y2="45" stroke="var(--color-accent-9)" strokeWidth="1.5" opacity="0.6" />
        <line x1="38" y1="52" x2="72" y2="52" stroke="var(--color-accent-9)" strokeWidth="1.5" opacity="0.6" />
        <line x1="38" y1="59" x2="60" y2="59" stroke="var(--color-accent-9)" strokeWidth="1.5" opacity="0.6" />
      </motion.g>
      <text x="50" y="90" textAnchor="middle" fill="var(--color-fg-secondary)" fontSize="8" fontFamily="monospace">clone</text>
    </svg>
  );
}

export function CopyFilesIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20">
      <motion.g initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
        <rect x="10" y="25" width="25" height="30" rx="3" fill="var(--color-accent-secondary-3)" stroke="var(--color-accent-secondary-9)" strokeWidth="2" />
        <line x1="14" y1="33" x2="31" y2="33" stroke="var(--color-accent-secondary-9)" strokeWidth="1" opacity="0.5" />
        <line x1="14" y1="38" x2="31" y2="38" stroke="var(--color-accent-secondary-9)" strokeWidth="1" opacity="0.5" />
        <line x1="14" y1="43" x2="28" y2="43" stroke="var(--color-accent-secondary-9)" strokeWidth="1" opacity="0.5" />
        <path d="M 38 40 L 55 40" stroke="var(--color-accent-9)" strokeWidth="2" markerEnd="url(#qsArrow)" />
        <defs><marker id="qsArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="var(--color-accent-9)" /></marker></defs>
        <rect x="60" y="25" width="25" height="30" rx="3" fill="var(--color-accent-3)" stroke="var(--color-accent-9)" strokeWidth="2" />
        <line x1="64" y1="33" x2="81" y2="33" stroke="var(--color-accent-9)" strokeWidth="1" opacity="0.5" />
        <line x1="64" y1="38" x2="81" y2="38" stroke="var(--color-accent-9)" strokeWidth="1" opacity="0.5" />
        <line x1="64" y1="43" x2="78" y2="43" stroke="var(--color-accent-9)" strokeWidth="1" opacity="0.5" />
      </motion.g>
      <text x="50" y="90" textAnchor="middle" fill="var(--color-fg-secondary)" fontSize="8" fontFamily="monospace">copy files</text>
    </svg>
  );
}

export function ReplaceIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <rect x="22" y="24" width="56" height="45" rx="4" fill="none" stroke="var(--color-accent-9)" strokeWidth="2" />
        <text x="50" y="53" textAnchor="middle" fill="var(--color-accent-11)" fontSize="14" fontFamily="monospace">{'{{NAME}}'}</text>
        <motion.circle
          cx="88" cy="14" r="10" fill="var(--color-accent-9)"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}
        />
        <text x="88" y="19" textAnchor="middle" fill="var(--color-accent-contrast)" fontSize="12" fontWeight="bold">\u2713</text>
      </motion.g>
      <text x="50" y="90" textAnchor="middle" fill="var(--color-fg-secondary)" fontSize="8" fontFamily="monospace">replace</text>
    </svg>
  );
}

export function BootIcon() {
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20">
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <circle cx="50" cy="42" r="25" fill="none" stroke="var(--color-accent-9)" strokeWidth="2" />
        <motion.path
          d="M 50 30 L 50 42 L 58 48"
          stroke="var(--color-accent-9)" strokeWidth="2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.5 }}
        />
        <text x="50" y="80" textAnchor="middle" fill="var(--color-accent-11)" fontSize="9" fontFamily="monospace" fontWeight="bold">READY</text>
      </motion.g>
      <text x="50" y="93" textAnchor="middle" fill="var(--color-fg-secondary)" fontSize="7" fontFamily="monospace">boot</text>
    </svg>
  );
}
