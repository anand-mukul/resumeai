import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  return (
    <div className="flex flex-col min-h-[70vh] w-screen px-4 py-8">
      Content for Dashboard/{params.slug}
    </div>
  );
}
