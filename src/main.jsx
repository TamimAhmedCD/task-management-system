import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider";
import AuthContext from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthContext>
  </StrictMode>
);
