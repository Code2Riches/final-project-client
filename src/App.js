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
  const [nfts, setNfts] = useState([]);
  const [theme, setTheme] = useState("light");
  const [sideBar, setSideBar] = useState(false);
  const [signUpButton, setSignUpButton] = useState(false);
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
          signUpButton={signUpButton}
          setSignUpButton={setSignUpButton}
        />
      ),
      children: [
        {
          element: <LandingPage urlEndPoint={urlEndPoint} />,
          index: true,
        },
        {
          path: "/home",
          element: <HomePage urlEndPoint={urlEndPoint} />,
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
          element: <PlatformsPage nfts={nfts} urlEndPoint={urlEndPoint} />,
        },
        {
          path: "/pricing",
          element: <PricingPage />,
        },
        {
          path: "/login",
          element: (
            <Login
              signUpButton={signUpButton}
              setSignUpButton={setSignUpButton}
            />
          ),
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

  useEffect(() => {
    const fetchNfts = async () => {
      const result = await fetch(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x19B28d18CE73948c42328a800e5c8491F4Bd8cfC&order_direction=asc&offset=0&limit=20&include_orders=false"
      );
      const fetchedNftPayload = await result.json();
      setNfts(fetchedNftPayload.assets);
    };
    fetchNfts();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
