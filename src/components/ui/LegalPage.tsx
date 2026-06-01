import { siteConfig } from "@/data/siteConfig";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-bg-primary">
      <header className="border-b border-border bg-bg-secondary px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-text-primary">{title}</h1>
          <p className="mt-3 text-sm text-text-muted">
            Last updated: January 2026 · {siteConfig.businessName}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {intro && <p className="mb-8 text-text-secondary">{intro}</p>}
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                {section.heading}
              </h2>
              <ul className="mt-3 space-y-2">
                {section.body.map((line, i) => (
                  <li key={i} className="flex gap-2 text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
