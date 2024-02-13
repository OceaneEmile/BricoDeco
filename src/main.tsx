import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./Components//Error/ErrorPage.tsx";
import Home from "./Components/Main/Home.tsx";
import Profil from "./Components/User/Profile.tsx";
import Subscribe from "./Components/User/Subscribe.tsx";
import MainTuto from "./Components/Tutorials/MainTuto.tsx";
import Category from "./Components/Main/Category.tsx";
import EditTuto from "./Components/Tutorials/EditTuto.tsx";
import CreateTuto from "./Components/Tutorials/CreateTuto.tsx";
import AboutUs from "./Components/About/AboutUs.tsx";
import Contact from "./Components/About/Contact.tsx";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profil",
        element: <Profil />,
      },
      {
        path: "/categorie/:id",
        element: <Category />,
      },
      {
        path: "/categorie/:id/tutoriel/:id",
        element: <MainTuto />,
      },
      {
        path: "/tutoriel/:id",
        element: <MainTuto />,
      },
      {
        path: "tutoriel/edit",
        element: <EditTuto />,
      },
      {
        path: "tutoriel/create",
        element: <CreateTuto />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
