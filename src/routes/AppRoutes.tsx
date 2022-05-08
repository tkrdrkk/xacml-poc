import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing } from "./Landing";
import { privateRoutes } from "./private";

export type RouteElement = {
  path: string;
  element: JSX.Element;
  displayName: string;
};

const commonRoutes: RouteElement[] = [
  { path: "/", element: <Landing />, displayName: "TOP" },
];
export const routes = [...commonRoutes, ...privateRoutes];

export const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.displayName}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
