import React from "react";
import NftCard from "../components/NftCard";
import { useAuth } from "../Hooks/auth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlatformsPage = (props) => {
  const { nfts, setNfts, urlEndPoint } = props;
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
  const handlePostNfts = async () => {
    // setShouldRefetch(true);
    setSuccessMessage("");
    const response = await fetch(`${urlEndPoint}/nfts/add-many`, {
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
      <div className=' max-w-[1240] mx-auto px-2'>
        {successMessage && <p>{successMessage}</p>}
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
