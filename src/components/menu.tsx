"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/legacy/image";

type Props = {
  menuItems: {
    name: string;
    link: string;
  }[];
};

export default function Menu({ menuItems }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-md w-full bg-background">
      <div className="flex flex-row justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">
          <Link href="/">
            J&lt;/&gt;se <span className="text-yaleblue">Dacosta</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-row items-center space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover:text-yaleblue transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Image
              src="/images/menu.svg"
              alt="menu icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50">
          <div className="flex flex-col items-center space-y-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-lg hover:text-yaleblue transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4"
          >
            <Image
              src="/images/close.svg"
              alt="close menu icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
    </nav>
  );
}
