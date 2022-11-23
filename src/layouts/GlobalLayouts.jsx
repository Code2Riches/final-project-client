import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartPage from "../components/CartPage";
import { Outlet } from "react-router-dom";

const GlobalLayouts = (props) => {
  const { sideBar, setSideBar } = props;
  return (
    <div>
      <Navbar sideBar={sideBar} setSideBar={setSideBar} />
      <CartPage sideBar={sideBar} setSideBar={setSideBar} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GlobalLayouts;
