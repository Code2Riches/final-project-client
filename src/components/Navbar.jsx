import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  XMarkIcon,
  Cog8ToothIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { sideBar, setSideBar } = props;
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const showSidebar = () => setSideBar(!sideBar);
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 top-0  fixed drop-shadow-lg'>
      <div className=' px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className=' text-3xl font-bold mr-4 sm:text-4xl'>N3XTzION.</h1>
          <ul className='hidden md:flex'>
            <li className='hover:text-indigo-600'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='hover:text-indigo-600'>
              <Link to='/about'>About</Link>
            </li>
            <li className='hover:text-indigo-600'>
              <Link to='/support'>Support</Link>
            </li>
            <li className='hover:text-indigo-600'>
              <Link to='/platforms'>Platforms</Link>
            </li>
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
              <ShoppingCartIcon className='w-8 ' />
            </button>
          </div>
          <button
            className='border-none bg-transparent text-black mr-4'
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div
          className=' pr-4 md:hidden'
          onClick={() => {
            handleClick();
          }}
        >
          {!nav ? (
            <Cog8ToothIcon className='w-6 mr-6' />
          ) : (
            <XMarkIcon className='w-6 mr-6' />
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 md:hidden"
        }
      >
        <li className='hover:text-indigo-600'>
          <Link to='/home'>Home</Link>
        </li>
        <li className='hover:text-indigo-600'>
          <Link to='/about'>About</Link>
        </li>
        <li className='hover:text-indigo-600'>
          <Link to='/support'>Support</Link>
        </li>
        <li className='hover:text-indigo-600'>
          <Link to='/platforms'>Platforms</Link>
        </li>
        <div className='flex flex-col my-4'>
          <div
            className=''
            onClick={() => {
              showSidebar();
            }}
          >
            <button className=' rounded-full focus:outline-none focus:ring-2 focus:ring-black mr-4 mt-3'>
              <ShoppingCartIcon className='w-6 ' />
            </button>
          </div>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-2 mt-2'>
            Sign in
          </button>

          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
