import React, { createContext } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <App />
  </Context.Provider>
);
