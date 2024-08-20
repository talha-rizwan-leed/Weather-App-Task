// import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { FaArrowCircleRight } from 'react-icons/fa'
export default function HomeCard() {
    return (
        <>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <Card>

                            <h2 className="text-2xl font-bold">Weather</h2>
                            <p className="mt-2 mb-4">
                                Browse more details about weather
                            </p>
                            <Link
                                to="/weather"
                                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                            >
                                Weather
                                <FaArrowCircleRight className='inline-block mx-2 mr-0' />

                            </Link>
                        </Card>
                        <Card bg='bg-indigo-100'>
                            <h2 className="text-2xl font-bold">My Favourite</h2>
                            <p className="mt-2 mb-4">
                                List where you see about your favourite spots
                            </p>
                            <Link
                                to="/favourite"
                                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                            >
                                My Favourite
                                <FaArrowCircleRight className='inline-block mx-2 mr-0' />
                            </Link>
                        </Card>
                    </div>
                </div>
            </section >
        </>
    )
}
