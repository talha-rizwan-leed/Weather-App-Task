import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

export default function Weather({ wDetails }) {
    // const location = useLocation();
    // const wDetails = location.state.wDetails;
    console.log(wDetails)
    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft /> Back
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md md:text-left grid grid-cols-2">
                                <div className='mx-1'>
                                    <div className="text-black mb-4">City Name</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="City Name"
                                        required
                                        readOnly
                                    />

                                </div>
                                <div className='mx-1'>

                                    <div className="text-black mb-4">Country</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Country Name"
                                        required
                                        readOnly
                                    />
                                </div>
                            </div>

                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}
