import { FC } from "react";
// import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "routes";

// import { registerMicroApps, start } from "qiankun";
// import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";

// import { Router } from "./Router";

// const render = (loading: boolean) => {
//   const container = document.getElementById("subapp-container");

//   console.log("------container");
//   console.log(container);
//   // ReactDOM.render(<div id="micro-wrapper" />, container);
//   createRoot(container as HTMLElement).render(<div></div>);
// };

// registerMicroApps([
//   {
//     name: "zero-test-factory",
//     entry: "http://localhost:3000",
//     container: "#micro-wrapper",
//     loader: (loading) => {
//       console.log("------");
//       console.log(loading);
//       render(loading);
//     },
//     activeRule: "/zero-test-factory",
//   },
//   {
//     name: "vueApp",
//     entry: "//localhost:5173",
//     container: "#micro-wrapper",
//     activeRule: "/zero-vue",
//   },
// ]);

// start();

const App: FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ErrorBoundary>
    // <div>ROOT</div>
  );
};

export { App };
