import React from "react";
import { NavBar } from '../Components/NavBar';
import { Footer } from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { CartPage } from '../Components/CartPage';

const GlobalLayouts = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <CartPage />
      <Footer />
    </div>
  );
};

export default GlobalLayouts;
