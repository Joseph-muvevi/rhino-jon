import React from 'react'
import Navbar from '../Navbar/Navbar'
// import Background from './Background/background'
import Banner from './Banner/banner'
import LowerNavs from './LowerNavs/LowerNavs'
// import Products from './Products/products'
// import Welcome from './welcome/welcome'
// import Service from "./Service/Service"
// import Homefooter from './HomeFooter/Homefooter'

const Home = () => {
    return (
        <div className="home">
           <Banner/>
           {/* <Welcome/>
           <Products/>
           <Background/>
           <Service/>
           <Homefooter/> */}
           <div className="lower-nav">
                <LowerNavs/>
           </div>
        </div>
    )
}

export default Home
