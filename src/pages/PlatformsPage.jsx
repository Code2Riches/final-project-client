import React from "react";
import NftCard from "../components/NftCard";
import { useAuth } from "../Hooks/auth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const PlatformsPage = (props) => {
  const {
    nfts,
    setNfts,
    urlEndPoint,
    leftSideBar,
    showLeftSideBar,
  } = props;
  const auth = useAuth();
  const [successMessage, setSuccessMessage] = useState("");
  const params = useParams();
  const [collection, setCollection] = useState(params.collection || "");
  const [collectionNfts, setCollectionNfts] = useState(nfts);
  const uniqueCollection = [];
  nfts.forEach((nft) => {
    //get collection name from nft
    //check if its in unique collection array
    //if not, add it
    const collectionName = nft.collection.name;
    const isInUniqueCollection = uniqueCollection.includes(collectionName);
    if (!isInUniqueCollection) {
      uniqueCollection.push(collectionName);
    }
  });
  const nftOwner = [];
  nfts.forEach((nft) => {
    const owner = nft.owner;
    if (owner === null){
      console.log('owner is null');
    } else {
      nftOwner.push(owner);
    }
  });


  useEffect(() => {
    if (collection) {
      const fetchCollection = async () => {
        const response = await fetch(
          `${urlEndPoint}/nfts/get-collection/${collection}`
        );

        const payload = await response.json();
        setCollectionNfts(payload.result);
      };
      fetchCollection();
    }
  }, [collection]);

  return (
    <div name='platforms' className='w-full my-16 pt-24'>
      <div
        onClick={() => {
          showLeftSideBar();
        }}
        className={
          !leftSideBar
            ? "flex items-center z-20 cursor-pointer absolute pt-2 text-black mx-auto "
            : "hidden"
        }
      >
        <button className='flex transition ease-in duration-100 hover:translate-x-3 bg-transparent text-black border-none fixed'>
          <FaArrowAltCircleRight className=' h-8 w-8' />
        </button>
      </div>

      <div className=' max-w-[1240] mx-auto px-2'>
        <div
          className={
            leftSideBar
              ? "overflow-y-hidden ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full sm:w-2/3 md:w-3/5 lg:w-2/5 h-screen bg-black/90 px-4 py-7 flex flex-col z-10"
              : "absolute top-0 h-screen left-[-150%] sm:left-[-100%] ease-in duration-500"
          }
        >
          <FaArrowAltCircleLeft
            className='h-8 w-8 cursor-pointer absolute top-0 right-0 mt-4 mr-4 ransition ease-in duration-100 hover:-translate-x-3'
            onClick={() => {
              showLeftSideBar();
            }}
          />
          <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8'>
              <select
                className='text-black'
                value={collection}
                onChange={(e) => {
                  setCollection(e.target.value);
                }}
              >
                <option value={""}>Select Collection</option>
                {uniqueCollection.map((collectionName, index) => {
                  return (
                    <option key={index} value={collectionName}>
                      {collectionName}
                    </option>
                  );
                })}
              </select>
            </li>
            <li className='text-2xl py-8'>
              <select
                className='text-black'
              >
                <option value={""}>Sort by Owner</option>
                {nftOwner.map((owner, index) => {
                  return (
                    <option key={index} value={owner}>
                      {owner}
                    </option>
                  );
                }
                )}
              </select>
            </li>
            <li className='text-2xl py-8'>
            <select
                className='text-black'
              >
                <option value={""}>Sort by Trait</option>
              </select>
            </li>
            <li className='text-2xl py-8'>
            <select
                className='text-black'
              >
                <option value={""}>Number on Page</option>
              </select>
            </li>
          </ul>
        </div>
        <h2 className='text-5xl font-bold text-center dark:text-white'>
          All-In-One Platform
        </h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum
          accusantium iure ab vitae itaque nihil sed! Eum, optio fuga.
        </p>
        {/* <select
          value={collection}
          onChange={(e) => {
            setCollection(e.target.value);
          }}
        >
          <option value={""}>Select Something</option>
          {uniqueCollection.map((collectionName, index) => {
            return (
              <option key={index} value={collectionName}>
                {collectionName}
              </option>
            );
          })}
        </select> */}

        <div className='flex flex-wrap pt-4 mx-auto gap-4 justify-center'>
          {collectionNfts.map((nft, index) => {
            return (
              <NftCard
                key={index}
                nft={nft}
                urlEndPoint={urlEndPoint}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformsPage;
