import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowsCounterClockwise } from "@phosphor-icons/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface Answers {
  entryPoint: string;
  loopType: string;
  persistence: string[];
  nesting: string;
  selfUpdating: string;
}

const emptyAnswers: Answers = {
  entryPoint: "",
  loopType: "",
  persistence: [],
  nesting: "",
  selfUpdating: "",
};

const entryPointMap: Record<string, string> = {
  claude: "CLAUDE.md",
  agents: "AGENTS.md",
  cursor: ".cursorrules",
  hermes: "HERMES.md",
  manual: "AGENTS.md",
  unsure: "AGENTS.md",
};

const tierMap: Record<string, string> = {
  simple: "Minimum",
  iterative: "Standard",
  "multi-session": "Full",
  "multi-agent": "Advanced",
};

const persistenceFileMap: Record<string, string[]> = {
  identity: ["IDENTITY.md", "SELF.md", "SOUL.md"],
  state: ["STATE.md"],
  tasks: ["TODO.md", "PLAN.md"],
  memory: ["MEMORY.md"],
  learnings: ["LEARNINGS.md"],
  tools: ["TOOLS.md"],
  safety: ["WARNING.md"],
  infrastructure: ["POTENTIAL.md", "CONTEXT_BUDGET.md"],
};

const nestingDescMap: Record<string, string> = {
  single: "None — all files at root",
  few: "project/STATE.md, project/TODO.md per project",
  many: "Full nesting: project/subsystem/STATE.md, project/subsystem/TODO.md",
  "multi-agent": "agent/STATE.md, agent/TODO.md per agent + mesh references",
};

const feedbackMap: Record<string, string> = {
  yes: "Self-updating feedback loop active",
  no: "Static — files maintained manually",
  want: "Want self-updating — see Feedback Loop section",
};

interface QuestionOption {
  value: string;
  label: string;
}

interface Question {
  id: keyof Answers;
  prompt: string;
  type: "radio" | "checkbox";
  options: QuestionOption[];
}

