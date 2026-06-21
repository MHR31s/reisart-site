"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/gtag";
import {
  trackContactConversion,
  trackLeadConversion,
} from "@/lib/conversions";

type TrackedEvent = {
  name: string;
  params?: Record<string, unknown>;
};

type TrackedLinkProps = {
  href: string;
  eventName: string;
  eventParams?: Record<string, unknown>;
  events?: TrackedEvent[];
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

const leadEventNames = new Set([
  "diagnostico_click",
  "lead_diagnostico",
  "plano_click",
  "generate_lead",
]);

const ignoredLegacyEventNames = new Set(["whatsapp_click"]);

const isWhatsAppUrl = (href: string) =>
  href.includes("wa.me") || href.includes("api.whatsapp.com");

const hasLeadIntent = (
  eventName: string,
  events?: TrackedEvent[],
  children?: ReactNode,
) => {
  if (leadEventNames.has(eventName)) {
    return true;
  }

  if (events?.some((event) => leadEventNames.has(event.name))) {
    return true;
  }

  const text = typeof children === "string" ? children.toLowerCase() : "";

  return (
    text.includes("diagnóstico") ||
    text.includes("diagnostico") ||
    text.includes("proposta") ||
    text.includes("crescer minha empresa")
  );
};

export default function TrackedLink({
  href,
  eventName,
  eventParams,
  events,
  children,
  className,
  target,
  rel,
  ariaLabel,
}: TrackedLinkProps) {
  const handleClick = () => {
    if (isWhatsAppUrl(href)) {
      trackContactConversion({
        content_name: "whatsapp_click",
        location: eventParams?.location,
      });
    }

    if (hasLeadIntent(eventName, events, children)) {
      trackLeadConversion({
        content_name: "lead_cta",
        source: eventParams?.source,
        location: eventParams?.location,
      });
    }

    if (events?.length) {
      events.forEach((event) => {
        if (
          leadEventNames.has(event.name) ||
          ignoredLegacyEventNames.has(event.name)
        ) {
          return;
        }

        trackEvent(event.name, event.params);
      });
      return;
    }

    if (
      !leadEventNames.has(eventName) &&
      !ignoredLegacyEventNames.has(eventName)
    ) {
      trackEvent(eventName, eventParams);
    }
  };

  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={className}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
