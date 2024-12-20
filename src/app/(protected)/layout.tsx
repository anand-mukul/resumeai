import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <HeroHighlight dotColor="bg-dot-thick-pink-500 dark:bg-dot-thick-pink-500">
        <DashboardNavbar />
        <div className="pt-[72px]">{children}</div>
      </HeroHighlight>
    </div>
  );
};

export default DashboardLayout;
