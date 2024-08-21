import { useState } from "react";
import WeatherCard from '../components/WeatherCard'
import Spinner from "../components/SpinLoad";
import { toast } from "react-toastify";

export default function Hero({
    title = "Weather Forecasting App",
    subtitle = "The Portal Where you can search",
}) {
    let [city, setCity] = useState("");
    let [wDetails, setWDetails] = useState();
    let [loading, setLoading] = useState(true);

    const handleSearch = (event) => {
        event.preventDefault();
        const cityValue = event.target.elements.city.value;
        setCity(cityValue);
        fetchWeatherData(cityValue);
    };

    const fetchWeatherData = async (city) => {
        try {
            setTimeout(async () => {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7715841c6944dd0d98f822a9495e2a7e&units=metric`
                );
                const data = await response.json();
                if (data.cod === "404") {
                    setWDetails(undefined);
                    toast.error("Error 404, Data Not Found !");
                } else {
                    setWDetails(data);
                }
            }, 0); // 2000ms = 2 seconds
        } catch (error) {
            console.log("Error fetching weather data", error);
        }
        finally {
            setLoading(false)
        }
        setCity("");
    };


    // console.log(wDetails)

    return (
        <>
            <section className="bg-indigo-700 py-20 mb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            {title}
                        </h1>
                        <p className="my-4 text-xl text-white">{subtitle}</p>
                    </div>
                </div>
                {/* Input Search */}

                <form onSubmit={handleSearch} className="max-w-md mx-auto">
                    <label
                        htmlFor="city"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        <input
                            type="search"
                            id="city"
                            name="city"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search City..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </section>
            <WeatherCard wDetails={wDetails} />
        </>
    );
}