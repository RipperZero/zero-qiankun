import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import {
  FrameworkConfiguration,
  initGlobalState,
  loadMicroApp,
  MicroApp as MicroAppType,
} from "qiankun";

// @see https://github.com/micro-fe-solution/vite-qiankun-starter
// packages\micro-shared\src\components\MicroApp

const microAppEntryCache: any = {};
const actions = initGlobalState({ hash: "" });

let prevAppUnmountPromise: Promise<unknown> = Promise.resolve();

type MicroAppProps = {
  /** 微应用的名称 */
  name: string;
  //   /** 微应用的入口 */
  //   entry: string;
  //   /** 初始化时需要传递给微应用的数据 */
  //   props?: unknown;
} & FrameworkConfiguration;

const MicroApp: FC<MicroAppProps> = ({ name, sandbox = true }) => {
  // #region hooks start
  const location = useLocation();

  const container = useRef<HTMLDivElement>(null);
  const microApp = useRef<MicroAppType | null>(null);
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    const mount = async () => {
      if (container.current === null) {
        return;
      }

      await prevAppUnmountPromise;

      window.name = microAppEntryCache[name] ?? window.name;

      microApp.current = loadMicroApp(
        {
          name: name,
          entry: `/${name}/`,
          container: container.current,
        },
        { sandbox: sandbox },
      );

      microApp.current.mountPromise.then(() => {
        if (!!window.name) {
          microAppEntryCache[name] = window.name;
        }
      });
    };

    mount();

    return () => {
      // debugger
      prevAppUnmountPromise = Promise.resolve(microApp.current?.unmount()).then(
        () => {
          // debugger
        },
      );
    };
  }, [name, sandbox]);

  useEffect(() => {
    actions.setGlobalState(location);
  }, [location]);
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <div className="micro-wrapper" ref={container} />;
  // #endregion render functions end
};

export { MicroApp };
