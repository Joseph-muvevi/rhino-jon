import React from 'react'
import Footer from '../Footer/footer'
import ServicesBanner from './servicesBanner/servicesBanner'
import ServiceContent from './ServicesContent/serviceContent'

const Service = () => {
    return (
        <div className="service">
            <ServicesBanner/>
            <ServiceContent/>
            <Footer/>
        </div>
    )
}

export default Service
