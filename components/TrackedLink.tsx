"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackMetaEvent } from "@/lib/meta-pixel";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  eventParams?: Record<string, unknown>;
  events?: Array<{
    name: string;
    params?: Record<string, unknown>;
  }>;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
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
    if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
      trackMetaEvent("Lead", {
        content_name: "whatsapp_click",
        location: eventParams?.location,
      });
    }

    if (events?.length) {
      events.forEach((event) => {
        trackEvent(event.name, event.params);
      });
      return;
    }

    trackEvent(eventName, eventParams);
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
