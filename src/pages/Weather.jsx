/* eslint-disable react/jsx-no-duplicate-props */
import moment from "moment";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Weather() {
    const location = useLocation();
    const wDetails = location.state.wDetails;
    // console.log(wDetails);
    return (
        <>
            {/* <section>
                <div className="container m-auto py-6 px-6 inline-flex justify-between">
                    <Link
                        to="/"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft /> Back
                    </Link>
                    <h1 className="flex justify-end">{moment.unix(wDetails.dt).format('LLLL')}</h1>
                </div>
            </section> */}
            <section>
                <div className="container m-auto py-6 px-6 flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className="mx-1" /> Back
                    </Link>
                    <h1 className="text-right">{moment.unix(wDetails.dt).format('LLLL')}</h1>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md md:text-left grid md:grid-cols-2">
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">City Name</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={wDetails.name}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Country</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={wDetails.sys.country}
                                        required
                                        readOnly
                                    />
                                </div>
                            </div>

                            {/* Latitude & Longitude */}
                            <h1 className="text-3xl my-1">Coords</h1>
                            <div className="bg-white p-6 rounded-lg shadow-md md:text-left grid md:grid-cols-2">
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Latitude</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={wDetails.coord.lat}
                                        required
                                        readOnly
                                    />
                                </div>

                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Longitude</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={wDetails.coord.lon}
                                        required
                                        readOnly
                                    />
                                </div>
                            </div>
                            <h1 className="text-3xl my-1">Sun Rise and Sun Set</h1>
                            <div className="bg-white p-6 rounded-lg shadow-md md:text-left grid md:grid-cols-2">
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Sunrise</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        required
                                        readOnly
                                        value={moment.unix(wDetails.sys.sunrise).format('hh:mm A')}
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Sunset</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        required
                                        readOnly
                                        value={moment.unix(wDetails.sys.sunset).format('hh:mm A')}
                                    />
                                </div>
                            </div>
                            <h1 className="my-1 text-3xl text-bold">Details</h1>
                            <div className="bg-white p-6 rounded-lg shadow-md md:text-left grid md:grid-cols-4">
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Feels Like</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={`${wDetails.main.feels_like} °C`}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Grnd Level</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={wDetails.main.grnd_level}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Humidity</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={`${wDetails.main.feels_like} %`}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Pressure</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={`${wDetails.main.pressure} hPa`}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Sea Level</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={`${wDetails.main.sea_level} hPa`}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Temperature</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={`${wDetails.main.temp} °C`}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Max Temperature</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={`${wDetails.main.temp_max} °C`}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Min Temperature</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={`${wDetails.main.temp_min} °C`}
                                        required
                                        readOnly
                                    />
                                </div>
                            </div>
                            <h1 className="text-3xl my-1">Weather</h1>
                            <div className="bg-white p-6 rounded-lg shadow-md md:text-left grid md:grid-cols-2">
                                <div className="mx-1 mt-1">
                                    <div className="text-black mb-4">Description</div>
                                    <input
                                        type="search"
                                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-b-gray-50 "
                                        value={wDetails.weather[0].description}
                                        required
                                        readOnly
                                    />
                                </div>
                                <div className="mx-2 mt-1 flex flex-col items-center">
                                    <img
                                        src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
                                        alt=""
                                        className="mb-1"
                                    />
                                    <p className="text-center">{wDetails.weather[0].main}</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
}
