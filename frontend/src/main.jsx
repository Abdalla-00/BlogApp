import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistarPage from "./page/registarPage";
import LoginPage from "./page/LoginPage";
import DashboardPage from "./page/DashboardPage";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./hooks/useUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/registar",
        element: <RegistarPage />,
      },
      {
        path: "/LoginPage",
        element: <LoginPage />,
      },
      {
        path: "/Dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <Toaster />
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
