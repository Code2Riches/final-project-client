import React from 'react'
import { useAuth } from "../Hooks/auth";

const ProfilePage = () => {
  const auth = useAuth();

  return (
    <div className="flex-1 xl:overflow-y-auto">
                  <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-blue-gray-900 mt-8">Account</h1>

                    <form className="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-gray-900">Profile</h2>
                          {/* <p className="mt-1 text-sm text-blue-gray-500">
                            This information will be displayed publicly so be careful what you share.
                          </p> */}
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-blue-gray-900">
                             Email address: {auth.userEmail}
                        </label>
                        </div><br/>

                        <div className="sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium text-blue-gray-900">
                            First name:
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium text-blue-gray-900">
                            Last name:
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="photo" className="block text-sm font-medium text-blue-gray-900">
                            Photo
                          </label>
                          <div className="mt-1 flex items-center">
                            <img
                              className="inline-block h-12 w-12 rounded-full"
                              src={auth.userAvatar}
                              alt=""
                            />
                            <div className="ml-4 flex">
                              <div className="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-blue-gray-50">
                                <label
                                  htmlFor="user-photo"
                                  className="pointer-events-none relative text-sm font-medium text-blue-gray-900"
                                >
                                  <span>Change</span>
                                  <span className="sr-only"> user photo</span>
                                </label>
                                <input
                                  id="user-photo"
                                  name="user-photo"
                                  type="file"
                                  className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                />
                              </div>
                              <button
                                type="button"
                                className="ml-3 rounded-md border border-transparent bg-black py-2 px-3 text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:border-blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-gray-50"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="sm:col-span-6">
                            <br/>
                            <h2 className="text-xl font-medium text-blue-gray-900">${auth.userCoin}</h2>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end pt-8">
                        <button
                          type="button"
                          className="rounded-md border border-gray-300 bg-blue-200 py-2 px-4 text-sm font-medium text-blue-gray-900 shadow-sm hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
  )
}

export default ProfilePage