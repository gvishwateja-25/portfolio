"use client";

import type {
  AnchorHTMLAttributes,
  CSSProperties,
  FormEvent,
  MouseEvent,
  ReactNode,
  TouchEvent,
  UIEvent,
  WheelEvent,
} from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type Project = {
  title: string;
  category: string;
  outcome: string;
  details: string;
  services: string[];
  githubUrl: string;
};

type CareerJourneyEntry = {
  role: string;
  company: string;
  journeyRange: string;
  journeyStatus: string;
  period: string;
  tags: string[];
  points: string[];
};

const categoryLabels = ["All", "Reliability", "Automation", "Delivery", "Messaging"];

const projectPresentation: Record<string, { command: string; visual: string }> = {
  Automation: {
    command: "02_INFRA_AUTOMATION",
    visual: "selected-work-visual-automation",
  },
  Delivery: {
    command: "03_CONTAINER_DELIVERY",
    visual: "selected-work-visual-delivery",
  },
  Messaging: {
    command: "04_EVENT_MESSAGING",
    visual: "selected-work-visual-messaging",
  },
  Reliability: {
    command: "01_MULTI_REGION_RELIABILITY",
    visual: "selected-work-visual-reliability",
  },
};

const careerPixelLetters: Record<string, string[]> = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  C: ["11111", "10000", "10000", "10000", "10000", "10000", "11111"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  J: ["00111", "00010", "00010", "00010", "10010", "10010", "01100"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  Y: ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
};

const careerPixelTitleLines = ["MY CAREER", "JOURNEY"];

const careerPixelStyles = {
  art: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--career-line-gap)",
    maxWidth: "100%",
  },
  cell: {
    borderRadius: "2px",
    height: "var(--career-pixel-size)",
    position: "relative",
    width: "var(--career-pixel-size)",
  },
  letter: {
    display: "grid",
    flex: "0 0 auto",
    gap: "var(--career-pixel-gap)",
    gridTemplateRows: "repeat(7, var(--career-pixel-size))",
  },
  line: {
    display: "flex",
    flexWrap: "nowrap",
    gap: "var(--career-letter-gap)",
    maxWidth: "100%",
  },
  litCell: {
    background: "#dc5b4d",
    boxShadow:
      "calc(var(--career-pixel-size) * 0.34) calc(var(--career-pixel-size) * 0.34) 0 rgb(91 30 25 / 0.55), calc(var(--career-pixel-size) * 0.7) calc(var(--career-pixel-size) * 0.7) 0 rgb(91 30 25 / 0.24)",
  },
  row: {
    display: "grid",
    gap: "var(--career-pixel-gap)",
    gridTemplateColumns: "repeat(5, var(--career-pixel-size))",
  },
  title: {
    display: "block",
    marginTop: "var(--career-title-margin)",
    maxWidth: "100%",
  },
  wordGap: {
    flex: "0 0 var(--career-word-gap)",
  },
} satisfies Record<string, CSSProperties>;

type ResumeDownloadLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "download" | "href" | "onClick"
> & {
  children: ReactNode;
  fileName?: string;
  href: string;
  namePrompt?: string;
};

