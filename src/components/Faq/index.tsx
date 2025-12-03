"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [open, setOpen] = useState<number | null>(null);

  const faqData = [
    {
      question: "Milyen gyorsan tudnak kiszállni?",
      answer:
        "Budapesten és környékén akár 1 órán belül a helyszínen vagyunk, sürgős esetben azonnali indulással!",
    },
    {
      question: "Mennyibe kerül a kiszállás?",
      answer:
        "A kiszállás díja a távolságtól és a munka jellegétől függ, pontos árat telefonon tudunk mondani.",
    },
    {
      question: "Milyen garanciát vállalnak?",
      answer:
        "Minden munkánkra garanciát vállalunk, a részletekről telefonon vagy e-mailben tájékoztatjuk.",
    },
    {
      question: "Milyen típusú szereléseket vállalnak?",
      answer:
        "Csaptelep, szifon, lefolyó, csőtörés, gépbekötés, duguláselhárítás, vízóra csere és minden vízszerelési munka!",
    },
  ];

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Gyakori kérdések"
            paragraph="A leggyakrabban felmerülő kérdések és válaszok vízszerelő gyorsszolgálatunkról."
            center
            mb="80px"
          />
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[770px] overflow-hidden rounded-md bg-white/80 p-6 shadow-lg">
                  {faqData.map((item, idx) => (
                    <div key={idx} className="mb-4 border-b border-gray-200">
                      <button
                        className="w-full text-left py-4 font-bold text-lg text-primary focus:outline-none flex justify-between items-center"
                        onClick={() => setOpen(open === idx ? null : idx)}
                        aria-expanded={open === idx}
                      >
                        {item.question}
                        <span
                          className={`ml-2 transition-transform ${open === idx ? "rotate-90" : "rotate-0"}`}
                        >
                          ▶
                        </span>
                      </button>
                      {open === idx && (
                        <div className="pb-4 text-gray-700 text-base">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"
            />
          </div>
        </div>
      </section>
    </>
  );
};
