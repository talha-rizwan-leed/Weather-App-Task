import axios from 'axios';
import React, { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom'

export default function Favourites({ wDetails }) {
    let [favourites, setFavourites] = useState([]);    // console.log(wDetails.id)
    const onDelete = (id) => {
        console.log("id",id);
        axios.delete(`http://localhost:5000/favourite/${id}`)
            .then((response) => {
                console.log(response);
                // Update the favourites list by filtering out the deleted item
                const newFavourites = favourites.filter((item) => item.id !== id);
                setFavourites(newFavourites);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Already Deleted")
            });
    };
    return (
        <div className="bg-white rounded-xl shadow-md relative" key={wDetails.id}>
            <div className="p-4">
                <div className="text-gray-600 my-2">{wDetails.main.temp} °C</div>
                <div className="mb-6 flex justify-between">
                    <h3 className="text-xl font-bold">{wDetails.name}</h3>
                    <img src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
                        style={{ width: '100px', height: '100px' }}
                        alt="" srcSet="" />
                </div>
                <h3 className="text-indigo-500 mb-2">{wDetails.weather[0].description}</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className="inline text-lg mb-1 mr-1" />
                        {wDetails.sys.country}
                    </div>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => onDelete(wDetails.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}