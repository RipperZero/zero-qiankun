import { FC } from "react";

import { ErrorBoundary } from "./ErrorBoundary";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <div>ROOT</div>
    </ErrorBoundary>
  );
};

export { App };
