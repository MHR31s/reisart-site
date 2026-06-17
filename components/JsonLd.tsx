export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reisart Agência de Marketing Digital",
    url: "https://www.reisartmkd.com.br",
    logo: "https://www.reisartmkd.com.br/logo.png",
    sameAs: [
      "https://www.instagram.com/reisartmkd/",
      "https://www.facebook.com/reisart.ads"
    ],
    founder: {
      "@type": "Person",
      name: "Maycon Reis"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55 19 99139-2850",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Reisart Agência de Marketing Digital",
    image: "https://www.reisartmkd.com.br/og-image.jpg",
    url: "https://www.reisartmkd.com.br",
    telephone: "+55 19 99139-2850",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Piracicaba",
      addressRegion: "SP",
      addressCountry: "BR"
    },
    areaServed: [
      "Piracicaba",
      "Rio das Pedras",
      "São Pedro",
      "Charqueada",
      "Limeira",
      "Americana",
      "Santa Bárbara d'Oeste"
    ],
    description:
      "Agência de marketing digital em Piracicaba especializada em posicionamento, conteúdo, tráfego pago, Google Meu Negócio, sites e automações."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Reisart Agência de Marketing Digital",
    url: "https://www.reisartmkd.com.br",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.reisartmkd.com.br/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}