export function ResumeDownloadLink({
  children,
  fileName = "vishwateja-gorumanthula-resume.pdf",
  href,
  namePrompt = "Please enter your name before downloading the resume:",
  ...props
}: ResumeDownloadLinkProps) {
  const [isNameDialogOpen, setIsNameDialogOpen] = useState(false);
  const [nameError, setNameError] = useState("");
  const [visitorName, setVisitorName] = useState("");

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setNameError("");
    setIsNameDialogOpen(true);
  }

  function handleNameSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedName = visitorName.trim();
    if (!normalizedName) {
      setNameError("Name is required to download the resume.");
      return;
    }

    try {
      window.localStorage.setItem("resumeDownloaderName", normalizedName);
    } catch {
      // Local storage is best-effort only; it should not block the download.
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = href;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();

    setIsNameDialogOpen(false);
    setVisitorName("");
    setNameError("");
  }

  return (
    <>
      <a {...props} href={href} onClick={handleClick}>
        {children}
      </a>

      {isNameDialogOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/75 px-4 backdrop-blur-sm"
          role="dialog"
        >
          <form
            className="w-full max-w-md rounded-lg border border-zinc-200 bg-white p-5 text-zinc-950 shadow-2xl shadow-black/40 dark:border-white/10 dark:bg-[#080b12] dark:text-white"
            onSubmit={handleNameSubmit}
          >
            <h2 className="text-xl font-semibold">Resume download</h2>
            <label className="mt-4 block text-sm font-semibold" htmlFor="resume-download-name">
              {namePrompt}
            </label>
            <input
              autoFocus
              className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
              id="resume-download-name"
              onChange={(event) => {
                setVisitorName(event.target.value);
                if (nameError) {
                  setNameError("");
                }
              }}
              placeholder="Your name"
              type="text"
              value={visitorName}
            />
            {nameError ? (
              <p className="mt-2 text-sm font-semibold text-red-500 dark:text-red-300">
                {nameError}
              </p>
            ) : null}
            <div className="mt-5 flex justify-end gap-3">
              <button
                className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:border-white/10 dark:text-zinc-200 dark:hover:border-white/30 dark:hover:text-white"
                onClick={() => {
                  setIsNameDialogOpen(false);
                  setNameError("");
                }}
                type="button"
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-amber-300 dark:text-zinc-950 dark:hover:bg-amber-200"
                type="submit"
              >
                Download
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}

export function VisitorCounter() {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      const countKey = "vishwateja-portfolio-visitor-count";
      const sessionKey = "vishwateja-portfolio-session-counted";

      try {
        const storedCount = Number.parseInt(
          window.localStorage.getItem(countKey) ?? "0",
          10,
        );
        const currentCount = Number.isFinite(storedCount) ? storedCount : 0;
        const hasCountedSession =
          window.sessionStorage.getItem(sessionKey) === "true";
        const nextCount = hasCountedSession
          ? Math.max(currentCount, 1)
          : currentCount + 1;

        if (!hasCountedSession) {
          window.localStorage.setItem(countKey, String(nextCount));
          window.sessionStorage.setItem(sessionKey, "true");
        }

        setVisitCount(nextCount);
      } catch {
        setVisitCount(1);
      }
    }, 0);

    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-zinc-100">
      <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_14px_rgb(16_185_129_/_0.75)]" />
      Visitors {visitCount === null ? "--" : visitCount.toLocaleString("en-IN")}
    </span>
  );
}

function CareerPixelTitle() {
  return (
    <h2
      className="career-pixel-title"
      aria-label="My Career Journey"
      style={careerPixelStyles.title}
    >
      <span
        className="career-pixel-title-art"
        aria-hidden="true"
        style={careerPixelStyles.art}
      >
        {careerPixelTitleLines.map((line) => (
          <span className="career-pixel-line" key={line} style={careerPixelStyles.line}>
            {Array.from(line).map((letter, letterIndex) =>
              letter === " " ? (
                <span
                  className="career-pixel-word-gap"
                  key={`${line}-${letterIndex}`}
                  style={careerPixelStyles.wordGap}
                />
              ) : (
                <span
                  className="career-pixel-letter"
                  key={`${line}-${letter}-${letterIndex}`}
                  style={careerPixelStyles.letter}
                >
                  {careerPixelLetters[letter].map((row, rowIndex) => (
                    <span
                      className="career-pixel-row"
                      key={`${line}-${letter}-${letterIndex}-${rowIndex}`}
                      style={careerPixelStyles.row}
                    >
                      {Array.from(row).map((cell, cellIndex) => (
                        <span
                          className={
                            cell === "1"
                              ? "career-pixel-cell is-on"
                              : "career-pixel-cell"
                          }
                          key={`${line}-${letter}-${letterIndex}-${rowIndex}-${cellIndex}`}
                          style={{
                            ...careerPixelStyles.cell,
                            ...(cell === "1" ? careerPixelStyles.litCell : null),
                          }}
                        />
                      ))}
                    </span>
                  ))}
                </span>
              ),
            )}
          </span>
        ))}
      </span>
    </h2>
  );
}

