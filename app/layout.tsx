import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { defaultMetadata } from './metadata';
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...defaultMetadata,
  alternates: {
    canonical: 'https://www.swifttools.eu',
    languages: {
      'en-US': '/en-US',
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: defaultMetadata.title,
              description: defaultMetadata.description,
              url: 'https://www.swifttools.eu',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}