import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeInOnScroll
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-text-secondary">{subtitle}</p>
      )}
    </FadeInOnScroll>
  );
}
