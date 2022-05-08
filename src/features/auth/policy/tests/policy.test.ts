import { AppPolicy } from "../policy";

test("policy", () => {
  expect(AppPolicy).toEqual({
    administrator: {
      physicalInfo: { static: ["create", "update", "read", "delete"] },
      profile: { static: ["create", "update", "read", "delete"] },
    },
    developer: {
      physicalInfo: { static: ["create", "update", "read", "delete"] },
      profile: { static: ["create", "update", "read", "delete"] },
    },
    manager: {
      physicalInfo: { static: ["create", "update", "read", "delete"] },
      profile: { static: ["create", "update", "read", "delete"] },
    },
    general: {
      physicalInfo: { static: ["read"] },
      profile: { static: ["read"] },
    },
    guest: {
      physicalInfo: { static: ["read"] },
    },
  });
  expect(AppPolicy["administrator"]).toEqual({
    physicalInfo: { static: ["create", "update", "read", "delete"] },
    profile: { static: ["create", "update", "read", "delete"] },
  });
});
