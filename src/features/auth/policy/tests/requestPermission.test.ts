import { AppAction } from "../action";
import { checkPolicy, requestPermission } from "../requestPermission";
import { AppResource } from "../resource";
import { AppRole } from "../role";

describe.each([
  ["create" as AppAction, "profile" as AppResource, { result: "permitted" }],
  [
    "delete" as AppAction,
    "physicalInfo" as AppResource,
    { result: "permitted" },
  ],
])("reqPermit %s %s", (action, resource, expected) => {
  expect(requestPermission(action, resource)).toEqual(expected);
});

test("checkPolicy", () => {
  expect(
    checkPolicy(
      "administrator" as AppRole,
      "create" as AppAction,
      "profile" as AppResource
    )
  ).toBe(true);
});
