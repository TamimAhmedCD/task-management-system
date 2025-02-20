import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider";
import AuthContext from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <ThemeProvider>
        <ToastContainer />
          <App />
      </ThemeProvider>
    </AuthContext>
  </StrictMode>
);
