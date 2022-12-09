import React from "react";

const CartNftCart = (props) => {
  const { nft } = props;
  return (
    <div className='relative duration-75 transform hover:scale-105 flex flex-col shadow-2xl shadow-slate-800 rounded-xl text-center  bg-zinc-600 dark:bg-zinc-800 text-white w-[285px] '>
      <div>
        <img
          src={nft.image_original_url ? nft.image_original_url : nft.image_url}
          alt='/'
          className=' rounded-xl w-[285px] display-block'
        />
      </div>
      <div className=''>
        <h3 className='font-bold text-lg'>{nft.name}</h3>
        <h3 className='font-bold text-lg'>{nft.collection.name}</h3>
        <p className='text-lg pt-2 pb-4 px-2 text-left flex justify-between'>
        </p>
        <p className='text-lg pt-2 pb-4 px-2 text-center text-zinc-400 flex justify-between'>
          Last sale: 350$
          <button className=' px-2 bg-transparent  hover:bg-indigo-500 dark:bg-indigo-700/50 dark:hover:bg-indigo-500 hover:text-white'>
            Details
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartNftCart;