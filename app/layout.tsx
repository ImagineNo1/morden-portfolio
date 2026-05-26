import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEXIMON — 3D Designer & Animator",
  description: "Premium portfolio for 3D design, animation, branding and visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto min-h-screen max-w-[1320px] px-4 pb-20 pt-28 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
