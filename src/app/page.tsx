"use client";

import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Navbar } from "@/components/landing/Navbar";
import { Cover } from "@/components/ui/cover";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <HeroHighlight>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Analyze your resume <br /> with <Cover>Resume AI</Cover>
      </h1>
    </HeroHighlight>

    </div>
  )
}

