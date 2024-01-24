import React from "react";
import { createRoot } from "react-dom/client";
import Head1 from "./App";

let container = document.getElementById("root");
let root = createRoot(container);

root.render(React.createElement(Head1));
