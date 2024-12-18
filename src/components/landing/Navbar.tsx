"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileClock, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Navbar() {
  const { scrollY } = useScroll();

  const headerHeight = useTransform(scrollY, [0, 50], ["5rem", "4rem"]);
  const shadowIntensity = useTransform(
    scrollY,
    [0, 50],
    ["0 10px 30px rgba(0,0,0,0.1)", "0 4px 20px rgba(0,0,0,0.3)"]
  );

  const navItems = ["About", "Services", "Contact"];

  return (
    <motion.header
      style={{
        height: headerHeight,
        boxShadow: shadowIntensity,
      }}
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-center rounded-[30px] backdrop-blur-xl bg-white/90 dark:bg-black/85 transition-all duration-500 border-b-2 border-transparent hover:border-indigo-500"
    >
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FileClock className="w-8 h-8 text-[hsl(var(--primary))]" />
          <motion.h1
            className="font-serif font-bold text-[hsl(var(--foreground))]"
            whileHover={{
              scale: 0.99,
              transition: { type: "spring", stiffness: 100 },
            }}
          >
            Resume.AI
          </motion.h1>
        </motion.div>

        {/* Centered Navigation */}
        <nav>
          <ul className="flex space-x-12">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                className="relative group overflow-hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative flex gap-1 items-center text-[hsl(var(--foreground))] font-serif group-hover:text-[hsl(var(--primary))] transition-all duration-500"
                >
                  <span className="flex items-center space-x-2">
                    {/* Arrow transitions smoothly */}
                    <motion.div
                      initial={{ x: 0, opacity: 1 }}
                      whileHover={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <MoveUpRight className="w-3 h-3 text-[hsl(var(--primary))]" />
                    </motion.div>
                    <motion.span
                      className="w-fit"
                      whileHover={{
                        scale: 0.95,
                        transition: { type: "spring", stiffness: 100 },
                      }}
                    >
                      {item}
                    </motion.span>
                  </span>

                  {/* Gradient Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-900 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Login Button */}
        <motion.div
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link href="/login">
            <Button
              variant="outline"
              className="relative overflow-hidden text-sm font-medium px-6 py-2 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--background))] shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
