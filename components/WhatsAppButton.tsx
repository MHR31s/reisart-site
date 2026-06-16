"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5519991392850"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="
        fixed
        right-6
        bottom-24
        md:bottom-6
        z-50
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        text-white
        flex
        items-center
        justify-center
        shadow-[0_12px_35px_rgba(37,211,102,0.45)]
        hover:scale-110
        hover:shadow-[0_16px_45px_rgba(37,211,102,0.55)]
        transition-all
        duration-300
      "
    >
      <MessageCircle size={30} />
    </a>
  );
}