import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartPage from "../components/CartPage";
import { Outlet } from "react-router-dom";

const GlobalLayouts = (props) => {
  const {
    sideBar,
    setSideBar,
    handleThemeSwitch,
    theme,
    setTheme,
    signUpButton,
    setSignUpButton,
  } = props;
  return (
    <div className='dark:bg-zinc-600'>
      <Navbar
        sideBar={sideBar}
        setSideBar={setSideBar}
        handleThemeSwitch={handleThemeSwitch}
        theme={theme}
        setTheme={setTheme}
        signUpButton={signUpButton}
        setSignUpButton={setSignUpButton}
      />
      <CartPage sideBar={sideBar} setSideBar={setSideBar} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GlobalLayouts;
