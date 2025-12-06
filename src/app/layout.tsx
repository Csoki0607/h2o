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
          {/* Mobil sticky call sáv alul, csak hívás gomb */}
          <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
            <a
              href="tel:+36707746362"
              className="block w-full bg-primary text-white text-center font-bold py-4 text-lg shadow-lg"
              style={{ borderRadius: 0 }}
            >
              Hívjon most: +36 (70) 774 6362
            </a>
          </div>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

