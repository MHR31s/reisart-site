"use client";

import { useEffect } from "react";
import { trackViewContentConversion } from "@/lib/conversions";

type MetaPageEventProps = {
  eventName: string;
  params?: Record<string, unknown>;
};

export default function MetaPageEvent({
  eventName,
  params,
}: MetaPageEventProps) {
  useEffect(() => {
    if (eventName === "ViewContent") {
      trackViewContentConversion(params);
    }
  }, [eventName, params]);

  return null;
}
