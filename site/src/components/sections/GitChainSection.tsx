import { motion } from "framer-motion";
import { GitChain } from "@/components/svg/GitChain";

export function GitChainSection() {
  return (
    <section id="git-chain" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Git: Versioned Snapshots
        </motion.h2>
        <p className="mb-10 text-[var(--color-fg-secondary)]">
          Every commit is a verifiable checkpoint of the agent's cognitive state. Diff, revert, or trace how state evolved.
        </p>
        <GitChain />
        <div className="mx-auto mt-8 max-w-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="py-2 text-left text-[var(--color-fg-secondary)]">Git concept</th>
                <th className="py-2 text-left text-[var(--color-fg-secondary)]">What it means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Commit", "Snapshot of full cognitive state"],
                ["SHA hash", "Verifiable fingerprint"],
                ["Parent linkage", "Ordered history"],
                ["Branch", "Try a different approach"],
                ["Merge", "Reconcile divergent paths"],
                ["git checkout", "Restore previous state"],
                ["git blame", "Provenance — who changed what"],
                ["git diff", "See what changed between states"],
              ].map(([git, desc]) => (
                <tr key={git} className="border-b border-[var(--color-border)] border-dashed">
                  <td className="py-2 font-mono text-[var(--color-accent-11)]">{git}</td>
                  <td className="py-2 text-[var(--color-fg)]">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
