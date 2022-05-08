import React, { ReactNode } from "react";

type CanProps = {
  children: ReactNode;
  alternative?: ReactNode;
  data?: any;
};

export const Can = ({ children, alternative, data }: CanProps) => {
  return <>{children}</>;
};
