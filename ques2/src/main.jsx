import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./AuthContext";
import { ThemeContextProvider } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </AuthContextProvider>
);
