import React from 'react'
import Footer from '../Footer/footer'
import AboutBanner from './AboutBanner/AboutBanner'
import AboutWelcome from './AboutWelcome/aboutWelcome'

const About = () => {
    return (
        <div className="about">
            <AboutBanner/>
            <AboutWelcome/>
            <Footer/>
        </div>
    )
}

export default About