export function CareerJourneyTerminal({
  entries,
}: {
  entries: CareerJourneyEntry[];
}) {
  const [journeyStage, setJourneyStage] = useState<"intro" | "command" | "years">(
    "intro",
  );
  const [visibleYearCount, setVisibleYearCount] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);
  const lastScrollTopRef = useRef(0);
  const revealLockRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);
  const yearEntryRefs = useRef<Array<HTMLElement | null>>([]);
  const yearsRef = useRef<HTMLDivElement>(null);

  function scrollBodyTo(target: HTMLElement | null, offset = 24) {
    if (!bodyRef.current || !target) {
      return;
    }

    bodyRef.current.scrollTo({
      behavior: "smooth",
      top: target.offsetTop - offset,
    });
  }

  function changeVisibleExperience(direction: "hide" | "show") {
    if (revealLockRef.current) {
      return;
    }

    const nextVisibleCount =
      direction === "show"
        ? Math.min(visibleYearCount + 1, entries.length)
        : Math.max(visibleYearCount - 1, 0);

    if (nextVisibleCount === visibleYearCount) {
      return;
    }

    revealLockRef.current = true;
    setJourneyStage(nextVisibleCount > 0 ? "years" : "command");
    setVisibleYearCount(nextVisibleCount);

    window.setTimeout(() => {
      if (nextVisibleCount === 0) {
        scrollBodyTo(commandRef.current);
        return;
      }

      scrollBodyTo(yearEntryRefs.current[nextVisibleCount - 1] ?? yearsRef.current);
    }, 80);

    window.setTimeout(() => {
      revealLockRef.current = false;
    }, 720);
  }

  function startJourney() {
    setJourneyStage("command");
    setVisibleYearCount(0);
    revealLockRef.current = true;

    window.setTimeout(() => {
      scrollBodyTo(commandRef.current);
    }, 80);

    window.setTimeout(() => {
      revealLockRef.current = false;
      lastScrollTopRef.current = bodyRef.current?.scrollTop ?? 0;
    }, 540);
  }

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const nextScrollTop = event.currentTarget.scrollTop;
    const scrollDelta = nextScrollTop - lastScrollTopRef.current;
    lastScrollTopRef.current = nextScrollTop;

    if (
      revealLockRef.current ||
      (journeyStage !== "command" && journeyStage !== "years") ||
      Math.abs(scrollDelta) < 24
    ) {
      return;
    }

    changeVisibleExperience(scrollDelta > 0 ? "show" : "hide");
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    event.stopPropagation();

    if (journeyStage !== "command" && journeyStage !== "years") {
      return;
    }

    if (event.deltaY > 8) {
      event.preventDefault();
      changeVisibleExperience("show");
    }

    if (event.deltaY < -8) {
      event.preventDefault();
      changeVisibleExperience("hide");
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartYRef.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (journeyStage !== "command" && journeyStage !== "years") {
      touchStartYRef.current = null;
      return;
    }

    const startY = touchStartYRef.current;
    const endY = event.changedTouches[0]?.clientY;
    touchStartYRef.current = null;

    if (startY === null || endY === undefined) {
      return;
    }

    const verticalSwipe = startY - endY;

    if (verticalSwipe > 36) {
      changeVisibleExperience("show");
    }

    if (verticalSwipe < -36) {
      changeVisibleExperience("hide");
    }
  }

  const hasCommandStarted = journeyStage === "command" || journeyStage === "years";
  const hasYearsLoaded = visibleYearCount > 0;
  const visibleEntries = entries.slice(0, visibleYearCount);

  return (
    <div
      className="career-journey-terminal overflow-hidden rounded-[1.4rem] border border-zinc-900 bg-black shadow-[10px_10px_0_#050505] dark:border-white/20"
      data-flow-reveal
      style={{
        display: "flex",
        flexDirection: "column",
        height: "clamp(460px, calc(100svh - 140px), 720px)",
        maxHeight: "720px",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-zinc-900 bg-[#1a1a1a] px-4 py-3 font-mono text-sm text-zinc-500 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
        </div>
        <span className="min-w-0 text-center font-semibold">
          vishwateja@root: ~/journey
        </span>
        <span aria-hidden="true" />
      </div>
      <div
        className="career-journey-body space-y-10 px-5 py-8 font-mono sm:px-8 lg:px-10"
        onScroll={handleScroll}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onWheel={handleWheel}
        ref={bodyRef}
        style={{
          background: "#000",
          flex: "1 1 0%",
          maxHeight: "100%",
          minHeight: 0,
          overflowY: "auto",
          overscrollBehavior: "contain",
          scrollBehavior: "smooth",
        }}
      >
        <div className="career-journey-hero">
          <p className="career-journey-preview">
            * Welcome to the <strong>My Career Journey</strong> research preview!
          </p>
          <CareerPixelTitle />
          <button
            className="career-login-line text-left"
            onClick={startJourney}
            type="button"
          >
            &gt; Login successful. Press scroll to continue
          </button>
        </div>

        <div
          className={`career-command-sequence space-y-4 border-t border-white/10 pt-8 ${
            hasCommandStarted ? "is-visible" : ""
          }`}
          ref={commandRef}
        >
          <p className="text-zinc-200">
            <span className="text-lime-300">vishwateja@root:~/journey$</span>{" "}
            <span className="font-semibold text-white">./run_time.sh</span>
          </p>
          <p className="text-zinc-700">
            Initializing journey sequence...{" "}
            <span className="text-zinc-600">OK.</span>
          </p>
          <p className="career-scroll-hint">
            &gt; Swipe up to load career year ranges. Swipe down to hide them.
          </p>
        </div>

        <div
          className={`space-y-6 ${hasYearsLoaded ? "" : "hidden"}`}
          ref={yearsRef}
        >
          {visibleEntries.map((job, index) => (
            <article
              className="career-year-entry grid gap-6 rounded-lg border border-white/10 bg-black p-5 shadow-2xl shadow-black/20 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.62fr)]"
              data-flow-reveal
              key={`${job.role}-${job.period}`}
              ref={(element) => {
                yearEntryRefs.current[index] = element;
              }}
            >
              <div>
                <p className="text-sm leading-6 text-zinc-400">
                  <span className="text-lime-300">vishwateja@root:~/journey$</span>{" "}
                  <span className="text-amber-300">
                    load_year --range {job.journeyRange}
                  </span>
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-sky-400">
                  [!] {job.role}
                </h3>
                <p className="mt-4 font-sans text-sm leading-7 text-zinc-400">
                  {job.points[0]}
                </p>
                <p className="mt-5 text-sm font-semibold text-amber-700">
                  &gt; Status: {job.journeyStatus}
                </p>
              </div>
              <div className="career-entry-side">
                <p className="text-sm font-semibold text-zinc-400">
                  {job.period}
                </p>
                <p className="mt-2 text-base font-semibold text-zinc-200">
                  {job.company}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      className="rounded-md bg-zinc-950 px-2.5 py-1 text-xs font-semibold text-zinc-300 transition-colors duration-500 hover:bg-lime-300 hover:text-zinc-950"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasYearsLoaded ? <p className="text-lg font-semibold text-lime-300">_</p> : null}
      </div>
    </div>
  );
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects],
  );

  return (
    <div>
      <div className="selected-work-terminal-heading mt-10" data-flow-reveal>
        <span className="text-zinc-500 dark:text-zinc-400">#</span>{" "}
        <span>How May </span>
        <strong>I Help You</strong>
        <span className="selected-work-cursor" aria-hidden="true" />
      </div>
      <div
        aria-label="Project category"
        className="mt-8 flex flex-wrap gap-2"
        data-flow-reveal
        role="tablist"
      >
        {categoryLabels.map((category) => (
          <button
            aria-selected={activeCategory === category}
            className={`project-filter-button float-button rounded-md border px-4 py-2 text-sm font-semibold ${
              activeCategory === category
                ? "is-active border-amber-300 bg-zinc-950 text-white shadow-lg shadow-amber-500/20 dark:border-amber-300 dark:bg-amber-300 dark:text-zinc-950"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-amber-300 hover:text-zinc-950 dark:border-white/10 dark:bg-white/10 dark:text-zinc-300 dark:hover:border-amber-300/50 dark:hover:text-white"
            }`}
            key={category}
            onClick={() => setActiveCategory(category)}
            role="tab"
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div
        className="selected-work-terminal mt-6 overflow-hidden border-2 border-zinc-950 bg-zinc-950 shadow-[10px_10px_0_#050505] dark:border-white/20"
        data-flow-reveal
      >
        <div className="flex items-center justify-between gap-4 border-b-2 border-zinc-950 bg-zinc-200 px-4 py-3 font-mono text-sm text-zinc-500 dark:border-white/20 dark:bg-zinc-800 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>
          <span className="font-semibold">projects.sh - 80x24</span>
          <span className="hidden sm:block">aws-devops</span>
        </div>
        <div className="grid md:grid-cols-2">
          {filteredProjects.map((project) => {
            const presentation =
              projectPresentation[project.category] ??
              projectPresentation.Reliability;

            return (
              <article
                className="selected-work-card flow-in-card group relative block min-h-[360px] overflow-hidden border-zinc-950 p-6 text-zinc-950 outline-none md:min-h-[420px] md:border-r md:border-t dark:border-white/20"
                data-flow-reveal
                key={project.title}
              >
                <span
                  aria-hidden="true"
                  className={`selected-work-card-visual ${presentation.visual}`}
                />
                <span className="selected-work-card-overlay" aria-hidden="true" />
                <span className="relative z-10 inline-flex bg-zinc-950/58 px-3 py-2 font-mono text-sm font-semibold text-lime-300 backdrop-blur-sm transition-colors duration-500 group-hover:bg-zinc-950/75 group-focus-visible:bg-zinc-950/75">
                  &gt; {presentation.command}
                </span>
                <h3 className="relative z-10 mt-6 max-w-xl font-mono text-3xl font-semibold leading-tight tracking-normal text-zinc-950 transition-colors duration-500 group-hover:text-white group-focus-visible:text-white dark:text-white md:text-4xl">
                  {project.title}
                </h3>
                <p className="relative z-10 mt-5 max-w-2xl font-mono text-lg font-semibold leading-8 text-zinc-700 transition-colors duration-500 group-hover:text-zinc-100 group-focus-visible:text-zinc-100 dark:text-zinc-200">
                  {project.outcome}
                </p>
                <p className="relative z-10 mt-4 max-w-2xl text-sm leading-6 text-zinc-700 transition-colors duration-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200 dark:text-zinc-300">
                  {project.details}
                </p>
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      className="rounded-md bg-white/70 px-2.5 py-1 text-xs font-semibold text-zinc-800 backdrop-blur-sm transition-colors duration-500 group-hover:bg-lime-300 group-hover:text-zinc-950 group-focus-visible:bg-lime-300 group-focus-visible:text-zinc-950 dark:bg-zinc-950/50 dark:text-zinc-200"
                      key={service}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {filteredProjects.length === 0 ? (
        <div className="mt-6 rounded-md border border-zinc-200 bg-white p-5 text-sm font-semibold text-zinc-600 dark:border-white/10 dark:bg-white/10 dark:text-zinc-300">
          No project cards found for this category.
        </div>
      ) : null}
    </div>
  );
}

type ContactStatus = {
  message: string;
  type: "idle" | "success" | "error";
};

function ContactActionIcon({ type }: { type: "copy" | "github" | "linkedin" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
      {type === "copy" ? (
        <>
          <rect x="7" y="5" width="9" height="11" rx="2" {...common} />
          <path d="M4 12V6a2 2 0 0 1 2-2h7" {...common} />
        </>
      ) : null}
      {type === "linkedin" ? (
        <>
          <rect x="3.5" y="3.5" width="13" height="13" rx="2" {...common} />
          <path d="M7 9v5M7 6.5v.1M10 14v-3.1c0-1.2.8-2 1.8-2 1.1 0 1.7.8 1.7 2V14M10 9v5" {...common} />
        </>
      ) : null}
      {type === "github" ? (
        <>
          <path d="M10 3.5a6.5 6.5 0 0 0-2 12.7c.3.1.4-.1.4-.3v-1.5c-1.8.4-2.2-.7-2.2-.7-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.7 0 1 .7 1 .7.6 1 1.5.7 1.9.5.1-.4.2-.7.4-.9-1.4-.2-2.9-.7-2.9-3.1 0-.7.2-1.2.7-1.7-.1-.2-.3-.8.1-1.7 0 0 .6-.2 1.8.7A6.3 6.3 0 0 1 10 6.7c.6 0 1.1.1 1.6.2 1.2-.9 1.8-.7 1.8-.7.4.9.2 1.5.1 1.7.4.5.7 1 .7 1.7 0 2.4-1.5 2.9-2.9 3.1.2.2.4.6.4 1.2v1.8c0 .2.1.4.4.3A6.5 6.5 0 0 0 10 3.5Z" {...common} />
        </>
      ) : null}
    </svg>
  );
}

export function ContactForm({
  email,
  github,
  linkedin,
}: {
  email: string;
  github: string;
  linkedin: string;
}) {
  const [status, setStatus] = useState<ContactStatus>({
    message: "",
    type: "idle",
  });

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus({
        message: "Email copied. You can paste it into your preferred email client.",
        type: "success",
      });
    } catch {
      setStatus({
        message: "Copy failed. Use the direct email link instead.",
        type: "error",
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus({
        message: "Please complete the required fields with valid details.",
        type: "error",
      });
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const visitorEmail = String(formData.get("email") ?? "").trim();
    const messageType = String(formData.get("messageType") ?? "").trim();
    const githubUrl = String(formData.get("githubUrl") ?? "").trim();
    const linkedinUrl = String(formData.get("linkedinUrl") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio contact: ${messageType}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone number: ${phone}`,
        `Email: ${visitorEmail}`,
        `Message type: ${messageType}`,
        `GitHub URL: ${githubUrl}`,
        `LinkedIn URL: ${linkedinUrl}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    setStatus({
      message: "Email draft opened. Review and send it from your email client.",
      type: "success",
    });

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 dark:border-white/10 dark:bg-[#080b12] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-amber-300 dark:focus:ring-amber-300/20";

  return (
    <form
      className="float-card rounded-lg border border-white/10 bg-white p-4 text-zinc-950 shadow-2xl shadow-black/20 dark:bg-white/10 dark:text-white"
      data-flow-reveal
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="mb-4 rounded-lg border border-zinc-200 bg-[#f6f7f9] p-4 dark:border-white/10 dark:bg-[#080b12]">
        <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
          Send a message
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Share your role, project, or referral context and the best links to
          review.
        </p>
        <div className="mt-4 flex gap-2">
          <button
            aria-label="Copy email"
            className="float-button inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-800 hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100"
            onClick={handleCopyEmail}
            type="button"
          >
            <ContactActionIcon type="copy" />
          </button>
          <a
            aria-label="Open LinkedIn"
            className="float-button inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-800 hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100"
            href={linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <ContactActionIcon type="linkedin" />
          </a>
          <a
            aria-label="Open GitHub"
            className="float-button inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-800 hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:border-white/10 dark:bg-white/10 dark:text-zinc-100"
            href={github}
            rel="noreferrer"
            target="_blank"
          >
            <ContactActionIcon type="github" />
          </a>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="float-field rounded-lg" htmlFor="contact-name">
          <span className="mb-2 block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            Name
          </span>
          <input
            className={inputClass}
            id="contact-name"
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>
        <label className="float-field rounded-lg" htmlFor="contact-phone">
          <span className="mb-2 block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            Phone number
          </span>
          <input
            className={inputClass}
            id="contact-phone"
            name="phone"
            placeholder="+91 00000 00000"
            required
            type="tel"
          />
        </label>
        <label className="float-field rounded-lg" htmlFor="contact-email">
          <span className="mb-2 block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            Email
          </span>
          <input
            className={inputClass}
            id="contact-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
        <label className="float-field rounded-lg" htmlFor="contact-type">
          <span className="mb-2 block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            Message type
          </span>
          <select
            className={inputClass}
            defaultValue=""
            id="contact-type"
            name="messageType"
            required
          >
            <option disabled value="">
              Select message type
            </option>
            <option>AWS DevOps role</option>
            <option>Freelance project</option>
            <option>Cloud automation help</option>
            <option>Referral</option>
            <option>General message</option>
          </select>
        </label>
        <label className="float-field rounded-lg" htmlFor="contact-github">
          <span className="mb-2 block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            GitHub URL
          </span>
          <input
            className={inputClass}
            id="contact-github"
            name="githubUrl"
            placeholder="https://github.com/..."
            required
            type="url"
          />
        </label>
        <label className="float-field rounded-lg" htmlFor="contact-linkedin">
          <span className="mb-2 block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            LinkedIn URL
          </span>
          <input
            className={inputClass}
            id="contact-linkedin"
            name="linkedinUrl"
            placeholder="https://linkedin.com/in/..."
            required
            type="url"
          />
        </label>
      </div>
      <label className="float-field mt-3 block rounded-lg" htmlFor="contact-message">
        <span className="mb-2 block text-sm font-semibold text-zinc-700 dark:text-zinc-200">
          Message
        </span>
        <textarea
          className={`${inputClass} min-h-32 resize-y`}
          id="contact-message"
          name="message"
          placeholder="Write your message..."
          required
        />
      </label>
      <button
        className="float-button mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
        type="submit"
      >
        Send message
      </button>
      {status.message ? (
        <p
          className={`mt-3 rounded-md border px-4 py-3 text-sm font-semibold ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-200"
              : "border-red-200 bg-red-50 text-red-800 dark:border-red-300/20 dark:bg-red-300/10 dark:text-red-200"
          }`}
          role="status"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
