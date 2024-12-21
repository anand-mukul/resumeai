import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <HeroHighlight
        className="h-screen"
        dotColor="bg-dot-thick-pink-500 dark:bg-dot-thick-pink-500"
      >
        <DashboardNavbar />
        <div className="h-full pt-[5rem] lg:pt-[4rem]">
          <div>{children}</div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default DashboardLayout;
