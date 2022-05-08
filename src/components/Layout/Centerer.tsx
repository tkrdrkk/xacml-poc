import { Grid } from "@mui/material";
import React, { ReactNode } from "react";

export const Centerer = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      container
      direction={"column"}
      spacing={1}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {React.Children.map(children, (child) => {
        return <Grid item>{child}</Grid>;
      })}
    </Grid>
  );
};
