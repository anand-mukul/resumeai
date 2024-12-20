import React from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <HeroHighlight dotColor="bg-dot-thick-red-500 dark:bg-dot-thick-red-500">
        {children}
      </HeroHighlight>
    </div>
  );
};

export default AuthLayout;
