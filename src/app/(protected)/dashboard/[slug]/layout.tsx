import React from "react";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

export default function DashboardSlugLayout({ children, params }: Props) {
  return (
    <div className="flex flex-col min-h-[70vh] w-screen px-4 py-8">
      <header className="flex justify-between items-center">
        <h1>Dashboard: {params.slug}</h1>
      </header>
      <main className="flex flex-col min-h-[70vh] w-screen px-4 py-8">
        {children}
      </main>
    </div>
  );
}
