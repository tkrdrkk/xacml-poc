export type AppAction = typeof allAppActions[number];

export const allAppActions = ["create", "update", "read", "delete"] as const;
