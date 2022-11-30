import React from "react";
import msoda from "../assets/mutant-soda.png";
import soda from "../assets/soda.png";
import NftCard from "../components/NftCard";

const PlatformsPage = (props) => {
  const { nfts } = props;
  return (
    <div name='platforms' className='w-full my-20 pt-24'>
      <div className=' max-w-[1240] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center dark:text-white'>
          All-In-One Platform
        </h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum
          accusantium iure ab vitae itaque nihil sed! Eum, optio fuga.
        </p>

        <div className='flex flex-wrap pt-4 mx-auto gap-4 pl-12'>
          {nfts.map((nft) => {
            return <NftCard key={nft.token_id} nft={nft} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformsPage;
