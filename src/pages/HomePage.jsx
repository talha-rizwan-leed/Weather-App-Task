import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import Favourite from './Favourite'
// import WeatherCard from '../components/WeatherCard'

export default function HomePage() {
    return (
        <>

            <Hero />
            {/* <WeatherCard /> */}
            <HomeCard />
            <Favourite isHome={true}/>

        </>
    )
}
