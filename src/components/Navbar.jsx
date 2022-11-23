import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartPage from "../pages/CartPage";

import {
  XMarkIcon,
  Cog8ToothIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = (props) => {
  const { sideBar, setSideBar } = props;
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const showSidebar = () => setSideBar(!sideBar);
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200  fixed drop-shadow-lg'>
      <div className=' px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className=' text-3xl font-bold mr-4 sm:text-4xl'>N3XTzION.</h1>
          <ul className='hidden md:flex'>
            <li className=''>Home</li>
            <li className=''>About</li>
            <li className=''>Support</li>
            <li className=''>Platforms</li>
            <li className=''> Pricing</li>
          </ul>
        </div>
        <div className=' hidden md:flex pr-4'>
          <div
            className=''
            onClick={() => {
              showSidebar();
            }}
          >
            <button className=' rounded-full focus:outline-none focus:ring-2 focus:ring-black mr-4 mt-3'>
              <ShoppingCartIcon className='w-5 ' />
            </button>
          </div>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign in
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div
          className='md:hidden'
          onClick={() => {
            handleClick();
          }}
        >
          {!nav ? (
            <Cog8ToothIcon className='w-5' />
          ) : (
            <XMarkIcon className='w-5' />
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 md:hidden"
        }
      >
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Support</li>
        <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
        <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
        <div className='flex flex-col my-4'>
          <div
            className=''
            onClick={() => {
              showSidebar();
            }}
          >
            <button className=' rounded-full focus:outline-none focus:ring-2 focus:ring-black mr-4 mt-3'>
              <ShoppingCartIcon className='w-5 ' />
            </button>
          </div>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>
            Sign in
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
