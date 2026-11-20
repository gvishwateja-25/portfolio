"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // The selection still applies when browser storage is unavailable.
  }
}

function getActiveTheme(): Theme {
  let storedTheme: string | null = null;
  try {
    storedTheme = localStorage.getItem("theme");
  } catch {
    // Fall back to the current document theme.
  }

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return document.documentElement.classList.contains("dark") ||
    document.documentElement.dataset.theme === "dark"
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const syncTimer = window.setTimeout(() => {
      const activeTheme = getActiveTheme();

      applyTheme(activeTheme);
      setTheme(activeTheme);
    }, 0);

    return () => window.clearTimeout(syncTimer);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="theme-toggle inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-400/40 text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
      onClick={() => {
        const nextTheme: Theme = getActiveTheme() === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      type="button"
    >
      <svg className="theme-core h-5 w-5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m16 3 11.25 6.5v13L16 29 4.75 22.5v-13Z" strokeOpacity="0.6" />
        <circle cx="16" cy="16" r="6.5" strokeWidth="1.5" />
        <path d="M16 9.5a6.5 6.5 0 0 0 0 13Z" fill="currentColor" stroke="none" />
        <path d="M16 9.5a6.5 6.5 0 0 1 0 13Z" fill="currentColor" fillOpacity="0.12" stroke="none" />
        <path d="M16 3v3m0 20v3M4.75 22.5l2.6-1.5m17.3-10 2.6-1.5" />
        <circle cx="27.25" cy="9.5" r="2" fill="currentColor" stroke="none" />
      </svg>
    </button>
  );
}
