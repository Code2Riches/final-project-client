import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalLayouts from "./layouts/GlobalLayouts";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import PlatformsPage from "./pages/PlatformsPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

const App = () => {
  const [sideBar, setSideBar] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayouts sideBar={sideBar} setSideBar={setSideBar} />,
      children: [
        {
          element: <LandingPage urlEndPoint={urlEndPoint} />,
          index: true,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/support",
          element: <ContactPage />,
        },
        {
          path: "/platforms",
          element: <PlatformsPage />,
        },
        {
          path: "/pricing",
          element: <PricingPage />,
        },
        {
          path: "/login",
          element: <Login />,
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
