import React from "react";
import msoda from "../assets/mutant-soda.png";
import soda from "../assets/soda.png";
import NftCard from "../components/NftCard";
import { useAuth } from "../Hooks/auth";
import { useState } from "react";

const PlatformsPage = (props) => {
  const { nfts, urlEndpoint } = props;
  const auth = useAuth();
  const [successMessage, setSuccessMessage] = useState("");
  const handlePostNfts = async () => {
    // setShouldRefetch(true);
    setSuccessMessage("");
    const response = await fetch(`${urlEndpoint}/nfts/add-many`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nfts: nfts,
      }),
    });
    if (response.ok !== true) {
      setSuccessMessage("Nft network request failed");
      return;
    }
    const payload = await response.json();
    if (payload.success !== true) {
      setSuccessMessage(`Nft server error", ${payload.error}`);
      return;
    }
    setSuccessMessage("Nft created successfully");
    // setShouldRefetch(false);
  };
  return (
    <div name='platforms' className='w-full my-20 pt-24'>
      <div className=' max-w-[1240] mx-auto px-2'>
      {successMessage && <p>{successMessage}</p>}
        {auth.userEmail.includes("codeimmersives.com") ? (
          <div className='text-center'>
            <button
              className='px-6 py-3 dark:hover:text-indigo-400 dark:bg-indigo-700/50'
              onClick={() => {
                handlePostNfts();
              }}
            >
              post nfts
            </button>
          </div>
        ) : null}

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
