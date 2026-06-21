"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";
import { trackMetaEvent } from "@/lib/meta-pixel";

type MetaPageEventProps = {
  eventName: string;
  params?: Record<string, unknown>;
};

export default function MetaPageEvent({
  eventName,
  params,
}: MetaPageEventProps) {
  useEffect(() => {
    trackEvent(eventName, params);
    trackMetaEvent(eventName, params);
  }, [eventName, params]);

  return null;
}
