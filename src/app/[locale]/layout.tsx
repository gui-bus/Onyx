import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { providers as Providers } from "@/components/common/providers";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("Title"),
    description: t("Description"),
    keywords: [
      "law firm",
      "boutique jurística",
      "wealth management",
      "onyx associates",
    ],
    authors: [{ name: "Onyx Associates" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt",
        "en-US": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: `https://onyx-associates.com/${locale}`,
      title: t("Title"),
      description: t("Description"),
      siteName: "Onyx Associates",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Onyx Associates",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("Title"),
      description: t("Description"),
      images: ["/og-image.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const validLocales = ["en", "pt"] as const;
  if (!validLocales.includes(locale as (typeof validLocales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Onyx Associates",
    image: "https://onyx-associates.com/logo.png",
    "@id": "https://onyx-associates.com",
    url: "https://onyx-associates.com",
    telephone: "+41 22 000 0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue do Rhône",
      addressLocality: "Geneva",
      postalCode: "1204",
      addressCountry: "CH",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html lang={locale} className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-onyx-dark text-white selection:bg-gold selection:text-onyx-dark overflow-x-hidden w-full max-w-440 mx-auto`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:bg-gold focus:text-onyx-deep focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
