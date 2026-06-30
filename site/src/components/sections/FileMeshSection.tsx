import { motion } from "framer-motion";
import { Info } from "@phosphor-icons/react";
import { FileMesh } from "@/components/svg/FileMesh";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FileMeshSection() {
  return (
    <section id="file-mesh" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          State Mesh
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          State files index nested directories. One audit entry can serve both STATE.md and LEARNINGS.md. The mesh shows how files connect.
        </p>

        {/* Existing interactive SVG mesh */}
        <FileMesh />

        {/* B6: Enhanced accordion sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <Accordion type="single" collapsible className="border-t border-[var(--color-border)]">

            {/* Mesh vs Hierarchy */}
            <AccordionItem value="mesh-vs-hierarchy">
              <AccordionTrigger>Mesh vs Hierarchy</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-[var(--color-fg-secondary)]">
                    Hierarchy is parent-child: a root AGENTS.md loads child AGENTS.md files in nested workspaces. Mesh is many-to-many: files reference each other sideways regardless of directory structure.
                  </p>
                  <div className="rounded-md bg-[var(--color-bg-overlay)] p-4 font-mono text-xs leading-relaxed text-[var(--color-fg)]">
                    <pre className="whitespace-pre-wrap">{`STATE.md ─────┐
              ├──→ audits/2026-06-29-security.md
LEARNINGS.md ─┘`}</pre>
                  </div>
                  <p className="text-sm text-[var(--color-fg-secondary)]">
                    Multiple state files can point to the same artifact. The artifact doesn&apos;t belong to either — it belongs to the mesh.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Concrete Mesh Patterns */}
            <AccordionItem value="mesh-patterns">
              <AccordionTrigger>Concrete Mesh Patterns</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-4">
                    <p className="mb-2 text-sm font-semibold text-[var(--color-accent-11)]">Shared History</p>
                    <p className="text-xs text-[var(--color-fg-secondary)]">Multiple state files reference the same audit log. STATE.md and LEARNINGS.md both link to <span className="font-mono">audits/2026-06-29.md</span>.</p>
                  </div>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-4">
                    <p className="mb-2 text-sm font-semibold text-[var(--color-accent-11)]">Cross-Cutting Memory</p>
                    <p className="text-xs text-[var(--color-fg-secondary)]">MEMORY.md indexes entries from multiple project workspaces. One memory, many sources.</p>
                  </div>
                  <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-inset)] p-4">
                    <p className="mb-2 text-sm font-semibold text-[var(--color-accent-11)]">Artifact Provenance</p>
                    <p className="text-xs text-[var(--color-fg-secondary)]">An artifact in <span className="font-mono">reports/</span> is linked from STATE.md, TODO.md, and MEMORY.md — each for a different reason.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Mesh Declaration */}
            <AccordionItem value="mesh-declaration">
              <AccordionTrigger>Mesh Declaration</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 text-sm text-[var(--color-fg-secondary)]">Declare mesh edges in a dedicated index section so the agent knows the graph at boot:</p>
                <div className="rounded-md bg-[var(--color-bg-overlay)] p-4 font-mono text-xs leading-relaxed text-[var(--color-fg)]">
                  <pre className="whitespace-pre-wrap">{`## Mesh index

| Source | Target | Relation |
|--------|--------|----------|
| STATE.md | audits/2026-06-29-security.md | references |
| LEARNINGS.md | audits/2026-06-29-security.md | derived_from |
| MEMORY.md | workspaces/api/STATE.md | aggregates |
| TODO.md | reports/q3-summary.md | tracks |`}</pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Query Pattern */}
            <AccordionItem value="query-pattern">
              <AccordionTrigger>Query Pattern</AccordionTrigger>
              <AccordionContent>
                <div className="rounded-lg border-2 border-[var(--color-accent-9)] bg-[var(--color-accent-1)] p-5">
                  <div className="flex items-start gap-3">
                    <Info size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-11)]" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-fg)]">
                        &ldquo;What did we learn from the security audit?&rdquo;
                      </p>
                      <p className="mt-2 text-xs text-[var(--color-fg-secondary)]">
                        Trace: <span className="font-mono text-[var(--color-accent-11)]">STATE.md</span> &rarr; mesh edge &rarr; <span className="font-mono text-[var(--color-accent-11)]">audits/2026-06-29-security.md</span> &rarr; mesh edge &rarr; <span className="font-mono text-[var(--color-accent-11)]">LEARNINGS.md</span> &rarr; extracted entry in <span className="font-mono text-[var(--color-accent-11)]">MEMORY.md</span>
                      </p>
                      <p className="mt-2 text-xs text-[var(--color-fg-secondary)]">
                        The payoff: one question, full trace across files that don&apos;t share a directory.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* When to Mesh */}
            <AccordionItem value="when-to-mesh">
              <AccordionTrigger>When to Mesh</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[var(--color-accent-11)]">Create mesh edges when…</p>
                    <ul className="space-y-1.5 text-xs text-[var(--color-fg-secondary)]">
                      <li>&#x2022; Multiple files reference the same artifact</li>
                      <li>&#x2022; A memory entry aggregates from multiple sources</li>
                      <li>&#x2022; An audit or report traces back to specific state changes</li>
                      <li>&#x2022; Cross-workspace knowledge needs a shared pointer</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[var(--color-fg-secondary)]">Skip mesh edges when…</p>
                    <ul className="space-y-1.5 text-xs text-[var(--color-fg-secondary)]">
                      <li>&#x2022; Files are purely hierarchical (parent &rarr; child)</li>
                      <li>&#x2022; The reference is one-directional and trivial</li>
                      <li>&#x2022; Adding the edge creates more noise than signal</li>
                      <li>&#x2022; The relationship is captured by directory structure alone</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Start Hierarchy, Add Mesh */}
            <AccordionItem value="start-hierarchy">
              <AccordionTrigger>Start Hierarchy, Add Mesh</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-[var(--color-fg-secondary)]">
                  Start with hierarchy: root AGENTS.md &rarr; workspace AGENTS.md &rarr; project STATE.md. That gives you scoping and load order. Add mesh edges only when you discover cross-cutting references that hierarchy can&apos;t express. Mesh is an enhancement, not a replacement.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Index vs Copy */}
            <AccordionItem value="index-vs-copy">
              <AccordionTrigger>Index vs Copy</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-[var(--color-fg-secondary)]">
                  Mesh edges are indexes, not copies. STATE.md doesn&apos;t duplicate the audit content — it points to it. If the audit changes, the pointer still resolves. If you copy, you create drift. Index the relationship; let the source own the content.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Schema and mesh are interconnected */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <h3 className="mb-4 text-xl font-bold text-[var(--color-fg)]">Schema and mesh are interconnected</h3>
            <div className="overflow-hidden rounded-lg border border-[var(--color-border)]">
              <table className="w-full text-sm">
                <thead className="bg-[var(--color-bg-inset)]">
                  <tr>
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase text-[var(--color-fg-secondary)]">Class</th>
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase text-[var(--color-fg-secondary)]">Examples</th>
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase text-[var(--color-fg-secondary)]">Meshability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr>
                    <td className="px-4 py-3 font-mono text-[var(--color-accent-11)]">State</td>
                    <td className="px-4 py-3 text-[var(--color-fg-secondary)]">STATE.md, TODO.md, PLAN.md</td>
                    <td className="px-4 py-3 text-[var(--color-fg-secondary)]">High — multiple states can reference shared artifacts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-[var(--color-accent-11)]">History</td>
                    <td className="px-4 py-3 text-[var(--color-fg-secondary)]">logs/, journals/, audits/</td>
                    <td className="px-4 py-3 text-[var(--color-fg-secondary)]">Medium — provenance links from state to history</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-[var(--color-accent-11)]">Library</td>
                    <td className="px-4 py-3 text-[var(--color-fg-secondary)]">MEMORY.md, references/, skills/</td>
                    <td className="px-4 py-3 text-[var(--color-fg-secondary)]">High — library entries aggregate from many sources</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-[var(--color-fg-secondary)]">
              Three coupling points: (1) State files declare mesh edges to artifacts they track. (2) History files are linked from state as provenance. (3) Library entries aggregate mesh edges from multiple state and history sources.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
