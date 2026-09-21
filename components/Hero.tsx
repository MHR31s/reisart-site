import Image from "next/image";
import {
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  TrendingUp,
  UserRound,
} from "lucide-react";
import TrackedLink from "@/components/TrackedLink";

const whatsappLink =
  "https://wa.me/5519991392850?text=Ol%C3%A1,%20quero%20solicitar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa.";

const garantias = [
  { icon: ShieldCheck, texto: "Diagnóstico sem custo" },
  { icon: UserRound, texto: "Atendimento direto com o fundador" },
  { icon: MapPin, texto: "Agência de Piracicaba/SP" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070D]">
      <div className="absolute inset-0 premium-grid opacity-70" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(33,68,255,0.28)_0%,transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(59,130,255,0.22)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-6 px-6 pb-16 pt-32 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-36">
        {/* Texto */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#3B82FF]/35 bg-[#3B82FF]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#3B82FF] shadow-[0_0_12px_#3B82FF]" />
            <span className="text-xs font-semibold tracking-[0.04em] text-[#A9C4FF] sm:text-sm">
              Agência de marketing digital em Piracicaba/SP
            </span>
          </div>

          <h1 className="display mt-7 text-[2.6rem] text-white sm:text-6xl lg:text-[4.4rem]">
            Transformamos empresas locais em{" "}
            <span className="gradient-text">máquinas de geração de clientes.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#C3D0DE]">
            Sites, Google, tráfego pago, redes sociais e automações com IA para
            sua empresa ser encontrada, gerar confiança e vender mais.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href="/diagnostico"
              eventName="diagnostico_click"
              eventParams={{ source: "hero" }}
              className="premium-button !min-h-14 !px-8 !text-base"
            >
              Solicitar diagnóstico gratuito
              <ArrowUpRight size={18} />
            </TrackedLink>
            <TrackedLink
              href={whatsappLink}
              eventName="whatsapp_click"
              eventParams={{ location: "hero" }}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button-secondary !min-h-14 !px-7 !text-base"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </TrackedLink>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-[#B8C8D8] sm:grid-cols-3">
            {garantias.map(({ icon: Icon, texto }) => (
              <li key={texto} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-white/[0.05]">
                  <Icon size={17} className="text-[#3B82FF]" />
                </span>
                <span className="leading-5">{texto}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto flex w-full max-w-[560px] items-end justify-center lg:min-h-[720px]">
          {/* orbe + anéis */}
          <div className="absolute bottom-6 left-1/2 h-[92%] w-[92%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(33,68,255,0.55)_0%,rgba(33,68,255,0.18)_45%,transparent_70%)]" />
          <div className="spin-slow absolute bottom-10 left-1/2 h-[84%] w-[84%] -translate-x-1/2 rounded-full border border-dashed border-[#3B82FF]/30" />
          <div className="absolute bottom-24 left-1/2 h-[60%] w-[60%] -translate-x-1/2 rounded-full border border-[#3B82FF]/20" />

          <Image
            src="/maycon-hero.png"
            alt="Maycon Reis, fundador da Reisart Marketing Digital"
            width={1000}
            height={1400}
            priority
            className="relative z-10 h-auto max-h-[520px] w-auto object-contain [mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)] lg:max-h-[680px]"
          />

          {/* cards flutuantes (ilustrativos, sem números) */}
          <div className="glass float-slow absolute left-0 top-[14%] z-20 hidden sm:flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl sm:-left-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82FF]/25">
              <Search size={18} className="text-[#9DBBFF]" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Google Meu Negócio</p>
              <p className="text-xs text-[#A9BBD0]">Perfil otimizado</p>
            </div>
          </div>

          <div className="glass float-slower absolute right-0 top-[40%] z-20 hidden sm:flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl sm:-right-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/25">
              <MessageCircle size={18} className="text-[#5CE38B]" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Nova conversa</p>
              <p className="text-xs text-[#A9BBD0]">chegando no WhatsApp</p>
            </div>
          </div>

          <div className="glass float-slow absolute right-0 top-[6%] z-20 hidden sm:flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl sm:-right-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82FF]/25">
              <TrendingUp size={18} className="text-[#9DBBFF]" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Campanha no ar</p>
              <p className="text-xs text-[#A9BBD0]">Google + Meta Ads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
