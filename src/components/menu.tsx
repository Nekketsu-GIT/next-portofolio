"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, Download } from "lucide-react";

type Props = {
  menuItems: {
    name: string;
    link: string;
  }[];
};

export default function Menu({ menuItems }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <motion.nav
        className="sticky top-0 z-50 shadow-md w-full bg-background/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row justify-between items-center py-4 px-6">
          <motion.div
            className="text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">👨‍💻</span>
              J&lt;/&gt;se <span className="text-yaleblue">Dacosta</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.link}
                  className="relative px-3 py-2 rounded-lg hover:text-yaleblue transition-colors group"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yaleblue"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Download CV Button */}
            <motion.a
              href="/cv.pdf"
              download
              className="ml-2 px-4 py-2 border-2 border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-darkgoldenrod hover:text-darkgoldenrod transition-colors flex items-center gap-1.5 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              CV
            </motion.a>

            {/* CTA Button */}
            <motion.button
              className="ml-2 px-6 py-2 bg-yaleblue text-white rounded-lg font-semibold hover:bg-yaleblue/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // If not on homepage, navigate to homepage with hash
                  window.location.href = '/#contact';
                }
              }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold">Menu</h2>
                <motion.button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-6">
                <motion.div
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={item.link}
                        className="block px-4 py-3 text-lg rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-yaleblue transition-all duration-200"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CV Download Button */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="pt-4"
                  >
                    <a
                      href="/cv.pdf"
                      download
                      className="w-full px-4 py-3 border-2 border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-darkgoldenrod hover:text-darkgoldenrod transition-colors flex items-center justify-center gap-2"
                      onClick={toggleMenu}
                    >
                      <Download className="w-4 h-4" />
                      Download CV
                    </a>
                  </motion.div>

                  {/* Mobile CTA Button */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="pt-2 border-t border-gray-200 dark:border-gray-700"
                  >
                    <button
                      className="w-full px-4 py-3 bg-yaleblue text-white rounded-lg font-semibold hover:bg-yaleblue/90 transition-colors"
                      onClick={() => {
                        toggleMenu();
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/#contact';
                        }
                      }}
                    >
                      Hire Me
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
