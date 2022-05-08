import { AppAction, allAppActions } from "./action";
import { AppResource, allAppResources } from "./resource";
import { AppRole } from "./role";

type Rule = {
  [key in AppResource]?: {
    static?: AppAction[];
    dynamic?: <T>(data: T) => boolean;
  };
};
type Policy = {
  [key in AppRole]?: Rule;
};

/**
 * 全リソースへのstaticな権限を与えるルールを作成する関数
 * @param {AppAction[]} actions - 均一な権限を与えるアクションの配列
 * @returns {Rule} - ルールオブジェクト
 */
const getFlatAccess = (actions: AppAction[]): Rule => {
  return Object.fromEntries(
    allAppResources.map((rsc) => {
      return [rsc, { static: [...actions] }];
    })
  );
};

/**
 * 全リソースへのフルアクセス許可を持つルールを作成する関数
 * @returns {Rule} - ルールオブジェクト
 */
const getFullAccess = () => {
  return getFlatAccess([...allAppActions]);
};

export const AppPolicy: Policy = {
  administrator: getFullAccess(),
  developer: getFullAccess(),
  manager: getFullAccess(),
  general: getFlatAccess(["read"]),
  guest: { physicalInfo: { static: ["read"] } },
};
