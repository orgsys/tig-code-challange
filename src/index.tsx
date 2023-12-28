import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import EnvironmentCheck from "./components/EnvironmentCheck";
import Providers from "./components/Providers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <EnvironmentCheck>
      <Providers>
        <App />
      </Providers>
    </EnvironmentCheck>
  </React.StrictMode>
);
