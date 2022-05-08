export type AppRole = typeof allAppRoles[number];

export const allAppRoles = [
  "guest",
  "general",
  "manager",
  "administrator",
  "developer",
] as const;
