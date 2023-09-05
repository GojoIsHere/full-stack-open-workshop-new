import React from "react";
import { createRoot } from "react-dom/client";
import Head1 from "./Hello";

let container = document.getElementById("root");
let root = createRoot(container);

root.render(React.createElement(Head1));
