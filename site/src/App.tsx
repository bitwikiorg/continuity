import { useState, useEffect } from "react";
import { ArrowSquareOut, GithubLogo, FileText } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { AppHeader } from "@/components/layout/AppHeader";
import { NavBar } from "@/components/layout/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { DefinitionSection } from "@/components/sections/DefinitionSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { QuickStartSection } from "@/components/sections/QuickStartSection";
import { OntologySection } from "@/components/sections/OntologySection";
import { FolderVisualSection } from "@/components/sections/FolderVisualSection";
import { TierSelectorSection } from "@/components/sections/TierSelectorSection";
import { TemplateSection } from "@/components/sections/TemplateSection";
import { EntryPointSection } from "@/components/sections/EntryPointSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { ScopedLoadingSection } from "@/components/sections/ScopedLoadingSection";
import { FileMeshSection } from "@/components/sections/FileMeshSection";
import { BootSection } from "@/components/sections/BootSection";
import { UpdateAfterWorkSection } from "@/components/sections/UpdateAfterWorkSection";
import { GitChainSection } from "@/components/sections/GitChainSection";
import { HooksSection } from "@/components/sections/HooksSection";
import { AdvancedSection } from "@/components/sections/AdvancedSection";
import { QuestionnaireSection } from "@/components/sections/QuestionnaireSection";
import { PaperSection } from "@/components/sections/PaperSection";
import { GlossarySection } from "@/components/sections/GlossarySection";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-appearance", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-fg)]">
      <AppHeader theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <NavBar />
      <HeroSection />
      <main>
        <DefinitionSection />
        <ProblemSection />
        <VideoSection />
        <QuickStartSection />
        <OntologySection />
        <FolderVisualSection />
        <TierSelectorSection />
        <TemplateSection />
        <EntryPointSection />
        <SkillSection />
        <ScopedLoadingSection />
        <FileMeshSection />
        <BootSection />
        <UpdateAfterWorkSection />
        <GitChainSection />
        <HooksSection />
        <AdvancedSection />
        <QuestionnaireSection />
        <PaperSection />
        <GlossarySection />
      </main>
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-inset)]">
        <div className="container mx-auto grid gap-6 px-4 py-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-sm font-semibold text-[var(--color-fg)]">continuity</p>
            <p className="mt-2 max-w-2xl text-sm text-[var(--color-fg-secondary)]">
              Stateful agent files that nest, accumulate, and persist across sessions.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm md:justify-end">
            <a href="/continuity/continuity-paper-v4.pdf" target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm" aria-label="Read the paper">
                <FileText size={16} />
                Paper
              </Button>
            </a>
            <a href="https://github.com/bitwikiorg/continuity" target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm" aria-label="GitHub repository">
                <GithubLogo size={16} />
                GitHub
              </Button>
            </a>
            <a href="https://hub.bitwiki.org/" target="_blank" rel="noreferrer">
              <Button size="sm" aria-label="Join the BIThub ecosystem">
                <ArrowSquareOut size={16} />
                Back to BIThub
              </Button>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
