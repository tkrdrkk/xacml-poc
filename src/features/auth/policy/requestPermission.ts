import { useAuthContext } from "../contexts/useAuthContext";
import { AppAction, AppPolicy, AppResource } from ".";
import { AppRole } from "./role";

type Response = {
  result: "permitted" | "permittedWithObligation" | "denied";
  obligation?: <T, U>(data: T) => U; // NOTE 責務 使ってない
};

// アクセス許可の問い合わせ関数
export const requestPermission = (
  action: AppAction,
  resource: AppResource
): Response => {
  const {
    currentUser: { roles },
  } = useAuthContext();

  if (roles.some((role) => checkPolicy(role, action, resource))) {
    return { result: "permitted" };
  }
  return { result: "denied" };
};

export const checkPolicy = (
  role: AppRole,
  action: AppAction,
  resource: AppResource
): boolean => {
  return (
    AppPolicy[role]?.[resource]?.static?.some((act) => {
      return act === action;
    }) || false
  );
};
