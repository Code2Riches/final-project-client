import React from "react";
import NftCard from "../components/NftCard";
import { useAuth } from "../Hooks/auth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const PlatformsPage = (props) => {
  
  const { nfts, setNfts, urlEndPoint, leftSideBar, showLeftSideBar } = props;
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

  useEffect(() => {
    if (collection) {
      const fetchCollection = async () => {
        const response = await fetch(
          `${urlEndPoint}/nfts/get-collection/${collection}`
        );

        console.log(collection);
        const payload = await response.json();
        setCollectionNfts(payload.result);
        console.log(nfts);
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
        className='flex items-center z-20 cursor-pointer absolute p-4 bg-black/90 text-gray-300 mx-auto'
      >
        <p className='px-2'>Options</p>
        <FaArrowAltCircleRight className=' h-8 w-8' />
      </div>

      <div className=' max-w-[1240] mx-auto px-2'>
        <div
          className={
            leftSideBar
              ? "overflow-y-scroll ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className='h-full w-full text-center pt-12'>
            <li className='text-2xl py-8'>
            <select className="text-black"
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
        </select>
            </li>
            <li className='text-2xl py-8'>
              <a href='#gallery'>Gallery</a>
            </li>
            <li className='text-2xl py-8'>
              <a href='#deals'>Deals</a>
            </li>
            <li className='text-2xl py-8'>
              <a href='#contact'>Contact</a>
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
        <select
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
        </select>

        <div className='flex flex-wrap pt-4 mx-auto gap-4 justify-start'>
          {collectionNfts.map((nft, index) => {
            return <NftCard key={index} nft={nft} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformsPage;
