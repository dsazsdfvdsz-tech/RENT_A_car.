"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whatsappLink } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppIcon } from "@/components/ui/icons";

/**
 * Persistent WhatsApp call-to-action. Pulses a few times to draw the eye,
 * then settles. Sits above the mobile bottom nav.
 */
export function FloatingWhatsApp() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${siteConfig.contact.whatsapp}`}
      className="fixed bottom-[5.5rem] right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg lg:bottom-6 lg:right-6"
      initial={reduce ? undefined : { scale: 0.9, opacity: 0 }}
      animate={
        reduce
          ? undefined
          : {
              scale: [1, 1.1, 1],
              opacity: 1,
              boxShadow: [
                "0 8px 24px rgba(37,211,102,0.35)",
                "0 8px 36px rgba(37,211,102,0.65)",
                "0 8px 24px rgba(37,211,102,0.35)",
              ],
            }
      }
      transition={
        reduce
          ? undefined
          : {
              duration: 1.6,
              repeat: 3,
              repeatType: "loop",
              ease: "easeInOut",
            }
      }
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
