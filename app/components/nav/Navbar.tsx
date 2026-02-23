"use client";

import { navItems } from "@/app/data/data";
import Container from "../container/Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";
import Login from "./Login";
import Cart from "./Cart";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (isPathname: string) => {
    return pathname.includes(isPathname);
  };

  // mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container>
      <nav className="text-white w-full flex items-center justify-between mt-4 sticky top-0 left-0 right-0 z-50">
        <Logo />
        <div className="md:flex gap-3 items-center hidden ">
          {navItems.map((navItem) => (
            <Link
              href={navItem.link}
              key={navItem.label}
              className={` font-bold  px-1 rounded-sm hover:text-accent transition ease-in-out duration-500 hover:text-lg text-sm ${isActive(navItem.link) ? "text-accent" : ""}`}
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 ">
          <Search />
          <Login />
          <Cart />
          {/* mobile menu icon */}
          <div
            className="border border-accent p-1 rounded-xl "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        {mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}
      </nav>
    </Container>
  );
}
