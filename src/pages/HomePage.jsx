import React from "react";
import { useAuth } from "../Hooks/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CloudArrowDownIcon,
  CloudIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
import soda from "../assets/soda.png";


function HomePage(props) {
  const {urlEndpoint} = props;
  const [message, setMessage] = useState("");
  const auth = useAuth();
const navigate = useNavigate();

  useEffect(()=>{
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
        },
      });
      setMessage(await response.message);
    }
    if(auth.userToken){
      fetchMessage();
    }
    if(!auth.userToken){
      setMessage("")
    }
  },[auth.userToken])
  return (
    <div
      name='home'
      className='w-full h-screen bg-zinc-200 dark:bg-zinc-700 flex flex-col justify-between'
    >
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className=' flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl dark:text-gray-300'>
            N3XTzION. Marketplace
          </p>
          <h1 className='py-3 text- 5xl md:text-7xl font-bold dark:text-gray-300'>
            NFT Market
          </h1>
          <p className='text-2xl dark:text-gray-300'>This is our MarketPlace</p>
          <button className='py-3 px-6 sm:w-[60%] my-4 dark:hover:text-indigo-400 dark:bg-indigo-700/50'
            onClick={()=>{
              navigate("/platforms")
            }}>
            Get Started
          </button>
        </div>
        <div>
          <img className=' w-full rounded-3xl shadow-xl' src={soda} alt='/' />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[560px] bottom-[5%] mx-1 md:left-1/3 transform md:translate-x-1/4 bg-zinc-200 dark:bg-zinc-800 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p className='dark:text-gray-300'> Data Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500 dark:text-gray-400'>
              <CloudArrowDownIcon className='h-6 text-indigo-600' /> Other Soda
            </p>
            <p className='flex px-4 py-2 text-slate-500 dark:text-gray-400'>
              <ServerIcon className='h-6 text-indigo-600' /> Board Design
            </p>
            <p className='flex px-4 py-2 text-slate-500 dark:text-gray-400'>
              <CloudIcon className='h-6 text-indigo-600' />
              Cloud Data
            </p>
            <p className='flex px-4 py-2 text-slate-500 dark:text-gray-400'>
              <PaperAirplaneIcon className='h-6 text-indigo-600' />
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
