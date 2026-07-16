"use client";

import { useEffect } from "react";

export function FlowMotion() {
  useEffect(() => {
    document.documentElement.classList.add("flow-motion-ready");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = new WeakSet<Element>();
    const timers = new Set<number>();

    if (reducedMotion) {
      document
        .querySelectorAll("[data-flow-reveal]")
        .forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.16,
      },
    );

    function observeRevealTargets() {
      document.querySelectorAll<HTMLElement>("[data-flow-reveal]").forEach((element, index) => {
        if (elements.has(element)) {
          return;
        }

        element.style.setProperty("--flow-delay", `${Math.min((index % 8) * 70, 420)}ms`);
        elements.add(element);
        observer.observe(element);
      });
    }

    observeRevealTargets();

    const mutationObserver = new MutationObserver(observeRevealTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    function handlePointerDown(event: PointerEvent) {
      const eventTarget = event.target;

      if (!(eventTarget instanceof Element)) {
        return;
      }

      const target = eventTarget.closest(
        ".float-button, .float-card, .float-field, a[href], button, [role='tab']",
      ) as HTMLElement | null;

      if (!target || target.hasAttribute("disabled") || target.getAttribute("aria-disabled") === "true") {
        return;
      }

      const rect = target.getBoundingClientRect();
      const size = Math.min(Math.max(rect.width, rect.height) * 1.85, 520);
      const ripple = document.createElement("span");

      ripple.className = "flow-click-ripple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

      target.classList.add("flow-click-host", "flow-clicking");
      target.append(ripple);

      const timer = window.setTimeout(() => {
        ripple.remove();
        target.classList.remove("flow-clicking");

        if (!target.querySelector(".flow-click-ripple")) {
          target.classList.remove("flow-click-host");
        }

        timers.delete(timer);
      }, 980);

      timers.add(timer);
    }

    document.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      mutationObserver.disconnect();
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return null;
}
