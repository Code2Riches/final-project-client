import React from "react";
import { useAuth } from "../Hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage(props) {
  const { saveButton, setSaveButton } = props;
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Coin, setCoin] = useState([]);
  const [Cart, setCart] = useState([]);
  const [CartHistory, setCartHistory] = useState([]);

  const auth = useAuth();
  const navigate = useNavigate();
  const { urlEndPoint } = props;

  const updateProfile = async (e) => {
    e.preventDefault();
    const result = await fetch(`${urlEndPoint}/users/update-profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: auth.userEmail,
        firstName: firstName,
        lastName: lastName,
        avatar: avatar,
      }),
    });
    const payload = await result.json();
    if (payload) {
      auth.setShouldRefresh(true);
    }
  };

  return (
    <div className='flex-1 xl:overflow-y-auto'>
      <div className='mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8'>
        {/* <h1 className="text-3xl font-bold tracking-tight text-blue-gray-900 mt-8">
          Account
        </h1> */}

        <form
          className='divide-y-blue-gray-200 mt-8 space-y-8 divide-y'
          onSubmit={updateProfile}
        >
          <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
            <div className='sm:col-span-6'>
              <h2 className='text-xl font-medium text-blue-gray-900'>
                Account Profile
              </h2>
            </div>
            <div className='sm:col-span-3'>
              <label
                htmlFor='email-address'
                className='block text-sm font-medium text-blue-gray-900'
              >
                Email address: {auth.userEmail}
              </label>
            </div>
            <br />
            <div className='sm:col-span-3'>
              <label className='block text-sm font-medium text-blue-gray-900'>
                First name: {auth.userFirstName}
              </label>
              <input
                className='mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                type='text'
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className='sm:col-span-3'>
              <label className='block text-sm font-medium text-blue-gray-900'>
                Last name: {auth.userLastName}
              </label>
              <input
                className='mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
                type='text'
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className='sm:col-span-6'>
              <label className='block text-sm font-medium text-blue-gray-900'>
                Photo/Avatar
              </label>
              <div className='mt-1 flex items-center'>
                <img
                  className='inline-block h-12 w-12 rounded-full'
                  src={auth.userAvatar}
                  alt='User Avatar'
                />

                <label className='mx-2'> Photo/Avatar: </label>
                <input
                  type='url'
                  placeholder='Url Here'
                  onChange={(e) => {
                    setAvatar(e.target.value);
                  }}
                ></input>
              </div>
              <br />

              <div className='sm:col-span-6'>
                <h2 className='text-xl font-medium text-blue-gray-900'>
                  My Coin Balance: ${auth.userCoin}
                </h2>
              </div>
              <br />
              {/* <div className="sm:col-span-6">
                <h2 className="text-xl font-medium text-blue-gray-900">
                Space for User Cart {auth.userCart}
                </h2>
              </div> */}
              <br />
              <div className='sm:col-span-6'>
                <h2 className='text-xl font-medium text-blue-gray-900'>
                  Space for User Cart History {auth.userCartHistory}
                </h2>
              </div>
            </div>
          </div>

          <div className='flex justify-end pt-8'>
            <button
              className='ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 
              py-2 px-4 text-sm font-medium text-white shadow-sm
              hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
               dark:bg-indigo-700/50  dark:hover:text-indigo-400 relative text-white rounded-lg'
            >
              Save
            </button>

            {/* {saveButton  }
              onClick={async () => {
                const saveResult = await auth.save(avatar, firstname, lastName);
                if (saveResult.success) {
                  setSaveMessage(saveResult.message);
                }
              } */}
          </div>
        </form>
      </div>
    </div>
  );
}
