import { Counter } from "@/features/counter";
import { Profile } from "@/features/user/components";
import { RouteElement } from "./AppRoutes";

export const privateRoutes: RouteElement[] = [
  { path: "/profile", element: <Profile />, displayName: "PROFILE" },
  { path: "/counter", element: <Counter />, displayName: "COUNTER" },
];
