import React, { useEffect, useState } from 'react'
import Spinner from '../components/SpinLoad'
import Favourites from '../components/Favourites';

export default function Favourite({isHome = false}) {
    const [favourite, setFavourite] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl=isHome ?
        'http://localhost:5000/favourite?_limit=3':
        'http://localhost:5000/favourite'
        const fetchfavt = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const response = await fetch(apiUrl)
                const data = await response.json()
                setFavourite(data)

            } catch (error) {
                console.log('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchfavt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
        <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        My Favourite
                    </h2>

                    {loading ? (
                        <Spinner loading={loading} />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {favourite.map((favourite, i) => (
                                <Favourites wDetails={favourite} key={i} />
                            ))}
                        </div>

                    )}
                </div>
            </section >
        </>
    )
}
