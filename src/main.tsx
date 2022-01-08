import "./main.css";

import { render } from "react-dom";

import App from "@/app/app";
import RootProvider from "@/shared/rootProvider/ui";

const root = document.getElementById("root");

render(
  <RootProvider>
    <App />
  </RootProvider>,
  root
);
