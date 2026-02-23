"use client";
import { FaX } from "react-icons/fa6";
import Logo from "./Logo";
import Link from "next/link";
import { navItems } from "@/app/data/data";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (isPathname: string) => {
    return pathname.includes(isPathname);
  };

  //closing the menu incase any part of th screen is pressed that is not the menu

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleCloseMobileMenuIncaseClickOutside(e: MouseEvent) {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    document.addEventListener(
      "mousedown",
      handleCloseMobileMenuIncaseClickOutside,
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleCloseMobileMenuIncaseClickOutside,
      );
  }, [onClose]);

  return (
    <div
      ref={divRef}
      className="fixed inset-0 z-100 bg-primary  w-48  flex items-start   flex-col py-4 text-white border-r-2 border-r-accent"
    >
      <div className="flex items-center justify-between w-full px-2 border-b border-b-accent">
        <Logo onClose={onClose} />
        <button
          onClick={onClose}
          type="button"
          className="text-2xl text-accent border p-1 rounded-full flex items-center justify-center"
        >
          <FaX size={16} />
        </button>
      </div>
      <div className="flex flex-col items-start gap-3 mt-3">
        {navItems.map((navItem) => (
          <Link
            onClick={onClose}
            href={navItem.link}
            key={navItem.label}
            className={` font-bold  px-1 rounded-sm hover:text-accent transition ease-in-out duration-500 hover:text-lg text-sm ${isActive(navItem.link) ? "text-accent" : ""} border w-44 `}
          >
            {navItem.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
