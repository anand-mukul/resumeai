"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileClock, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function DashboardNavbar() {
  const { isLoaded } = useUser();
  const { scrollY } = useScroll();

  const headerHeight = useTransform(scrollY, [0, 50], ["5rem", "4rem"]);
  const shadowIntensity = useTransform(
    scrollY,
    [0, 50],
    ["0 10px 30px rgba(0,0,0,0.1)", "0 4px 20px rgba(0,0,0,0.3)"]
  );

  return (
    <motion.header
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-center rounded-[30px] backdrop-blur-xl bg-black/85 shadow-lg transition-all duration-500 border-b-2 border-transparent hover:border-pink-500"
      style={{
        height: headerHeight,
        boxShadow: shadowIntensity,
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-10 p-4">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FileClock className="w-8 h-8 text-white" />
          <motion.h1
            className="font-serif font-bold text-white text-lg lg:text-xl"
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 200 },
            }}
          >
            Resume.AI
          </motion.h1>
        </motion.div>

        {/* User Avatar and Name */}
        <motion.div className="flex items-center space-x-4 cursor-pointer">
          {isLoaded ? (
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-10 h-10 rounded-full border-2 border-white shadow-lg",
                },
              }}
            />
          ) : (
            <Avatar>
              <AvatarFallback>
                <UserIcon className="w-4 h-4 text-white" />
              </AvatarFallback>
            </Avatar>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
}
