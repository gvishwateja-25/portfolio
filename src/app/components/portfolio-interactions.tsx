"use client";

import type {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import { useEffect, useRef, useState } from "react";

/* ============================================
   TYPING SUBTITLE
   Rotates through multiple role strings
   ============================================ */
const typingRoles = [
  "AWS DevOps Engineer",
  "Cloud Infrastructure Specialist",
  "CI/CD Automation Expert",
  "Infrastructure as Code Practitioner",
  "Production Reliability Engineer",
];

export function TypingSubtitle() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingRoles[roleIndex];
    const speed = isDeleting ? 35 : 65;

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    const timer = setTimeout(() => {
      if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        return;
      }

      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="hero-subtitle">
      {displayed}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}

/* ============================================
   SKILL PROGRESS BAR
   Animates fill width on scroll into view
   ============================================ */
export function SkillProgressBar({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const element = barRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-bar-wrap" ref={barRef}>
      <div className="skill-bar-label">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${isAnimated ? "is-animated" : ""}`}
          style={{ "--bar-width": `${percentage}%`, transform: isAnimated ? `scaleX(${percentage / 100})` : "scaleX(0)" } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

/* ============================================
   ANIMATED COUNTER
   Counts from 0 to target value on scroll
   ============================================ */
export function AnimatedCounter({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1800;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [hasStarted, target]);

  return (
    <div className="stat-card" ref={ref} data-flow-reveal>
      <p className="stat-number">
        {count}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

/* ============================================
   VISITOR COUNTER
   localStorage-based visit counter
   ============================================ */
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
    <span className="inline-flex items-center gap-2 text-sm text-zinc-400">
      <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgb(16_185_129_/_0.6)]" />
      Visitors: {visitCount === null ? "--" : visitCount.toLocaleString("en-IN")}
    </span>
  );
}

/* ============================================
   RESUME DOWNLOAD LINK
   Simple download with optional name gate
   ============================================ */
type ResumeDownloadLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "download" | "href" | "onClick"
> & {
  children: ReactNode;
  href: string;
};

export function ResumeDownloadLink({
  children,
  href,
  ...props
}: ResumeDownloadLinkProps) {
  return (
    <a {...props} href={href} download="vishwateja-gorumanthula-resume.pdf">
      {children}
    </a>
  );
}

/* ============================================
   MOBILE NAV TOGGLE
   ============================================ */
export function MobileNavToggle({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Toggle navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? (
            <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          )}
        </svg>
      </button>
      {isOpen ? (
        <div className="mobile-nav-panel absolute left-0 right-0 top-full border-b border-white/10 backdrop-blur-xl p-5 lg:hidden">
          <nav className="flex flex-col gap-4" onClick={() => setIsOpen(false)}>
            {children}
          </nav>
        </div>
      ) : null}
    </>
  );
}
