import React, { Suspense, useState } from "react";
import Button from "@mui/material/Button";

export const BasicButton = ({
  displayName,
  onClick,
  disabled,
  loading,
}: {
  displayName: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <Button variant="outlined" disabled={loading} onClick={handleClick}>
      {displayName}
    </Button>
  );
};
