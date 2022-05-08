import { BasicButton } from "@/components/Elements/Button";
import { ContentLayout } from "@/components/Layout";
import { Centerer } from "@/components/Layout/Centerer";
import { Divider, Grid, Paper } from "@mui/material";
import { Suspense, useState } from "react";
import { useCount } from "../hooks/useCount";

export const Counter = () => {
  const { count, increase, decrease, multiple, multiplyCount, reset } =
    useCount();

  const buttons = [
    {
      action: () => {
        increase();
      },
      displayName: "+1",
    },
    {
      action: () => {
        decrease();
      },
      displayName: "-1",
    },
    {
      action: () => {
        multiple(2);
      },
      displayName: "*2",
    },
    {
      action: () => {
        reset();
      },
      displayName: "reset",
    },
  ];
  return (
    <ContentLayout>
      <Centerer>
        <h1>Counter</h1>
        <Paper variant="outlined" sx={{ px: 3, py: 2 }}>
          <Centerer>
            <div>count is {count}</div>
            <div>multipleCount is {multiplyCount}</div>
            <Grid container direction="row" spacing={1}>
              {buttons.map((button) => {
                return (
                  <Grid item key={button.displayName}>
                    <BasicButton
                      onClick={button.action}
                      displayName={button.displayName}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Centerer>
        </Paper>
      </Centerer>
    </ContentLayout>
  );
};
