import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = {
  title: {
    default: 'Balaji Arts | Multicolour Offset Printing & Packaging',
    template: '%s | Balaji Arts',
  },
  description:
    'Balaji Arts is a Malad-based multicolour offset printing and packaging business with 30 years of trusted print craftsmanship.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}