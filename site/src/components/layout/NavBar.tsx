import { useState, useEffect } from "react";

const navLinks = [
  { href: "#definition", label: "What is Continuity", title: "What this is and why it matters" },
  { href: "#problem", label: "Problem", title: "Why agents need state" },
  { href: "#video", label: "Video", title: "The Architecture of Persistent AI" },
  { href: "#quickstart", label: "Quick Start", title: "Get started in 4 steps" },
  { href: "#ontology", label: "File Types", title: "State, History, Library — the three classes" },
  { href: "#workspace", label: "File Structure", title: "What the files look like" },
  { href: "#tiers", label: "How Many Files", title: "Tiers: minimum to advanced" },
  { href: "#packs", label: "State Packs", title: "Pre-wired file sets for roles" },
  { href: "#entry-point", label: "Entry File", title: "Which file your runtime loads first" },
  { href: "#skill", label: "Adapters", title: "Runtime-specific wiring" },
  { href: "#scoped-loading", label: "Scoped Loading", title: "Load only the relevant chain" },
  { href: "#file-mesh", label: "File Connections", title: "How files reference each other" },
  { href: "#boot", label: "Boot", title: "How agents start up" },
  { href: "#update-after-work", label: "Update After Work", title: "The agent acts, then updates state" },
  { href: "#git-chain", label: "Git History", title: "Version control as memory" },
  { href: "#hooks", label: "Hooks", title: "Optional automation for state changes" },
  { href: "#advanced", label: "Advanced", title: "Vector stores and schema-validated mesh" },
  { href: "#questionnaire", label: "Find Your Setup", title: "Find your state topology" },
  { href: "#paper", label: "Paper", title: "The formal systems paper" },
  { href: "#glossary", label: "Glossary", title: "Terms explained" },
];

export function NavBar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-14 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              title={link.title}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                activeSection === link.href
                  ? "bg-[var(--color-accent-3)] text-[var(--color-accent-11)]"
                  : "text-[var(--color-fg-secondary)] hover:bg-[var(--color-bg-inset)] hover:text-[var(--color-fg)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
