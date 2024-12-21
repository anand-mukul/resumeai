import React from "react";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

export default function DashboardLayout({ children, params }: Props) {
  return (
    <div>
      {children} {params.slug}
    </div>
  );
}
