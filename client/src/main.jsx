import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import routes from "./pages/routes.jsx";
import { WindowContextProvider } from "./context/WindowContext.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WindowContextProvider>
      <RouterProvider router={router} />
    </WindowContextProvider>
  </StrictMode>,
);
