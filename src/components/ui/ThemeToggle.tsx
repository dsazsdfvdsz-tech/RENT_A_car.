"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

/* Sun / Moon icons from the Apple liquid-glass switcher template */
function SunIcon() {
  return (
    <svg className="h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17 6.038a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0v-3ZM24.244 7.742a1 1 0 1 1 1.618 1.176L24.1 11.345a1 1 0 1 1-1.618-1.176l1.763-2.427ZM29.104 13.379a1 1 0 0 1 .618 1.902l-2.854.927a1 1 0 1 1-.618-1.902l2.854-.927ZM29.722 20.795a1 1 0 0 1-.619 1.902l-2.853-.927a1 1 0 1 1 .618-1.902l2.854.927ZM25.862 27.159a1 1 0 0 1-1.618 1.175l-1.763-2.427a1 1 0 1 1 1.618-1.175l1.763 2.427ZM19 30.038a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0v3ZM11.755 28.334a1 1 0 0 1-1.618-1.175l1.764-2.427a1 1 0 1 1 1.618 1.175l-1.764 2.427ZM6.896 22.697a1 1 0 1 1-.618-1.902l2.853-.927a1 1 0 1 1 .618 1.902l-2.853.927ZM6.278 15.28a1 1 0 1 1 .618-1.901l2.853.927a1 1 0 1 1-.618 1.902l-2.853-.927ZM10.137 8.918a1 1 0 0 1 1.618-1.176l1.764 2.427a1 1 0 0 1-1.618 1.176l-1.764-2.427Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.5 8.473a10.968 10.968 0 0 1 8.785-.97 7.435 7.435 0 0 0-3.737 4.672l-.09.373A7.454 7.454 0 0 0 28.732 20.4a10.97 10.97 0 0 1-5.232 7.125l-.497.27c-5.014 2.566-11.175.916-14.234-3.813l-.295-.483C5.53 18.403 7.13 11.93 12.017 8.77l.483-.297Zm4.234.616a8.946 8.946 0 0 0-2.805.883l-.429.234A9 9 0 0 0 10.206 22.5l.241.395A9 9 0 0 0 22.5 25.794l.416-.255a8.94 8.94 0 0 0 2.167-1.99 9.433 9.433 0 0 1-2.782-.313c-5.043-1.352-8.036-6.535-6.686-11.578l.147-.491c.242-.745.573-1.44.972-2.078Z"
      />
    </svg>
  );
}

/**
 * Liquid-glass segmented theme switcher (light | dark) with a sliding
 * accent highlight, styled after the Apple liquid-glass switcher template.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const select = (target: "light" | "dark") => {
    if (target !== theme) toggleTheme();
  };

  return (
    <div
      role="group"
      aria-label="Theme switcher"
      className={cn(
        "glass glass-sheen relative inline-flex items-center gap-1 rounded-full p-1",
        className,
      )}
    >
      {/* Sliding accent highlight */}
      <span
        aria-hidden="true"
        className="glass-gold pointer-events-none absolute left-1 top-1 h-8 w-8 rounded-full transition-transform duration-300 ease-out"
        style={{ transform: isDark ? "translateX(2.25rem)" : "translateX(0)" }}
      />

      <button
        type="button"
        onClick={() => select("light")}
        aria-pressed={!isDark}
        aria-label="Light mode"
        className={cn(
          "relative z-10 grid h-8 w-8 place-items-center rounded-full transition-colors",
          !isDark ? "text-white" : "text-text-muted hover:text-text-secondary",
        )}
      >
        <SunIcon />
      </button>

      <button
        type="button"
        onClick={() => select("dark")}
        aria-pressed={isDark}
        aria-label="Dark mode"
        className={cn(
          "relative z-10 grid h-8 w-8 place-items-center rounded-full transition-colors",
          isDark ? "text-white" : "text-text-muted hover:text-text-secondary",
        )}
      >
        <MoonIcon />
      </button>
    </div>
  );
}
