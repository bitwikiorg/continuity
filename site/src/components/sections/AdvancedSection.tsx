import { motion } from "framer-motion";
import { Database, TreeStructure } from "@phosphor-icons/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const meshLayers = [
  {
    name: "SCHEMA.lua",
    desc: "Machine-readable mesh graph (canonical source)",
  },
  {
    name: "YAML frontmatter",
    desc: "Per-file metadata embedded in each .md",
  },
  {
    name: "schema_validate.py",
    desc: "Bridge that validates both layers together",
  },
];

export function AdvancedSection() {
  return (
    <section id="advanced" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Advanced
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          Optional extensions for teams that need more. Vector stores let agents search state files semantically. Schema validation makes the mesh machine-readable.
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Vector Stores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <Database size={32} className="mb-2 text-[var(--color-accent-9)]" />
                <CardTitle className="text-[var(--color-fg)]">Vector Stores</CardTitle>
                <CardDescription>Semantic search across state histories</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-fg-secondary)]">
                  State files can be sent to embedding models and stored in vector databases. This makes it easy to search across all states and large contexts. Agents can query entire state histories semantically. Hooks can trigger re-embedding when state files change.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Schema-Validated Mesh */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <TreeStructure size={32} className="mb-2 text-[var(--color-accent-9)]" />
                <CardTitle className="text-[var(--color-fg)]">Schema-Validated Mesh</CardTitle>
                <CardDescription>Machine-readable mesh validation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-[var(--color-fg-secondary)]">
                  For teams that need machine-readable mesh validation, a three-layer pattern works:
                </p>
                <div className="space-y-2">
                  {meshLayers.map((layer) => (
                    <div
                      key={layer.name}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-inset)] px-3 py-2"
                    >
                      <span className="font-mono text-xs font-semibold text-[var(--color-accent-11)]">
                        {layer.name}
                      </span>
                      <span className="ml-2 text-xs text-[var(--color-fg-secondary)]">
                        {layer.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-[var(--color-fg-secondary)]">
                  The mesh becomes both human-readable (markdown prose) and machine-readable (schema + YAML + validator). Relationships, dependencies, and reconciliation triggers are queryable.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
