import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import MyPortfolio from "./views/main";
import AdminLayout from "./layouts/admin";
import Dashboard from "./views/admin/Dashboard";
import Projects from "./views/admin/Projects";
import Skills from "./views/admin/Skills";
import Messages from "./views/admin/Messages";
import Testimonials from "./views/admin/Testimonials";
import Experiences from "./views/admin/Experiences";
import MyProfile from "./views/admin/MyProfile";
import Settings from "./views/admin/Settings";
import NotFoundAdmin from "./views/admin/error/NotFoundAdmin";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"my-portfolio"} />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "my-portfolio",
      element: <MyPortfolio />,
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "testimonials",
          element: <Testimonials />,
        },
        {
          path: "experiences",
          element: <Experiences />,
        },
        {
          path: "profile",
          element: <MyProfile />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "*",
          element: <NotFoundAdmin />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
