import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  return <div>Dashboard/{params.slug}</div>;
}
