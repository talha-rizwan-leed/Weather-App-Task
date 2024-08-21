// import React from 'react'

import { FaArrowCircleRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// import Card from './Card'
export default function WeatherCard({ wDetails }) {

    // console.log(wDetails)
    return (
        <>
            <section className="py-4 mx-4">
                <div className="container-xl lg:container grid grid-cols-1 m-auto justify-items-center">
                    <div className="bg-gray-300 gap-4 grid grid-cols-2 p-4 rounded-lg justify-items-center">

                        {wDetails !== undefined ? (
                            <>
                                <h3 className="font-bold text-[30px]">
                                    {wDetails.name}{" "}
                                    <span className="bg-[yellow]">{wDetails.sys.country}</span>
                                </h3>
                                <h2 className="font-bold text-[30px]">{wDetails.main.temp}°C</h2>
                                <img
                                    src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
                                    alt=""
                                />
                                <p>{wDetails.weather[0].description}</p>
                                <Link
                                    to='/weather'
                                    state={{wDetails}}
                                    className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                                >
                                    Weather
                                    <FaArrowCircleRight className='inline-block mx-2 mr-0' />

                                </Link>
                            </>
                        ) : (
                            "No Data Found"
                        )}
                    </div>
                </div>
            </section >
        </>
    )
}
