import { trackEvent } from "@/lib/gtag";
import { trackMetaEvent } from "@/lib/meta-pixel";

type ConversionParams = Record<string, unknown>;

export const trackContactConversion = (params?: ConversionParams) => {
  trackMetaEvent("Contact", params);
  trackEvent("contact", params);
};

export const trackLeadConversion = (params?: ConversionParams) => {
  trackMetaEvent("Lead", params);
  trackEvent("generate_lead", params);
};

export const trackViewContentConversion = (params?: ConversionParams) => {
  trackMetaEvent("ViewContent", params);
};
