import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartPage from "../components/Cart";
import { Outlet } from "react-router-dom";
import ControlBar from "../components/ControlBar";

const GlobalLayouts = (props) => {
  const {
    showLeftSideBar,
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
