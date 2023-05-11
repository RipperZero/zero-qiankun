import { RouteObject } from "react-router-dom";

import { MicroApp } from "components/MicroApp";

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <div>ROOT</div>,
    // children: [
    //   {
    //     path: "zero-test-factory",
    //     element: (
    //       <MicroApp
    //         name="zero-test-factory"
    //         sandbox={{ experimentalStyleIsolation: true }}
    //       />
    //     ),
    //   },
    // ],
  },
  {
    path: "/zero-test-factory",
    element: (
      <MicroApp
        name="zero-test-factory"
        sandbox={{ experimentalStyleIsolation: true }}
      />
    ),
  },
];

export { routesConfig };
