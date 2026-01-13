import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Param Mitra Family Restaurant | Pure Vegetarian Restaurant in Dhargaon",
  description: "Experience authentic vegetarian cuisine at Param Mitra Family Restaurant in Dhargaon, Madhya Pradesh. Serving pure vegetarian food with traditional flavors, farm-to-table ingredients, and family-friendly dining atmosphere.",
  keywords: [
    "Param Mitra Family Restaurant",
    "vegetarian restaurant Dhargaon",
    "pure veg restaurant",
    "family restaurant Dhargaon",
    "traditional Indian food",
    "Madhya Pradesh restaurant",
    "farm to table",
    "vegetarian cuisine",
    "family dining",
    "authentic Indian food",
    "परम मित्र रेस्टोरेंट",
    "शाकाहारी रेस्टोरेंट",
    "Dhargaon restaurant",
    "Main Road Mandleswar"
  ],
  authors: [{ name: "Param Mitra Family Restaurant" }],
  creator: "Param Mitra Family Restaurant",
  publisher: "Param Mitra Family Restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.parammitrarestuarant.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Param Mitra Family Restaurant | Pure Vegetarian Restaurant in Dhargaon",
    description: "Experience authentic vegetarian cuisine at Param Mitra Family Restaurant in Dhargaon. Serving pure vegetarian food with traditional flavors and family-friendly dining.",
    url: 'https://www.parammitrarestuarant.in',
    siteName: 'Param Mitra Family Restaurant',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Param Mitra Family Restaurant Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Param Mitra Family Restaurant | Pure Vegetarian Restaurant in Dhargaon",
    description: "Experience authentic vegetarian cuisine at Param Mitra Family Restaurant in Dhargaon. Serving pure vegetarian food with traditional flavors.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#7a2e1d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Dhargaon, Madhya Pradesh" />
        <meta name="geo.position" content="22.358249;75.617154" />
        <meta name="ICBM" content="22.358249,75.617154" />
        
        {/* Structured Data for Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Param Mitra Family Restaurant",
              "alternateName": "परम मित्र रेस्टोरेंट",
              "description": "Pure vegetarian family restaurant serving authentic Indian cuisine with traditional flavors in Dhargaon, Madhya Pradesh",
              "url": "https://www.parammitrarestuarant.in",
              "telephone": "+918085902662",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Road Mandleswar, Dhargaon",
                "addressLocality": "Dhargaon",
                "addressRegion": "Madhya Pradesh",
                "addressCountry": "IN",
                "postalCode": "451441"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "22.358249",
                "longitude": "75.617154"
              },
              "servesCuisine": ["Indian", "Vegetarian", "Traditional"],
              "priceRange": "$$",
              "openingHours": [
                "Mo-Su 11:00-15:00",
                "Mo-Su 18:00-23:00"
              ],
              "acceptsReservations": "Yes",
              "menu": "https://www.parammitrarestuarant.in/menu",
              "image": [
                "https://www.parammitrarestuarant.in/logo.png",
                "https://www.parammitrarestuarant.in/image2.png"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "150"
              },
              "sameAs": [
                "https://www.instagram.com/parammitra_family_restaurant/",
                "https://maps.app.goo.gl/E8sHdS3G46tHMNNPA"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
