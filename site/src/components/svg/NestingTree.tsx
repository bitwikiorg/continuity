import { useMemo, useState } from "react";
import { motion } from "framer-motion";

interface NestLevel {
  id: string;
  label: string;
  sublabel: string;
  children?: NestLevel[];
}

const tree: NestLevel[] = [
  {
    id: "root",
    label: "Root STATE.md",
    sublabel: "Global agent state",
    children: [
      {
        id: "project",
        label: "project-a/STATE.md",
        sublabel: "Project-scoped state",
        children: [
          {
            id: "subsystem",
            label: "subsystem/STATE.md",
            sublabel: "Subsystem state",
            children: [
              { id: "task", label: "task-42/STATE.md", sublabel: "Task-specific state" },
            ],
          },
        ],
      },
      {
        id: "project-b",
        label: "project-b/STATE.md",
        sublabel: "Another project",
      },
    ],
  },
];

const NODE_W = 156;
const NODE_H = 54;
const GAP_X = 24;
const GAP_Y = 56;

interface LayoutNode extends NestLevel {
  depth: number;
  x: number;
  y: number;
  parentId: string | null;
}

function flatten(
  nodes: NestLevel[],
  depth = 0,
  parentId: string | null = null,
  nextX = 0
): { flat: LayoutNode[]; width: number } {
  let cursorX = nextX;
  const flat: LayoutNode[] = [];

  for (const node of nodes) {
    const childCount = node.children?.length ?? 0;
    let childrenWidth = NODE_W;
    let childNodes: LayoutNode[] = [];

    if (childCount > 0) {
      const childResult = flatten(node.children!, depth + 1, node.id, cursorX);
      childNodes = childResult.flat;
      childrenWidth = childResult.width;
    }

    const x = childCount > 0 ? cursorX + childrenWidth / 2 - NODE_W / 2 : cursorX;

    flat.push({
      ...node,
      depth,
      x,
      y: depth * (NODE_H + GAP_Y),
      parentId,
    });
    flat.push(...childNodes);

    cursorX += childrenWidth + GAP_X;
  }

  const totalWidth = cursorX - GAP_X;
  return { flat, width: Math.max(NODE_W, totalWidth) };
}

function NodeBox({
  node,
  onSelect,
  selected,
}: {
  node: LayoutNode;
  onSelect: (id: string) => void;
  selected: string | null;
}) {
  const isSelected = selected === node.id;
  const colors = [
    "var(--color-accent-9)",
    "var(--color-accent-secondary-9)",
    "var(--sand-9, #c8956d)",
    "var(--color-neutral-9)",
  ];
  const bgColors = [
    "var(--color-accent-3)",
    "var(--color-accent-secondary-3)",
    "var(--sand-3, #e8dcc8)",
    "var(--color-neutral-3)",
  ];
  const color = colors[Math.min(node.depth, colors.length - 1)];
  const bg = bgColors[Math.min(node.depth, bgColors.length - 1)];

  return (
    <motion.foreignObject
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: node.depth * 0.15, duration: 0.3 }}
      x={node.x}
      y={node.y}
      width={NODE_W}
      height={NODE_H}
    >
      <button
        onClick={() => onSelect(node.id)}
        className="h-full w-full rounded-lg border-2 px-2 py-1 text-center transition-all hover:scale-105"
        style={{
          borderColor: isSelected ? color : "var(--color-border)",
          backgroundColor: isSelected ? bg : "var(--color-bg-overlay)",
          boxShadow: isSelected ? `0 0 12px ${color}40` : "none",
        }}
      >
        <div
          className="font-mono text-xs font-bold"
          style={{ color: "var(--color-fg)", lineHeight: 1.1 }}
        >
          {node.label}
        </div>
        <div className="text-[10px] text-[var(--color-fg-secondary)]">
          {node.sublabel}
        </div>
      </button>
    </motion.foreignObject>
  );
}

export function NestingTree() {
  const [selected, setSelected] = useState<string | null>("task");

  const { flat, width, height } = useMemo(() => {
    const result = flatten(tree);
    const maxDepth = result.flat.reduce((m, n) => Math.max(m, n.depth), 0);
    return {
      flat: result.flat,
      width: result.width,
      height: maxDepth * (NODE_H + GAP_Y) + NODE_H,
    };
  }, []);

  const loadInfo: Record<string, string> = {
    root: "Loads global agent identity, authority model, and top-level state index.",
    project: "Loads project-scoped state: objectives, blockers, lifecycle phase.",
    subsystem: "Loads subsystem state: module health, dependencies, integration status.",
    task: "Loads task-specific state: current step, inputs, outputs, verification criteria.",
    "project-b": "Loads project-b state: independent of project-a, scoped isolation.",
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMin meet"
          className="mx-auto min-w-[320px]"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          {flat.map(
            (node) =>
              node.parentId && (
                <line
                  key={`line-${node.id}`}
                  x1={flat.find((n) => n.id === node.parentId)!.x + NODE_W / 2}
                  y1={flat.find((n) => n.id === node.parentId)!.y + NODE_H}
                  x2={node.x + NODE_W / 2}
                  y2={node.y}
                  stroke="var(--color-border)"
                  strokeWidth={2}
                />
              )
          )}
          {flat.map((node) => (
            <NodeBox key={node.id} node={node} onSelect={setSelected} selected={selected} />
          ))}
        </svg>
      </div>
      <div className="max-w-md rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-4 text-center">
        <p className="text-sm text-[var(--color-fg-secondary)]">
          {selected ? loadInfo[selected] : "Click a node to see what loads."}
        </p>
      </div>
      <p className="text-xs text-[var(--color-fg-secondary)]">
        Only the minimal chain from root to the active task is loaded — not the entire tree.
      </p>
    </div>
  );
}
