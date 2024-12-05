
import type { Metadata } from "next";
import Navigation from "./components/navbar";
import "./globals.css";





// app/layout.tsx

export const metadata: Metadata = {
  title: 'SmartStack | AI-Powered Development Solutions',
  description: 'Transform your business with custom AI integration, web development, and mobile solutions. Expert full-stack development services in California.',
  keywords: [
    'AI development',
    'custom web development',
    'mobile app development',
    'full stack development',
    'AI integration',
    'software development company',
    'California tech company',
    'custom software solutions'
  ],
  openGraph: {
    title: 'SmartStack | Intelligent Development Solutions',
    description: 'Custom AI-powered development solutions for modern businesses',
    url: 'https://smartstack.dev',
    siteName: 'SmartStack',
    locale: 'en_US',
    type: 'website',
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
  verification: {
    google: 'your-verification-code',
  },
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <Navigation />
      {children}
    </body>
  </html>
  );
}
