"use client";

import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Mail } from "lucide-react";
import { cn, contactFormLink, contactFormMailto } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

const schema = z.object({
  name: z.string().min(2, "Please enter your name (min 2 characters)"),
  phone: z
    .string()
    .refine(
      (v) => /^(?:\+?92|0)?3\d{9}$/.test(v.replace(/[\s-]/g, "")),
      "Enter a valid Pakistan mobile number (e.g. 0310 1404545)",
    ),
  trip: z.string().min(10, "Tell us a bit more about your trip (min 10 characters)"),
  date: z.string().min(1, "Please add a preferred date"),
});

type FormValues = z.infer<typeof schema>;

const fields = [
  { name: "name", label: "Full Name", type: "text", autoComplete: "name", inputMode: undefined },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", inputMode: "tel" as const },
  { name: "date", label: "Preferred Date (e.g. 15 June 2026)", type: "text", autoComplete: "off", inputMode: undefined },
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => {
    setSubmitted(data);
    if (typeof window !== "undefined") {
      window.open(contactFormLink(data), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {fields.map((field) => (
        <FloatingField
          key={field.name}
          id={field.name}
          label={field.label}
          type={field.type}
          autoComplete={field.autoComplete}
          inputMode={field.inputMode}
          error={errors[field.name]?.message}
          {...register(field.name)}
        />
      ))}

      {/* Trip details textarea */}
      <div>
        <div className="relative">
          <textarea
            id="trip"
            rows={4}
            placeholder=" "
            aria-invalid={!!errors.trip}
            className={cn(
              "peer w-full resize-none rounded-xl border bg-bg-secondary px-4 pb-2 pt-6 text-text-primary outline-none transition-colors placeholder:text-transparent focus:border-gold",
              errors.trip ? "border-red-500" : "border-border",
            )}
            {...register("trip")}
          />
          <label
            htmlFor="trip"
            className="pointer-events-none absolute left-4 top-4 origin-left text-text-muted transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
          >
            Trip Details
          </label>
        </div>
        {errors.trip && (
          <p role="alert" className="mt-1.5 text-sm text-red-500">
            {errors.trip.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="glass-whatsapp glass-sheen inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold disabled:opacity-60"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send Inquiry via WhatsApp
      </button>

      {submitted && (
        <div
          role="status"
          className="flex flex-col gap-2 rounded-xl border border-whatsapp/30 bg-whatsapp/10 p-4 text-sm"
        >
          <p className="flex items-center gap-2 font-medium text-text-primary">
            <CheckCircle2 className="h-5 w-5 text-whatsapp" />
            WhatsApp should have opened in a new tab.
          </p>
          <p className="text-text-secondary">
            Didn&apos;t open?{" "}
            <a
              href={contactFormLink(submitted)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-whatsapp underline"
            >
              Tap here to chat
            </a>{" "}
            or{" "}
            <a
              href={contactFormMailto(submitted)}
              className="inline-flex items-center gap-1 font-semibold text-gold underline"
            >
              <Mail className="h-3.5 w-3.5" /> email us instead
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}

interface FloatingFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

/** Text input with a floating label + inline error. Forwards the RHF ref. */
const FloatingField = forwardRef<HTMLInputElement, FloatingFieldProps>(
  function FloatingField({ id, label, error, className, ...rest }, ref) {
    return (
      <div>
        <div className="relative">
          <input
            id={id}
            ref={ref}
            placeholder=" "
            aria-invalid={!!error}
            className={cn(
              "peer w-full rounded-xl border bg-bg-secondary px-4 pb-2 pt-6 text-text-primary outline-none transition-colors placeholder:text-transparent focus:border-gold",
              error ? "border-red-500" : "border-border",
              className,
            )}
            {...rest}
          />
          <label
            htmlFor={id}
            className="pointer-events-none absolute left-4 top-4 origin-left text-text-muted transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {label}
          </label>
        </div>
        {error && (
          <p role="alert" className="mt-1.5 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  },
);
