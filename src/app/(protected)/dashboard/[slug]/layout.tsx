import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

export default async function DashboardSlugLayout({ children, params }: Props) {
  const slug = params.slug;
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Dashboard: {slug}</h1>
      </header>
      <main className="dashboard-main">{children}</main>
    </div>
  );
}
