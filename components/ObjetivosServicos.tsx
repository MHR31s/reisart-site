"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Globe2,
  MapPin,
  Megaphone,
  Palette,
  Search,
  Share2,
  Sparkles,
  Compass,
  Camera,
  type LucideIcon,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface Servico {
  nome: string;
  descricao: string;
  href: string;
  icon: LucideIcon;
}

interface Objetivo {
  id: string;
  rotulo: string;
  icon: LucideIcon;
  titulo: string;
  texto: string;
  servicos: Servico[];
}

const objetivos: Objetivo[] = [
  {
    id: "aparecer",
    rotulo: "Aparecer mais",
    icon: Search,
    titulo: "Seja encontrado quando alguém procurar.",
    texto: "Presença local e conteúdo para sua empresa ser vista e lembrada.",
    servicos: [
      {
        nome: "Google Meu Negócio",
        descricao: "Apareça quando alguém procurar sua empresa.",
        href: "/servicos/google-meu-negocio",
        icon: MapPin,
      },
      {
        nome: "Gestão de Redes Sociais",
        descricao: "Transforme seguidores em clientes.",
        href: "/servicos/gestao-redes-sociais",
        icon: Share2,
      },
      {
        nome: "Produção de Conteúdo",
        descricao: "Mostre o que sua empresa faz de verdade.",
        href: "/servicos/producao-de-conteudo",
        icon: Camera,
      },
    ],
  },
  {
    id: "clientes",
    rotulo: "Mais clientes",
    icon: Megaphone,
    titulo: "Receba mensagens de quem já quer comprar.",
    texto: "Campanhas e páginas pensadas para gerar contatos e orçamentos.",
    servicos: [
      {
        nome: "Tráfego Pago",
        descricao: "Anuncie para as pessoas certas, no Google e no Meta.",
        href: "/servicos/trafego-pago",
        icon: Megaphone,
      },
      {
        nome: "Landing Pages",
        descricao: "Páginas focadas em transformar visita em conversa.",
        href: "/servicos/criacao-de-sites",
        icon: Globe2,
      },
      {
        nome: "Consultoria Estratégica",
        descricao: "Direção clara sobre onde investir primeiro.",
        href: "/servicos/consultoria-estrategica",
        icon: Compass,
      },
    ],
  },
  {
    id: "profissionalizar",
    rotulo: "Profissionalizar",
    icon: Palette,
    titulo: "Pareça a empresa que você realmente é.",
    texto: "Site e identidade visual que geram confiança logo no primeiro contato.",
    servicos: [
      {
        nome: "Criação de Sites",
        descricao: "Seu site aberto 24 horas, com a cara da sua empresa.",
        href: "/servicos/criacao-de-sites",
        icon: Globe2,
      },
      {
        nome: "Identidade Visual",
        descricao: "Faça sua empresa parecer profissional.",
        href: "/servicos/identidade-visual",
        icon: Palette,
      },
    ],
  },
  {
    id: "automatizar",
    rotulo: "Automatizar",
    icon: Bot,
    titulo: "Atenda rápido, sem perder nenhum contato.",
    texto: "Automações e IA para organizar e acelerar o seu atendimento.",
    servicos: [
      {
        nome: "Automações e WhatsApp com IA",
        descricao: "Respostas rápidas e contatos organizados, o dia todo.",
        href: "/automacoes",
        icon: Bot,
      },
      {
        nome: "Consultoria Estratégica",
        descricao: "Mapeamos o que vale automatizar na sua operação.",
        href: "/servicos/consultoria-estrategica",
        icon: Sparkles,
      },
    ],
  },
];

export default function ObjetivosServicos() {
  const [ativo, setAtivo] = useState(objetivos[0].id);
  const atual = objetivos.find((o) => o.id === ativo) ?? objetivos[0];

  return (
    <section id="servicos" className="bg-[#F3F6FF] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="section-kicker justify-center text-[#2144FF]">Serviços</p>
          <h2 className="display mt-5 text-4xl text-[#0B1638] md:text-6xl">
            O que sua empresa precisa <span className="gradient-text-light">hoje?</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4A5878]">
            Escolha o resultado que você quer alcançar e veja como a Reisart
            chega até ele.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div
            role="tablist"
            aria-label="Objetivos"
            className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3"
          >
            {objetivos.map((obj) => {
              const Icon = obj.icon;
              const selecionado = obj.id === ativo;
              return (
                <button
                  key={obj.id}
                  role="tab"
                  type="button"
                  id={`tab-${obj.id}`}
                  aria-selected={selecionado}
                  aria-controls={`painel-${obj.id}`}
                  onClick={() => setAtivo(obj.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition ${
                    selecionado
                      ? "border-transparent bg-[linear-gradient(135deg,#2144FF,#5B3DF5)] text-white shadow-[0_10px_28px_rgba(33,68,255,0.35)]"
                      : "border-[#CBD5EE] bg-white text-[#2A3960] hover:border-[#2144FF] hover:text-[#2144FF]"
                  }`}
                >
                  <Icon size={17} />
                  {obj.rotulo}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div
          role="tabpanel"
          id={`painel-${atual.id}`}
          aria-labelledby={`tab-${atual.id}`}
          className="mt-12 grid gap-8 overflow-hidden rounded-[2rem] bg-[#0B1638] p-6 shadow-[0_30px_80px_rgba(11,22,56,0.25)] md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
        >
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7FB0FF]">
                {atual.rotulo}
              </p>
              <h3 className="display mt-4 text-3xl text-white md:text-4xl">
                {atual.titulo}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#B8C4D6]">
                {atual.texto}
              </p>
            </div>
            <Link href="/diagnostico" className="btn-white self-start">
              Quero um diagnóstico
              <ArrowRight size={18} />
            </Link>
          </div>

          <ul className="grid content-center gap-4">
            {atual.servicos.map((servico) => {
              const Icon = servico.icon;
              return (
                <li key={servico.nome}>
                  <Link
                    href={servico.href}
                    className="group glass flex items-center gap-5 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[#3B82FF]/60 hover:bg-white/10 md:p-6"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#3B82FF]/20">
                      <Icon className="text-[#8DB8FF]" size={26} strokeWidth={1.8} />
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-extrabold text-white">
                        {servico.nome}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-[#B8C4D6]">
                        {servico.descricao}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-[#8DB8FF] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
