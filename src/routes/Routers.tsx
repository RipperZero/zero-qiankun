import { FC } from "react";
import { useRoutes } from "react-router-dom";

import { routesConfig } from "./config";

const Routes: FC = () => {
  // #region hooks start
  const elements = useRoutes(routesConfig);
  // #endregion hooks end

  // #region render functions start
  return <>{elements}</>;
  // #endregion render functions end
};

export { Routes };
