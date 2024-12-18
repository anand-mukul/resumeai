import React from "react";

type Props = {
  children: React.ReactNode;
  params: {
    slug: string;
  };
};

const SlugLayout = ({ children, params }: Props) => {
  // Query Client
  return (
    <div>
      <h1>{params.slug}</h1>
      {children}
    </div>
  );
};

export default SlugLayout;
