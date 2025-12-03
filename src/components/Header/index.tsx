"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center transition-all ${
        sticky
          ? "bg-primary bg-opacity-40 shadow-sticky fixed z-9999"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
            >
              <Image
                src="/kepek/logo.png"
                alt="Vízszerelő gyorsszolgálat logó"
                width={240}
                height={52}
                className="block mx-auto w-[180px] h-[40px] md:w-[240px] md:h-[52px]"
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <div className="flex items-center justify-end pr-16 lg:pr-0">
            <a
              href="tel:+36301234567"
              className="font-bold text-base text-white hover:underline focus:outline-none drop-shadow-lg whitespace-nowrap md:text-2xl sm:text-lg"
              style={{ background: "none", border: "none", padding: 0 }}
            >
              +36 30 123 4567
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
