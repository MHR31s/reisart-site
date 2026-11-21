export default function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Reisart Agência de Marketing Digital",
    url: "https://www.reisartmkd.com.br",
    inLanguage: "pt-BR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema),
      }}
    />
  );
}
