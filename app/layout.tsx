import Script from "next/script";
import { FB_PIXEL_ID } from "./lib/fbpixel";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FacebookPixel from "./components/FacebookPixel";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lienzo y Fuego - Aprende a Cocinar Como un Chef Profesional",
  description:
    "Descubre los secretos culinarios del Chef Mateo. Transforma tu cocina de recetas básicas a platos memorables. Únete a la comunidad de cocina profesional.",
  keywords: [
    "curso de cocina",
    "Chef Mateo",
    "Lienzo y Fuego",
    "cocina profesional",
    "técnicas culinarias",
    "aprende a cocinar",
    "cocina gourmet",
    "clases de cocina online",
    "cocina como un chef",
    "curso de gastronomía",
  ],
  authors: [{ name: "Chef Mateo" }],
  creator: "Lienzo y Fuego",
  publisher: "Lienzo y Fuego",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lienzoyfuego.com",
    siteName: "Lienzo y Fuego",
    title: "Lienzo y Fuego - Aprende a Cocinar Como un Chef Profesional",
    description:
      "Descubre los secretos culinarios del Chef Mateo. Transforma tu cocina de recetas básicas a platos memorables. Únete a la comunidad de cocina profesional.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lienzo y Fuego - Curso de Cocina con Chef Mateo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lienzo y Fuego - Aprende a Cocinar Como un Chef Profesional",
    description:
      "Descubre los secretos culinarios del Chef Mateo. Transforma tu cocina de recetas básicas a platos memorables.",
    images: ["/og-image.jpg"],
    creator: "@lienzoyfuego",
  },
  alternates: {
    canonical: "https://lienzoyfuego.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {FB_PIXEL_ID && (
          <>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${FB_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
