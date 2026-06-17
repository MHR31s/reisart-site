import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reisartmkd.com.br"),

  title: {
    default:
      "Reisart Agência de Marketing Digital | Marketing Digital em Piracicaba",
    template: "%s | Reisart Marketing Digital",
  },

  description:
    "A Reisart ajuda empresas locais a gerar mais visibilidade, autoridade e oportunidades comerciais através de marketing digital, tráfego pago, sites, Google Meu Negócio e automações.",

  keywords: [
    "Reisart",
    "Reisart Marketing Digital",
    "agência de marketing em Piracicaba",
    "marketing digital em Piracicaba",
    "gestão de Instagram",
    "tráfego pago",
    "Meta Ads",
    "Google Ads",
    "Google Meu Negócio",
    "criação de sites",
    "automação de WhatsApp",
  ],

  authors: [
    {
      name: "Maycon Reis",
    },
  ],

  creator: "Reisart Agência de Marketing Digital",
  publisher: "Reisart Agência de Marketing Digital",

  alternates: {
    canonical: "https://www.reisartmkd.com.br",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.reisartmkd.com.br",
    siteName: "Reisart Agência de Marketing Digital",

    title: "Reisart Agência de Marketing Digital",

    description:
      "Marketing digital estratégico para empresas locais que desejam crescer com posicionamento, conteúdo, tráfego pago e presença digital profissional.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reisart Agência de Marketing Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Reisart Agência de Marketing Digital",

    description:
      "Marketing digital estratégico para empresas locais em Piracicaba e região.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-[#07111F] text-white antialiased">
        <Analytics />

        {children}
      </body>
    </html>
  );
}
