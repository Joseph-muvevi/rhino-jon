import React from 'react'
import Footer from '../Footer/footer'
import Background from './Background/background'
import Banner from './Banner/banner'
import Products from './Products/products'
import Welcome from './welcome/welcome'

const Home = () => {
    return (
        <div className="home">
           <Banner/>
           <Welcome/>
           <Background/>
           <Products/>
           <Footer/>
        </div>
    )
}

export default Home
