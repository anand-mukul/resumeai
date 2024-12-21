import React from "react";

type Props = {
  children: React.ReactNode;
};

export default async function DashboardSlugLayout({ children }: Props) {
  
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Dashboard: </h1>
      </header>
      <main className="dashboard-main">{children}</main>
    </div>
  );
}
