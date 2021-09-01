import React from 'react'
import Background from './Background/background'
import Banner from './Banner/banner'
import Products from './Products/products'
import Welcome from './welcome/welcome'
import Service from "./Service/Service"
import Homefooter from './HomeFooter/Homefooter'

const Home = () => {
    return (
        <div className="home">
           <Banner/>
           <Welcome/>
           <Background/>
           <Products/>
           <Service/>
           <Homefooter/>
        </div>
    )
}

export default Home
