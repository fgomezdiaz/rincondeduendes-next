import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/NavBar";
import { ScrollToTopOnRouteChange } from "../components/ScrollToTopOnRouteChange";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rincondeduendes.com'),
  title: {
    default: "Rincón de Duendes - Juguetería y Librería Infantil",
    template: "%s | Rincón de Duendes"
  },
  description: "Descubre la mejor selección de juguetes educativos, libros infantiles, puzzles de madera y construcciones para niños. Juguetería y librería especializada en productos de calidad para el desarrollo infantil.",
  keywords: [
    "juguetería infantil",
    "librería infantil", 
    "juguetes educativos",
    "libros para niños",
    "juguetes de madera",
    "puzzles infantiles",
    "construcciones para niños",
    "juguetes didácticos",
    "cuentos infantiles",
    "material educativo",
    "juguetes sostenibles",
    "regalos para niños",
    "desarrollo infantil",
    "aprendizaje através del juego"
  ],
  authors: [{ name: "Rincón de Duendes" }],
  creator: "Rincón de Duendes",
  publisher: "Rincón de Duendes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://rincondeduendes.com",
    title: "Rincón de Duendes - Juguetería y Librería Infantil",
    description: "La mejor selección de juguetes educativos y libros infantiles. Especialistas en juguetes de madera, puzzles y material didáctico para el desarrollo de los niños.",
    siteName: "Rincón de Duendes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rincón de Duendes - Juguetería y Librería Infantil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rincón de Duendes - Juguetería y Librería Infantil",
    description: "Juguetes educativos y libros infantiles de calidad. Especialistas en desarrollo infantil a través del juego.",
    images: ["/twitter-image.jpg"],
    creator: "@rincondeduendes",
  },
  verification: {
    google: "google-verification-code", // Reemplazar con el código real de Google Search Console
  },
  category: "Retail",
  classification: "Juguetería y Librería Infantil",
  alternates: {
    canonical: "https://rincondeduendes.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="light">
      <head>
        {/* Schema.org Structured Data para Negocio Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "@id": "https://rincondeduendes.com",
              name: "Rincón de Duendes",
              description: "Juguetería y librería infantil especializada en juguetes educativos, libros para niños y material didáctico de calidad.",
              url: "https://rincondeduendes.com",
              logo: "https://rincondeduendes.com/logo.png",
              image: "https://rincondeduendes.com/og-image.jpg",
              telephone: "+34-964-22-30-40", // Reemplazar con teléfono real 
              email: "rincondeduendes@gmail.com", // Reemplazar con email real
              address: {
                "@type": "PostalAddress",
                streetAddress: "C./ Alloza, 46", // Reemplazar con dirección real
                addressLocality: "Castellón de la Plana", // Reemplazar con ciudad real
                postalCode: "12001", // Reemplazar con código postal real
                addressCountry: "ES"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.4168, // Reemplazar con coordenadas reales
                longitude: -3.7038
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "20:00"
                }
              ],
              paymentAccepted: "Cash, Credit Card, Debit Card",
              currenciesAccepted: "EUR",
              priceRange: "€€",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Catálogo de Juguetes y Libros Infantiles",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Juguetes Educativos",
                      description: "Amplia selección de juguetes educativos para el desarrollo infantil"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Libros Infantiles",
                      description: "Cuentos y libros educativos para todas las edades"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Juguetes de Madera",
                      description: "Juguetes sostenibles y duraderos de madera natural"
                    }
                  }
                ]
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1"
              },
              sameAs: [
                "https:/https://www.facebook.com/RinconDeDuendesJugueteria/?locale=es_ES", // Reemplazar con URLs reales
                "https://www.instagram.com/rincondeduendesjuguete/",
              ]
            })
          }}
        />
        
        {/* Metadatos adicionales para SEO local */}
        <meta name="geo.region" content="ES" />
        <meta name="geo.placename" content="España" />
        <meta name="geo.position" content="40.4168;-3.7038" />
        <meta name="ICBM" content="40.4168, -3.7038" />
        
        {/* Metadatos para móviles */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTopOnRouteChange />
        </Suspense>
        <div className="min-h-screen max-h-screen flex flex-col bg-gradient-to-r from-white via-gray-200 to-white">
          <NavBar  />
          <main className="flex-1 overflow-y-auto">
            {children}
            <Analytics />
          </main>
          <footer className="w-full justify-center items-center bottom-0 text-center ">
            <div className="flex justify-center gap-1 pb-2 md:pb-4 pt-0 md:pt-4 ">
              <span className="text-default-600">Powered by</span>
              <p className="text-blue-500">Rincón de Duendes</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
