"use client";

import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import { trackEvent } from "@/lib/gtag";

const VIDEO_TITULO = "Reisart Marketing Digital — do invisível ao inevitável";

function Player({
  formato,
  className,
}: {
  formato: "16x9" | "9x16";
  className: string;
}) {
  const jaTocou = useRef(false);

  return (
    <video
      className={className}
      controls
      playsInline
      preload="none"
      poster={`/video/reisart-apresentacao-${formato}.jpg`}
      aria-label={VIDEO_TITULO}
      onPlay={() => {
        if (jaTocou.current) return;
        jaTocou.current = true;
        trackEvent("video_play", { video_title: VIDEO_TITULO, formato });
      }}
      onEnded={() =>
        trackEvent("video_complete", { video_title: VIDEO_TITULO, formato })
      }
    >
      <source src={`/video/reisart-apresentacao-${formato}.mp4`} type="video/mp4" />
      <track
        src="/video/reisart-apresentacao.pt-BR.vtt"
        kind="captions"
        srcLang="pt-BR"
        label="Português"
      />
      Seu navegador não suporta vídeo.
    </video>
  );
}

export default function VideoApresentacao() {
  return (
    <section
      id="apresentacao"
      className="relative overflow-hidden bg-[#05070D] px-6 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(33,68,255,0.22)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center">Conheça a Reisart</p>
          <h2 className="display mt-5 text-4xl text-white md:text-6xl">
            Do invisível ao <span className="gradient-text">inevitável</span>.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#B8C4D6]">
            Em 21 segundos, o que a gente faz pelo seu negócio: estratégia,
            performance e crescimento.
          </p>
        </FadeIn>

        <FadeIn delay={120} className="mt-12">
          {/* Celular: vídeo vertical */}
          <Player
            formato="9x16"
            className="mx-auto block aspect-[9/16] w-full max-w-[380px] rounded-2xl border border-white/10 bg-black shadow-[0_20px_80px_rgba(33,68,255,0.35)] md:hidden"
          />
          {/* Tablet e desktop: vídeo horizontal */}
          <Player
            formato="16x9"
            className="hidden aspect-video w-full rounded-2xl border border-white/10 bg-black shadow-[0_30px_120px_rgba(33,68,255,0.35)] md:block"
          />
        </FadeIn>
      </div>
    </section>
  );
}
