import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Navbar />
      <h1>Final Project</h1>

      <CartPage />
    </>
  );
}

export default App;
