import { routes } from "@/routes/AppRoutes";
import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BasicButton } from "../Elements/Button";
import { Centerer } from "./Centerer";

type Props = {
  children: React.ReactNode;
};

export const ContentLayout = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <Centerer>
      <div>under the control of ContentLayout.</div>
      <div>{children}</div>
      <Grid container direction="row" spacing={1}>
        {routes.map((route) => {
          return (
            <Grid item key={route.displayName}>
              <BasicButton
                key={route.displayName}
                onClick={() => {
                  navigate(route.path);
                }}
                displayName={route.displayName}
              />
            </Grid>
          );
        })}
        <Grid item>
          <BasicButton
            onClick={() => {
              navigate(-1);
            }}
            displayName="back"
          />
        </Grid>
      </Grid>
    </Centerer>
  );
};
