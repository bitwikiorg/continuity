export interface FileNode {
  id: string;
  label: string;
  tier: "required" | "recommended" | "advanced";
  class: "state" | "history" | "library" | "capability";
  x: number;
  y: number;
  role: string;
}

export interface FileEdge {
  source: string;
  target: string;
  label?: string;
}

export const fileNodes: FileNode[] = [
  { id: "AGENTS", label: "AGENTS.md", tier: "required", class: "state", x: 400, y: 80, role: "Bootloader & authority model" },
  { id: "IDENTITY", label: "IDENTITY.md", tier: "required", class: "state", x: 200, y: 180, role: "Who the agent is" },
  { id: "SOUL", label: "SOUL.md", tier: "required", class: "state", x: 600, y: 180, role: "Essence & constitution" },
  { id: "SELF", label: "SELF.md", tier: "required", class: "state", x: 100, y: 300, role: "Operating model" },
  { id: "USER", label: "USER.md", tier: "required", class: "state", x: 300, y: 300, role: "Operator model" },
  { id: "INIT", label: "INIT.md", tier: "required", class: "state", x: 500, y: 300, role: "Boot sequence" },
  { id: "STATE", label: "STATE.md", tier: "required", class: "state", x: 700, y: 300, role: "Current truth" },
  { id: "TODO", label: "TODO.md", tier: "required", class: "state", x: 150, y: 430, role: "Active tasks" },
  { id: "PLAN", label: "PLAN.md", tier: "required", class: "state", x: 350, y: 430, role: "Intended sequence" },
  { id: "MEMORY", label: "MEMORY.md", tier: "required", class: "state", x: 550, y: 430, role: "Memory index" },
  { id: "SNAPSHOT", label: "SNAPSHOT.md", tier: "recommended", class: "state", x: 750, y: 430, role: "Restoration anchor" },
  { id: "TOOLS", label: "TOOLS.md", tier: "recommended", class: "library", x: 100, y: 560, role: "Capability registry" },
  { id: "CONTEXT", label: "CONTEXT.md", tier: "recommended", class: "state", x: 300, y: 560, role: "Current context budget" },
  { id: "WARNING", label: "WARNING.md", tier: "recommended", class: "state", x: 500, y: 560, role: "Hard limits, pre-action checklist" },
  { id: "CHECKPOINT", label: "CHECKPOINT.md", tier: "advanced", class: "state", x: 700, y: 560, role: "Binding checkpoint" },
  { id: "HEARTBEAT", label: "HEARTBEAT.md", tier: "recommended", class: "state", x: 200, y: 680, role: "Periodic check protocol" },
  { id: "KNOWLEDGE", label: "KNOWLEDGE.md", tier: "recommended", class: "library", x: 450, y: 680, role: "Curated knowledge" },
  { id: "EVENTS", label: "EVENTS.md", tier: "advanced", class: "capability", x: 650, y: 680, role: "Recent event summary" },
]

export const fileEdges: FileEdge[] = [
  { source: "AGENTS", target: "IDENTITY", label: "references" },
  { source: "AGENTS", target: "SOUL", label: "references" },
  { source: "AGENTS", target: "SELF", label: "references" },
  { source: "AGENTS", target: "INIT", label: "invokes" },
  { source: "AGENTS", target: "STATE", label: "loads" },
  { source: "INIT", target: "STATE", label: "reconciles" },
  { source: "INIT", target: "SNAPSHOT", label: "compares" },
  { source: "STATE", target: "PLAN", label: "links" },
  { source: "STATE", target: "TODO", label: "links" },
  { source: "STATE", target: "MEMORY", label: "indexes" },
  { source: "SELF", target: "USER", label: "serves" },
  { source: "MEMORY", target: "KNOWLEDGE", label: "indexes" },
  { source: "STATE", target: "WARNING", label: "tracks" },
  { source: "STATE", target: "CHECKPOINT", label: "checkpoints" },
  { source: "INIT", target: "TOOLS", label: "discovers" },
  { source: "INIT", target: "CONTEXT", label: "checks" },
  { source: "HEARTBEAT", target: "STATE", label: "monitors" },
  { source: "EVENTS", target: "STATE", label: "logs" },
  { source: "IDENTITY", target: "SOUL", label: "routes to" },
  { source: "SNAPSHOT", target: "STATE", label: "restores" },
]
