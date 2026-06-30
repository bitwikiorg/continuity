import { motion } from "framer-motion";

export function StateIcon() {
  const active = 2;
  const versions = [
    { i: 0, x: 12 },
    { i: 1, x: 44 },
    { i: 2, x: 76 },
  ];

  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24">
      {versions.map(({ i, x }) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: i === active ? -4 : 0 }}
          transition={{ delay: i * 0.5, duration: 0.4, repeat: Infinity, repeatDelay: 1.5 }}
        >
          <rect
            x={x}
            y={44}
            width={28}
            height={20}
            rx={4}
            fill={i === active ? "var(--color-accent-9)" : "var(--color-bg-overlay)"}
            stroke="var(--color-border)"
            strokeWidth={1}
          />
          <text
            x={x + 14}
            y={58}
            textAnchor="middle"
            fill={i === active ? "var(--color-accent-contrast)" : "var(--color-fg-secondary)"}
            fontSize="8"
            fontFamily="monospace"
            fontWeight={i === active ? "bold" : "normal"}
          >
            v{i + 1}
          </text>
        </motion.g>
      ))}
      <motion.path
        d="M 108 54 L 118 54"
        stroke="var(--color-accent-9)"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowState)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5, delay: 1.5 }}
      />
      <defs>
        <marker id="arrowState" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="var(--color-accent-9)" />
        </marker>
      </defs>
    </svg>
  );
}

export function HistoryIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24">
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={25}
          y={80 - i * 14}
          width={70}
          height={10}
          rx={2}
          fill={i === 3 ? "var(--color-accent-secondary-9)" : "var(--color-accent-secondary-7)"}
          opacity={0.4 + i * 0.15}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: i * 0.3, duration: 0.3 }}
          style={{ transformOrigin: "25px" }}
        />
      ))}
      <motion.text
        x={60}
        y={105}
        textAnchor="middle"
        fill="var(--color-fg-secondary)"
        fontSize="8"
        fontFamily="monospace"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        append-only
      </motion.text>
    </svg>
  );
}

export function LibraryIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24">
      {[
        { x: 25, y: 35, c: "var(--sand-9, #c8956d)", w: false },
        { x: 50, y: 35, c: "var(--sand-7, #d4af8a)", w: true },
        { x: 75, y: 35, c: "var(--sand-5, #e0c8a8)", w: false },
        { x: 25, y: 60, c: "var(--sand-5, #e0c8a8)", w: false },
        { x: 50, y: 60, c: "var(--sand-9, #c8956d)", w: false },
        { x: 75, y: 60, c: "var(--sand-7, #d4af8a)", w: false },
      ].map((book, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: book.w ? 0 : 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.3 }}
        >
          <rect x={book.x} y={book.y} width={18} height={22} rx={2} fill={book.c} opacity={book.w ? 0.1 : 0.8} />
          <line x1={book.x + 4} y1={book.y + 5} x2={book.x + 14} y2={book.y + 5} stroke="var(--color-bg-inset)" strokeWidth="1" opacity={book.w ? 0.1 : 0.5} />
          <line x1={book.x + 4} y1={book.y + 9} x2={book.x + 14} y2={book.y + 9} stroke="var(--color-bg-inset)" strokeWidth="1" opacity={book.w ? 0.1 : 0.5} />
        </motion.g>
      ))}
      <text x={60} y={100} textAnchor="middle" fill="var(--color-fg-secondary)" fontSize="8" fontFamily="monospace">
        curated
      </text>
    </svg>
  );
}
