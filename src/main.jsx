import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import Title from "./Title";
import Home from "./Component/Home";
import About from "./Pages/About";
import Experiences from "./Pages/Experiences";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import NotFound from "./NotFoundPage/NotFound";
import "./index.css";
import Language from "./Details/Language";
import AirTicket from "./Details/AirTicket";
import Library from "./Details/Library";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Title title="Home | Md. Ekramul Hoque" />
            <Home />
          </>
        ),
      },
      {
        path: "about",
        element: (
          <>
            <Title title="About | Md. Ekramul Hoque" />
            <About />
          </>
        ),
      },
      {
        path: "experiences",
        element: (
          <>
            <Title title="Experiences | Md. Ekramul Hoque" />
            <Experiences />
          </>
        ),
      },
      {
        path: "project",
        element: (
          <>
            <Title title="Project | Md. Ekramul Hoque" />
            <Project />
          </>
        ),
      },
      {
        path: "contact",
        element: (
          <>
            <Title title="Contact | Md. Ekramul Hoque" />
            <Contact />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <Title title="Page Not Found" />
        <NotFound />
      </>
    ),
  },

  // This route is for showing the details of a specific project
  {
    path: "project/:id", // Dynamic route for project details
    element: (
      <>
        <Title title="Project Details | Md. Ekramul Hoque" />
        <Library /> 
      </>
    ),
  },
  {
    path: "3",
    element: (
      <>
        <Title title="Details | Learning language" />
        <Language />
      </>
    ),
  },

  {
    path: "2",
    element: (
      <>
        <Title title="Details | Air Ticket" />
        <AirTicket />
      </>
    ),
  },
  
  {
    path: "1",
    element: (
      <>
        <Title title="Details | Book Library" />
        <Library />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
