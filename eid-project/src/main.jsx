import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MainLayout from "./Layout/MainLayout";
import Home from "./components/Home";
import Store from "./components/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: ([
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "store",
        element: <Store></Store>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
