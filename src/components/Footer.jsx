import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 text-gray-300 pt-8 pb-2 px-2 '>
      <div className='col-span-2 pt-8 md:pt-2 pr-4'>
          <p className='font-bold- uppercase'>Subscribe to our newsletter</p>
          <p className='py-2'>
            The latestnews, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex flex-col sm:flex-row'>
            <input
              className=' w p-2 rounded-md mb-4 '
              type='email'
              placeholder='Enter email..'
            />
            <button className='p-2 mb-4'>Subscribe</button>
          </div>
        </div>
      <div className=' max-w-[1240] mx-auto grid grid-cols-2 md:grid-cols-3 text-center border-b-2 border-gray-600 py-2'>
        <div className=''>
          <h6 className=' font-bold uppercase'>
            Solutions
          </h6>
          <ul>
            <li className='py-1 hover:text-gray-500'>Marketing</li>
            <li className='py-1 hover:text-gray-500'>Analytics</li>
            <li className='py-1 hover:text-gray-500'>Commerce</li>
            <li className='py-1 hover:text-gray-500'>Data</li>
          </ul>
        </div>
        <div>
          <h6 className=' font-bold uppercase'>Support</h6>
          <ul>
            <li className='py-1 hover:text-gray-500'>Documentation</li>
            <li className='py-1 hover:text-gray-500'>Guides</li>
            <li className='py-1 hover:text-gray-500'>API Status</li>
            <li className='py-1 hover:text-gray-500'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className=' font-bold uppercase '>Company</h6>
          <ul>
            <li className='py-1 hover:text-gray-500'>About</li>
            <li className='py-1 hover:text-gray-500'>Blog</li>
          </ul>
        </div>
        
      </div>

      <div className=' flex flex-col max-w-[1240px] px-2 pt-4 mx-auto justify-between sm:flex-row text-center text-gray-500 dark:text-white'>
        <p className='py-4'>2022 N3XTzION. LLC All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
