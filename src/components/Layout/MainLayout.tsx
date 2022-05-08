import React from "react";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      under the control of MainLayout.
      <div>{children}</div>
    </div>
  );
};
