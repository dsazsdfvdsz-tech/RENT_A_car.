"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { siteConfig } from "./site.config";

/**
 * Glassmorphic floating navbar. Reads links and brand from `site.config.ts`.
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { brandName, nav } = siteConfig;

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-full max-w-6xl -translate-x-1/2 px-4 sm:px-6">
      <div className="rounded-full border border-white/20 bg-white/60 px-6 py-2 shadow-lg backdrop-blur-xl">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <Logo className="h-9 w-9" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-xl font-bold text-transparent">
              {brandName}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center space-x-1 md:flex">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-white/50 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop auth */}
          <div className="hidden items-center space-x-2 md:flex">
            <a
              href={nav.signIn.href}
              className="rounded-full px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-white/50"
            >
              {nav.signIn.label}
            </a>
            <a
              href={nav.primaryCta.href}
              className="rounded-full bg-blue-600 px-5 py-2 font-medium text-white shadow-md transition-colors hover:bg-blue-700"
            >
              {nav.primaryCta.label}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-full bg-white/50 p-2 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-3">
              {nav.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-white hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 border-t border-gray-200 pt-3">
                <a
                  href={nav.signIn.href}
                  className="rounded-lg bg-white/50 px-4 py-3 text-center font-medium text-gray-700"
                >
                  {nav.signIn.label}
                </a>
                <a
                  href={nav.primaryCta.href}
                  className="rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white shadow-md"
                >
                  {nav.primaryCta.label}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
