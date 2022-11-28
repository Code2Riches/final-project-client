import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "./Toggle";

import {
  XMarkIcon,
  Cog8ToothIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { sideBar, setSideBar, handleThemeSwitch, theme, setTheme } = props;
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const showSidebar = () => setSideBar(!sideBar);
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 dark:bg-zinc-600 top-0  fixed drop-shadow-lg'>
      <div className=' px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className=' text-3xl font-bold mr-4 sm:text-4xl'>N3XTzION.</h1>
          <ul className='hidden md:flex'>
            <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400'>
              <Link to='/about'>About</Link>
            </li>
            <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400'>
              <Link to='/support'>Support</Link>
            </li>
            <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400'>
              <Link to='/platforms'>Platforms</Link>
            </li>
          </ul>
        </div>
        <div className=' hidden md:flex pr-4'>
          <div className='flex gap-5'>
            <div className=' pt-4'>
              <ToggleButton handleThemeSwitch={handleThemeSwitch} />
            </div>
            <button
              className=' rounded-full w-8 h-8 focus:outline-none focus:ring-2 focus:ring-black mr-4 mt-3'
              onClick={() => {
                showSidebar();
              }}
            >
              <ShoppingCartIcon className='w-7 rounded-full' />
            </button>
          </div>
          <button
            className='border-none bg-transparent text-black mr-4 dark:text-white dark:hover:text-indigo-400'
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </button>
          <button className='px-8 py-3 dark:hover:text-indigo-400'>
            Sign Up
          </button>
        </div>
        <div className='flex pr-4 md:hidden'>
          <div className=' pt-1 pr-4'>
            <ToggleButton handleThemeSwitch={handleThemeSwitch} />
          </div>
          {!nav ? (
            <Cog8ToothIcon
              className='w-6 mr-6'
              onClick={() => {
                handleClick();
              }}
            />
          ) : (
            <XMarkIcon
              className='w-6 mr-6'
              onClick={() => {
                handleClick();
              }}
            />
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 dark:bg-zinc-800 w-full px-8 md:hidden"
        }
      >
        <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400'>
          <Link
            to='/home'
            onClick={() => {
              handleClick();
            }}
          >
            Home
          </Link>
        </li>
        <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400'>
          <Link
            to='/about'
            onClick={() => {
              handleClick();
            }}
          >
            About
          </Link>
        </li>
        <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400'>
          <Link
            to='/support'
            onClick={() => {
              handleClick();
            }}
          >
            Support
          </Link>
        </li>
        <li className='hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400'>
          <Link
            to='/platforms'
            onClick={() => {
              handleClick();
            }}
          >
            Platforms
          </Link>
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

          <button className='bg-transparent text-indigo-600 dark:text-white dark:hover:text-indigo-400 px-8 py-3 my-2'>
            Sign In
          </button>

          <button className='px-8 py-3 dark:hover:text-indigo-400'>
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
