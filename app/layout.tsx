import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'SEXIMON Portfolio',
  description: 'Premium cinematic 3D portfolio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="mx-auto max-w-frame px-4 pb-16 pt-28 md:px-8">{children}</main>
      </body>
    </html>
  );
}
