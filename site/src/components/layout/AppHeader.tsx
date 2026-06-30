import { Moon, Sun, GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export function AppHeader({ theme, onToggleTheme }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 100 100" className="h-7 w-7">
            <g fill="none" stroke="var(--color-accent-9)" strokeWidth="3" strokeLinecap="round">
              <path d="M30 75 L30 35 M30 55 L45 40 M30 55 L18 40"/>
              <path d="M50 75 L50 25 M50 50 L65 35 M50 50 L35 35"/>
              <path d="M70 75 L70 40 M70 58 L82 45 M70 58 L58 45"/>
            </g>
            <circle cx="30" cy="35" r="4" fill="var(--color-accent-9)"/>
            <circle cx="50" cy="25" r="4" fill="var(--color-accent-9)"/>
            <circle cx="70" cy="40" r="4" fill="var(--color-accent-9)"/>
          </svg>
          <span className="font-mono text-sm font-bold text-[var(--color-fg)]">continuity</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://hub.bitwiki.org/" target="_blank" rel="noreferrer" aria-label="Visit BIThub ecosystem">
            <Button variant="ghost" size="sm">
              <ArrowSquareOut size={16} />
              BIThub
            </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <a href="https://github.com/bitwikiorg/continuity" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" aria-label="GitHub repository">
              <GithubLogo size={18} />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
