import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { CartPage } from "../components/CartPage";

const GlobalLayouts = (props) => {
  const { sideBar, setSideBar } = props;
  return (
    <div>
      <NavBar sideBar={sideBar} setSideBar={setSideBar} />
      <Outlet />
      <CartPage sideBar={sideBar} setSideBar={setSideBar} />
      <Footer />
    </div>
  );
};

export default GlobalLayouts;
