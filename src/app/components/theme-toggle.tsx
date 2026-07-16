"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

function getActiveTheme(): Theme {
  const storedTheme = localStorage.getItem("theme");

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
      aria-pressed={isDark}
      aria-label="Toggle light and dark theme"
      className="theme-bulb-toggle group relative inline-flex h-10 w-10 items-start justify-center rounded-md border border-zinc-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:border-white/10 dark:bg-white/10 dark:focus:ring-offset-zinc-950"
      onClick={() => {
        const nextTheme: Theme = getActiveTheme() === "dark" ? "light" : "dark";

        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      type="button"
    >
      <span className="absolute left-1/2 top-1.5 h-4 w-0.5 -translate-x-1/2 rounded-full bg-zinc-500 dark:bg-zinc-400" />
      <span className="absolute left-1/2 top-[22px] h-1.5 w-4 -translate-x-1/2 rounded-t-full bg-amber-200 dark:bg-amber-300" />
      <span
        className="theme-bulb-glow absolute left-1/2 top-[26px] h-5 w-5 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(251,191,36,0.5)] dark:bg-amber-200 dark:shadow-[0_0_22px_rgba(251,191,36,0.8)]"
        aria-hidden="true"
      >
        <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full border-b-2 border-r-2 border-white/75" />
      </span>
    </button>
  );
}
