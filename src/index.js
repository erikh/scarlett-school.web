import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App";
import About from "./pages/about";
import Lessons from "./pages/lessons";
import LessonsUnix from "./pages/lessons/unix";
import Contact from "./pages/contact";

import Nav from "./components/nav";
import Footer from "./components/footer";

import CssBaseline from "@mui/material/CssBaseline";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/lessons",
    element: <Lessons />,
  },
  {
    path: "/lessons/unix",
    element: <LessonsUnix />,
  },
  {
    path: "/lessons/unix/:id",
    element: <LessonsUnix />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

// --claret: #8b1e3fff;
// --flame: #d36135ff;
// --blue-munsell: #3891a6ff;
// --dun: #d7c9aaff;
// --amaranth-pink: #d999b9ff;

const theme = createTheme({
  palette: {
    primary: {
      main: "#8b1e3fff",
    },
    secondary: {
      main: "#d7c9aaff",
    },
    error: {
      main: "#d36135ff",
    },
    warning: {
      main: "#d999b9ff",
    },
    info: {
      main: "#3891a6ff",
    },
    success: grey,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
