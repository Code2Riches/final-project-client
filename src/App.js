import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalLayouts from "./layouts/GlobalLayouts";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import PlatformsPage from "./pages/PlatformsPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Support from "./pages/ContactPage";

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

const App = () => {
  const [theme, setTheme] = useState("light");
  const [sideBar, setSideBar] = useState(false);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <GlobalLayouts
          sideBar={sideBar}
          setSideBar={setSideBar}
          handleThemeSwitch={handleThemeSwitch}
          theme={theme}
          setTheme={setTheme}
        />
      ),
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
          element: <Support />,
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
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
