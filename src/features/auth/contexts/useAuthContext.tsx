import React, { useEffect, useState } from "react";
import { AppRole } from "../policy";

type CurrentUser = {
  name: string;
  roles: AppRole[];
};

export const useAuthContext = () => {
  // TODO ユーザー情報コンテクスト化
  //   const [currentUser, setCurrentUser] = useState<CurrentUser>(
  //     {} as CurrentUser
  //   );
  //   useEffect(() => {
  //     setCurrentUser(
  //       { name: "munashi", roles: ["administrator"] }
  //     );
  //   }, []);
  const currentUser = {
    name: "munashi",
    roles: ["administrator"] as AppRole[],
  };
  return { currentUser };
};
