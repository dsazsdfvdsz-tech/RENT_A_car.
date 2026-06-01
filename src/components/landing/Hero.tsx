import { Navbar } from "./Navbar";
import { Plasma } from "./Plasma";
import { siteConfig } from "./site.config";

/**
 * Landing hero section: glassmorphic navbar over an animated plasma background,
 * with car-rental headline, CTAs and key stats. Content comes from
 * `site.config.ts`.
 */
export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Navbar />

      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <Plasma
          color="#2563eb"
          speed={0.5}
          direction="forward"
          scale={1.2}
          opacity={0.15}
          mouseInteractive
        />
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-52 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {hero.badge}
        </div>

        {/* Headline */}
        <h1 className="pb-4 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
          {hero.titleLead}
          <span className="mt-2 block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text pb-2 text-transparent">
            {hero.titleHighlight}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">{hero.subtitle}</p>

        {/* CTAs */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="transform rounded-lg bg-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-colors duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="flex items-center rounded-lg border border-gray-300 bg-white px-8 py-4 font-medium text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            {hero.secondaryCta.label}
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative floating accents */}
      <div className="absolute left-10 top-1/4 h-6 w-6 rounded-full bg-blue-200/40 blur-xl" />
      <div className="absolute bottom-1/3 right-16 h-10 w-10 rounded-full bg-cyan-200/30 blur-xl" />
      <div className="absolute right-1/4 top-1/3 h-8 w-8 rounded-full bg-sky-200/40 blur-xl" />
    </section>
  );
}

export default Hero;
