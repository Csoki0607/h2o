import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "H2O Vízszerelő Gyorsszolgálat - Azonnali Vízszerelés Budapesten",
  description: "vízszerelő gyorsszolgálat Budapesten, duguláselhárítás, csőtörés javítás, non-stop ügyelet, profi vízszerelés korszerű gépekkel és korrekt árakkal. Hívjon most azonnali kiszállásért!",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Faq />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
