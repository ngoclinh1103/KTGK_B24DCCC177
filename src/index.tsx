// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // nếu dùng Tailwind, đảm bảo file này có @tailwind directives
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
