import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-bg-card p-6 shadow-[var(--card-shadow)] sm:p-7">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-0.5"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < testimonial.rating
                  ? "fill-gold text-gold"
                  : "fill-transparent text-border",
              )}
            />
          ))}
        </div>
        <Quote className="h-8 w-8 text-gold/25" aria-hidden="true" />
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
        “{testimonial.text}”
      </blockquote>

      <figcaption className="mt-5 border-t border-border pt-4">
        <p className="font-heading font-semibold text-text-primary">
          {testimonial.name}
        </p>
        <p className="text-xs text-text-muted">{testimonial.trip}</p>
      </figcaption>
    </figure>
  );
}
