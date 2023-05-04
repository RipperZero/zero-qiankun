// import logo from "./logo.svg";
// import "./App.css";

import { registerMicroApps, start } from "qiankun";
import { FC } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

registerMicroApps([
  {
    name: "reactApp",
    entry: "//localhost:3000",
    container: "#container",
    activeRule: "/app-react",
  },
  {
    name: "vueApp",
    entry: "//localhost:8080",
    container: "#container",
    activeRule: "/app-vue",
  },
]);

start();

const App: FC = () => {
  return <div>App</div>;
};

export { App };
