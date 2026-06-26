import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    "Marketing Digital",
    "Marketing Digital em Piracicaba",
    "Agência de Marketing",
    "Google Ads",
    "Meta Ads",
    "Google Meu Negócio",
    "Criação de Sites",
    "Automação WhatsApp",
    "Agência de Marketing Digital Piracicaba",
    "Marketing Digital Piracicaba",
    "Google Meu Negócio Piracicaba",
    "Gestão de Redes Sociais Piracicaba",
    "Tráfego Pago Piracicaba",
    "Criação de Sites Piracicaba",
    "Automação WhatsApp Piracicaba",
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
      "Marketing digital estratégico para empresas locais.",

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
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body className="bg-[#07111F] text-white antialiased">
        <JsonLd />

        <Analytics />

        {children}
      </body>
    </html>
  );
}
