"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { useContentProtection } from "@/hooks/useContentProtection";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useContentProtection();
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          {/* Mobil sticky call sáv alul */}
          <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
            <a
              href="tel:+36707746362"
              className="block w-full bg-primary text-white text-center font-bold py-4 text-lg shadow-lg"
              style={{ borderRadius: 0 }}
            >
              Hívjon most: +36 (70) 774 6362
            </a>
          </div>
          {/* Bal alsó sarokban fix tárcsa ikon mobilon */}
          <a
            href="tel:+36707746362"
            className="fixed bottom-6 left-4 z-50 md:hidden bg-primary text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
            aria-label="Hívás indítása"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.28 1.6.46 2.36a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.76.18 1.55.33 2.36.46A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

