import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import AuthProvider from "./assets/Providers/AuthProvider";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HelmetProvider>
        <Root></Root>
      </HelmetProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <HelmetProvider>
            <Home></Home>
          </HelmetProvider>
        ),
      },
      {
        path: "/profile",
        element: (
          <HelmetProvider>
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          </HelmetProvider>
        ),
      },
      {
        path: "/login",
        element: (
          <HelmetProvider>
            <Login></Login>
          </HelmetProvider>
        ),
      },
      {
        path: "/register",
        element: (
          <HelmetProvider>
            <Register></Register>
          </HelmetProvider>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <HelmetProvider>
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          </HelmetProvider>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
