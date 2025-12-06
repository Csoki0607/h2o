"use client";
import Image from "next/image";
import Link from "next/link";
import { useContentProtection } from "@/hooks/useContentProtection";

const Footer = () => {
  const { imageProtectionProps } = useContentProtection();

  return (
    <>
      <footer className="relative z-10 bg-primary bg-opacity-40 pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/kepek/logo.png"
                    alt="Vízszerelő gyorsszolgálat logó"
                    className="w-full"
                    width={140}
                    height={30}
                    draggable={false}
                    onDragStart={imageProtectionProps.onDragStart}
                  />
                </Link>
                <p className="mb-6 text-base leading-relaxed text-white">
                  H2O Gyorsszervíz – Vízszerelés Budapesten és Pest megyében, gyors
                  kiszállással, garanciával. Több mint 10 év tapasztalat, 0–24 órás
                  elérhetőség, modern technológia, tiszta és precíz munkavégzés.
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 text-xl font-bold text-white">
                  Szolgáltatások
                </h2>
                <ul className="text-base text-white space-y-2">
                  <li>Csaptelep csere és javítás Budapesten</li>
                  <li>Vízvezeték javítás, csere, szerelés Pest megyében</li>
                  <li>Szifoncsere, lefolyócsövek javítása</li>
                  <li>Csőtörés bemérése és javítása modern technológiával</li>
                  <li>Vízszivárgás felderítése kamerás vizsgálattal</li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 text-xl font-bold text-white">
                  További szolgáltatások
                </h2>
                <ul className="text-base text-white space-y-2">
                  <li>Szelep, flexibilis cső, sarokszelep csere</li>
                  <li>WC tartály javítás, csere</li>
                  <li>Fürdőszobai és konyhai vízszerelés</li>
                  <li>Mosógép, mosogatógép bekötés</li>
                  <li>Teljes vízvezeték rendszer felújítása</li>
                  <li>Fagyás miatti csőrepedés javítása</li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 text-xl font-bold text-white">
                  Kapcsolat
                </h2>
                <ul className="text-base text-white space-y-2">
                  <li>
                  </li>
                  <li>
                    <span className="font-bold">Email:</span> <a href="mailto:info@vizgyors.hu" className="text-white underline">info@vizgyors.hu</a>
                  </li>
                  <li>
                    <span className="font-bold">Email:</span> <a href="mailto:info@h2ogyorsszerviz.hu" className="text-white underline">info@h2ogyorsszerviz.hu</a>
                  </li>
                  <li>
                    <span className="font-bold">Cím:</span> Budapest, Pest megye
                  </li>
                  <li>0–24 órás elérhetőség, hétvégén is</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-white">
              &copy; {new Date().getFullYear()} H2O Gyorsszervíz – Minden jog
              fenntartva. Vízszerelés gyorsan, tisztán, garanciával.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