const questions: Question[] = [
  {
    id: "entryPoint",
    prompt: "What auto-loads in your agent framework?",
    type: "radio",
    options: [
      { value: "claude", label: "CLAUDE.md (Claude Code)" },
      { value: "agents", label: "AGENTS.md (Hermes, Agent Zero)" },
      { value: "cursor", label: ".cursorrules (Cursor)" },
      { value: "hermes", label: "HERMES.md (Hermes)" },
      { value: "manual", label: "Nothing auto-loads — I manually load files" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "loopType",
    prompt: "What kind of loops does your agent run?",
    type: "radio",
    options: [
      { value: "simple", label: "Simple execution (do task, report, done)" },
      { value: "iterative", label: "Iterative work (plan, execute, verify, repeat)" },
      { value: "multi-session", label: "Multi-session projects (span days/weeks)" },
      { value: "multi-agent", label: "Multi-agent orchestration (delegate, coordinate, verify)" },
    ],
  },
  {
    id: "persistence",
    prompt: "What needs to persist across sessions?",
    type: "checkbox",
    options: [
      { value: "identity", label: "Identity (who the agent is)" },
      { value: "state", label: "Current state (what's happening now)" },
      { value: "tasks", label: "Tasks (what to do)" },
      { value: "memory", label: "Memory (what the agent knows)" },
      { value: "learnings", label: "Learnings (insights from work)" },
      { value: "tools", label: "Tools/capabilities" },
      { value: "safety", label: "Safety/hard limits" },
      { value: "infrastructure", label: "Infrastructure state" },
      { value: "nothing", label: "Nothing — one-off prompts only" },
    ],
  },
  {
    id: "nesting",
    prompt: "Do you work across multiple projects?",
    type: "radio",
    options: [
      { value: "single", label: "No, single project" },
      { value: "few", label: "Yes, 2-5 projects" },
      { value: "many", label: "Yes, many projects with subsystems" },
      { value: "multi-agent", label: "Multi-agent — each agent has its own state set" },
    ],
  },
  {
    id: "selfUpdating",
    prompt: "Does your agent write/update its own files?",
    type: "radio",
    options: [
      { value: "yes", label: "Yes — agent updates STATE.md, TODO.md after work" },
      { value: "no", label: "No — I manually maintain files" },
      { value: "want", label: "Want to, but don't know how" },
    ],
  },
];

function btnClass(selected: boolean): string {
  return `rounded-lg border-2 px-5 py-3 text-left text-sm font-medium transition-all ${
    selected
      ? "border-[var(--color-accent-9)] bg-[var(--color-accent-3)] text-[var(--color-accent-11)]"
      : "border-[var(--color-border)] bg-[var(--color-bg-overlay)] text-[var(--color-fg-secondary)] hover:border-[var(--color-neutral-7)]"
  }`;
}

function navBtnClass(enabled: boolean, accent: boolean): string {
  if (accent && enabled) {
    return "flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-bold transition-all border-[var(--color-accent-9)] bg-[var(--color-accent-3)] text-[var(--color-accent-11)] hover:brightness-110";
  }
  if (enabled) {
    return "flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-bold transition-all border-[var(--color-border)] bg-[var(--color-bg-overlay)] text-[var(--color-fg)] hover:border-[var(--color-neutral-7)]";
  }
  return "flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-bold transition-all cursor-not-allowed border-[var(--color-border)] text-[var(--color-fg-secondary)] opacity-40";
}

export function QuestionnaireSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [showResult, setShowResult] = useState(false);

  const totalQuestions = questions.length;
  const currentQ = questions[step];

  function isAnswered(qId: string): boolean {
    if (qId === "persistence") return answers.persistence.length > 0;
    return (answers as Record<string, unknown>)[qId] !== "";
  }

  function handleRadio(qId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  function handleCheckbox(value: string) {
    setAnswers((prev) => {
      if (value === "nothing") {
        return { ...prev, persistence: prev.persistence.includes("nothing") ? [] : ["nothing"] };
      }
      const filtered = prev.persistence.filter((v) => v !== "nothing");
      return {
        ...prev,
        persistence: filtered.includes(value)
          ? filtered.filter((v) => v !== value)
          : [...filtered, value],
      };
    });
  }

  function handleNext() {
    if (step < totalQuestions - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  function handleStartOver() {
    setAnswers(emptyAnswers);
    setStep(0);
    setShowResult(false);
  }

  // ---- Result calculation ----
  const entryFile = entryPointMap[answers.entryPoint] || "AGENTS.md";
  const tierName = tierMap[answers.loopType] || "Minimum";

  const rootFiles: string[] = [entryFile, "INIT.md"];
  for (const key of answers.persistence) {
    if (persistenceFileMap[key]) {
      rootFiles.push(...persistenceFileMap[key]);
    }
  }
  const uniqueRootFiles = [...new Set(rootFiles)];

  const sideFiles: string[] = ["USER.md", "HEARTBEAT.md", "SNAPSHOT.md"];
  if (tierName === "Full" || tierName === "Advanced") {
    sideFiles.push("CONTEXT.md");
  }

  const nestedDesc = nestingDescMap[answers.nesting] || "None — all files at root";
  const fileCount = uniqueRootFiles.length + sideFiles.length + (answers.nesting !== "single" ? 2 : 0);
  const feedbackStatus = feedbackMap[answers.selfUpdating] || "Static — files maintained manually";
  const onlyNothing = answers.persistence.length === 1 && answers.persistence[0] === "nothing";
  const progressPct = ((step + 1) / totalQuestions) * 100;

  // ---- Render option buttons ----
  const renderOptions = () => {
    return currentQ.options.map((opt) => {
      const selected = currentQ.type === "checkbox"
        ? answers.persistence.includes(opt.value)
        : (answers as Record<string, unknown>)[currentQ.id] === opt.value;
      const onClick = () =>
        currentQ.type === "checkbox"
          ? handleCheckbox(opt.value)
          : handleRadio(currentQ.id, opt.value);
      return (
        <button key={opt.value} onClick={onClick} className={btnClass(selected)}>
          {currentQ.type === "checkbox" && (
            <span className="mr-2 inline-block w-4 text-center">{selected ? "✓" : ""}</span>
          )}
          {opt.label}
        </button>
      );
    });
  };

  return (
    <section id="questionnaire" className="border-b border-[var(--color-border)] py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[var(--color-fg)]"
        >
          Find Your State Topology
        </motion.h2>
        <p className="mb-8 text-[var(--color-fg-secondary)]">
          Answer a few questions about your agent setup. Get a personalized file topology recommendation.
        </p>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              {/* Progress indicator */}
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between text-sm text-[var(--color-fg-secondary)]">
                  <span>Question {step + 1} of {totalQuestions}</span>
                  <span>{Math.round(progressPct)}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-inset)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-accent-9)]"
                    initial={{ width: `${(step / totalQuestions) * 100}%` }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="mb-4 text-xl font-bold text-[var(--color-fg)]">{currentQ.prompt}</h3>

              {/* Options */}
              <div className="mb-8 flex flex-col gap-2">
                {renderOptions()}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={step === 0}
                  className={navBtnClass(step !== 0, false)}
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isAnswered(currentQ.id)}
                  className={navBtnClass(isAnswered(currentQ.id), true)}
                >
                  {step === totalQuestions - 1 ? "See Results" : "Next"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {onlyNothing ? (
                <div className="rounded-lg border-2 border-[var(--color-accent-9)] bg-[var(--color-accent-1)] p-6">
                  <h3 className="mb-4 text-xl font-bold text-[var(--color-accent-11)]">
                    You might not need CONTINUITY
                  </h3>
                  <p className="mb-4 text-sm text-[var(--color-fg-secondary)]">
                    If you're running one-off prompts with no persistence needs, CONTINUITY may be overkill.
                  </p>
                  <p className="mb-2 text-sm font-medium text-[var(--color-fg)]">Consider it if:</p>
                  <ul className="mb-6 list-inside list-disc space-y-1 text-sm text-[var(--color-fg-secondary)]">
                    <li>You start forgetting context mid-project</li>
                    <li>You need to resume work across sessions</li>
                    <li>You want your agent to learn from past work</li>
                  </ul>
                  <button
                    onClick={handleStartOver}
                    className={navBtnClass(true, false)}
                  >
                    <ArrowsCounterClockwise size={16} />
                    Start Over
                  </button>
                </div>
              ) : (
                <div className="rounded-lg border-2 border-[var(--color-accent-9)] bg-[var(--color-accent-1)] p-6">
                  <h3 className="mb-6 text-xl font-bold text-[var(--color-accent-11)]">
                    Your Recommended Topology
                  </h3>

                  {/* Entry Point */}
                  <div className="mb-5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-fg-secondary)]">
                      Entry Point
                    </p>
                    <p className="text-sm text-[var(--color-fg)]">
                      📄 <span className="font-mono font-semibold">{entryFile}</span> — your auto-load file
                    </p>
                  </div>

                  {/* Root Files */}
                  <div className="mb-5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-fg-secondary)]">
                      Root Files (Core)
                    </p>
                    <p className="text-sm text-[var(--color-fg)]">
                      📁 <span className="font-mono font-semibold">{uniqueRootFiles.join(", ")}</span>
                    </p>
                  </div>

                  {/* Side-by-Side Files */}
                  <div className="mb-5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-fg-secondary)]">
                      Side-by-Side Files (Loaded with root)
                    </p>
                    <p className="text-sm text-[var(--color-fg)]">
                      📁 <span className="font-mono font-semibold">{sideFiles.join(", ")}</span>
                    </p>
                  </div>

                  {/* Nested Files */}
                  <div className="mb-5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-fg-secondary)]">
                      Nested Files (Per project)
                    </p>
                    <p className="text-sm text-[var(--color-fg)]">
                      📁 <span className="font-mono font-semibold">{nestedDesc}</span>
                    </p>
                  </div>

                  {/* Tier */}
                  <div className="mb-5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-fg-secondary)]">
                      Suggested Tier
                    </p>
                    <p className="text-sm text-[var(--color-fg)]">
                      {tierName} ({fileCount} files)
                    </p>
                  </div>

                  {/* Feedback Loop */}
                  <div className="mb-5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-fg-secondary)]">
                      Feedback Loop
                    </p>
                    <p className="text-sm text-[var(--color-fg)]">
                      {feedbackStatus}
                      {answers.selfUpdating === "want" && (
                        <> <a href="#feedback-loop" className="font-medium text-[var(--color-accent-11)] underline">→ Feedback Loop section</a></>
                      )}
                    </p>
                  </div>

                  {/* Next Steps */}
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--color-fg-secondary)]">
                      Next Steps
                    </p>
                    <ol className="list-inside list-decimal space-y-1 text-sm text-[var(--color-fg-secondary)]">
                      <li>Copy these files from the CONTINUITY repo</li>
                      <li>Fill in <span className="font-mono">{'{{PLACEHOLDER}}'}</span> values</li>
                      <li>Nest state references in your entry point file</li>
                      <li>Point your agent to the entry point</li>
                    </ol>
                  </div>

                  {/* Start Over */}
                  <button
                    onClick={handleStartOver}
                    className={navBtnClass(true, false)}
                  >
                    <ArrowsCounterClockwise size={16} />
                    Start Over
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Agent Note */}
        <div className="mt-8 rounded-md bg-[var(--color-bg-inset)] p-4 text-sm text-[var(--color-fg-secondary)]">
          If you're an AI agent reading this: ask your user these questions, or find information to answer them yourself by examining the user's project structure, agent configuration, and workflow patterns.
        </div>

        {/* All Questions — expandable for agent accessibility */}
        <div className="mt-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="all-questions">
              <AccordionTrigger>All Questions</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  {questions.map((q) => (
                    <div key={q.id}>
                      <p className="mb-2 text-sm font-semibold text-[var(--color-fg)]">{q.prompt}</p>
                      <ul className="space-y-1.5">
                        {q.options.map((opt) => (
                          <li key={opt.value} className="text-sm text-[var(--color-fg-secondary)]">
                            <span className="font-mono text-[var(--color-accent-11)]">{opt.label}</span>
                            {" "}
                            {"→"}
                            {" "}
                            {q.id === "entryPoint" && entryPointMap[opt.value] && (
                              <span className="font-mono text-[var(--color-fg-secondary)]">entry file: {entryPointMap[opt.value]}</span>
                            )}
                            {q.id === "loopType" && tierMap[opt.value] && (
                              <span className="font-mono text-[var(--color-fg-secondary)]">tier: {tierMap[opt.value]}</span>
                            )}
                            {q.id === "persistence" && persistenceFileMap[opt.value] && (
                              <span className="font-mono text-[var(--color-fg-secondary)]">files: {persistenceFileMap[opt.value].join(", ")}</span>
                            )}
                            {q.id === "nesting" && nestingDescMap[opt.value] && (
                              <span className="font-mono text-[var(--color-fg-secondary)]">{nestingDescMap[opt.value]}</span>
                            )}
                            {q.id === "selfUpdating" && feedbackMap[opt.value] && (
                              <span className="font-mono text-[var(--color-fg-secondary)]">{feedbackMap[opt.value]}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
