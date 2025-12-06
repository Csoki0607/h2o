"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
// ...existing code...
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
          <main role="main">
            {children}
          </main>
          <Footer />
                  {/* Széchenyi pályázat lebegő kép jobb alsó sarokban */}
                  <div
                    style={{
                      position: 'fixed',
                      bottom: 32,
                      right: 8,
                      zIndex: 1000,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                    }}
                    className="group"
                  >
                    <img
                      src="/kepek/szechenyi2.webp"
                      alt="Széchenyi pályázat logó"
                      style={{
                        width: 140,
                        height: 140,
                        objectFit: 'contain',
                        borderRadius: 8,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
                      }}
                      className="group-hover:scale-150 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-primary"
                    />
                  </div>
          {/* ScrollToTop gomb eltávolítva */}
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

