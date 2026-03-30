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
  return () => window.removeEventListener("scroll", handleStickyNavbar);
}, []);

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
        sticky && typeof window !== 'undefined' && window.innerWidth >= 768
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
                src="/kepek/logo.webp"
                alt="Vízszerelő gyorsszolgálat logó"
                width={240}
                height={52}
                className="block mx-auto w-[180px] h-[40px] md:w-[240px] md:h-[52px]"
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
