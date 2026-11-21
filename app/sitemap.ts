import { MetadataRoute } from "next";

// Atualize esta data quando o conteúdo do site mudar de verdade.
const ULTIMA_ATUALIZACAO = new Date("2026-11-21");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.reisartmkd.com.br";
  const routes = [
    "",
    "/automacoes",
    "/servicos",
    "/servicos/gestao-redes-sociais",
    "/servicos/trafego-pago",
    "/servicos/meta-ads",
    "/servicos/google-ads",
    "/servicos/google-meu-negocio",
    "/servicos/criacao-de-sites",
    "/servicos/automacoes",
    "/servicos/identidade-visual",
    "/servicos/producao-de-conteudo",
    "/servicos/consultoria-estrategica",
    "/cases",
    "/cases/robert-auto-eletrica",
    "/cases/marcenaria-ponto-alto",
    "/cases/santana-na-brasa",
    "/cases/adilaine-guastalli",
    "/cases/as-distribuidora",
    "/cases/evertoon-tattoo",
    "/cases/marmoraria-vila-sonia",
    "/cases/fabinho-eletrica-mecanica",
    "/diagnostico",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: ULTIMA_ATUALIZACAO,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
