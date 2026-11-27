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
      className="theme-toggle theme-mode-switch shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4"
      data-mode={theme}
      onClick={() => {
        const nextTheme: Theme = getActiveTheme() === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      type="button"
    >
      <span className="theme-mode-thumb" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {isDark ? (
            <path d="M20.8 15.3A9 9 0 0 1 8.7 3.2a9 9 0 1 0 12.1 12.1Z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
            </>
          )}
        </svg>
      </span>
    </button>
  );
}
