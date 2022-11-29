import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 text-gray-300 pt-2 pb-2 px-2 '>
      <div className=' max-w-[1240] mx-auto grid grid-cols-2 md:grid-cols-3 text-center border-b-2 border-gray-600 py-2'>
        <div className=''>
          <h6 className=' font-bold uppercase'>
            Solutions
          </h6>
          <ul>
            <li className='py-0 hover:text-gray-500'>Marketing</li>
            <li className='py-0 hover:text-gray-500'>Analytics</li>
            <li className='py-0 hover:text-gray-500'>Commerce</li>
            <li className='py-0 hover:text-gray-500'>Data</li>
          </ul>
        </div>
        <div>
          <h6 className=' font-bold uppercase'>Support</h6>
          <ul>
            <li className='py-0 hover:text-gray-500'>Documentation</li>
            <li className='py-0 hover:text-gray-500'>Guides</li>
            <li className='py-0 hover:text-gray-500'>API Status</li>
            <li className='py-0 hover:text-gray-500'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className=' font-bold uppercase '>Company</h6>
          <ul>
            <li className='py-0 hover:text-gray-500'>
              <Link to='/about'>About</Link>
            </li>
            <li className='py-0 hover:text-gray-500'>Blog</li>
          </ul>
        </div>
        
      </div>

      <div className=' flex flex-col max-w-[1240px] px-0 pt-0 mx-auto justify-between text-center text-gray-500 dark:text-white'>
        <p className='py-4'>2022 N3XTzION. LLC All rights reserved</p>
        
      </div>
    </div>
  );
};

export default Footer;
