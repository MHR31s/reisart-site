import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.reisartmkd.com.br";
  const routes = [
    "",
    "/servicos",
    "/servicos/meta-ads",
    "/servicos/google-ads",
    "/servicos/google-meu-negocio",
    "/servicos/criacao-de-sites",
    "/servicos/automacoes",
    "/cases",
    "/cases/construvip",
    "/cases/robert-auto-eletrica",
    "/cases/suzana-limpeza-premium",
    "/diagnostico",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
