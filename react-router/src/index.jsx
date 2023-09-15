import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import App from "./App";

let container = document.getElementById("root");
let root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
