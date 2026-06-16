import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://reisartmkd.com.br"),

  title: {
    default: "Reisart Marketing Digital",
    template: "%s | Reisart Marketing Digital",
  },

  description:
    "Transformamos empresas locais em referências digitais através de estratégias, posicionamento, automações e marketing orientado a resultados.",

  keywords: [
    "Reisart Marketing Digital",
    "Marketing Digital",
    "Consultoria Estratégica",
    "Gestão de Tráfego",
    "Empresas Locais",
    "Marketing em Piracicaba",
    "Agência de Marketing",
    "Google Ads",
    "Meta Ads",
    "Automação",
    "Posicionamento Digital",
  ],

  authors: [
    {
      name: "Maycon Reis",
      url: "https://reisartmkd.com.br",
    },
  ],

  creator: "Maycon Reis",
  publisher: "Reisart Marketing Digital",

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
    url: "https://reisartmkd.com.br",
    siteName: "Reisart Marketing Digital",

    title: "Reisart Marketing Digital",

    description:
      "Transformamos empresas locais em referências digitais.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reisart Marketing Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Reisart Marketing Digital",

    description:
      "Transformamos empresas locais em referências digitais.",

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