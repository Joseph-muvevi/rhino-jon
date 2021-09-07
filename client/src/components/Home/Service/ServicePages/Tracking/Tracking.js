import React from 'react'
import Navbar from '../../../../Navbar/Navbar'
import TrackingBanner from './TrackingBanner/TrackingBanner'
import TrackingContent from './TrackingContent/TrackingContent'
import TrackingFooter from './TrackingFooter/TrackingFooter'

const Tracking = () => {
    return (
        <div className="Tracking">
            <Navbar/>
            <TrackingBanner/>
            <TrackingContent/>
            <TrackingFooter/>
        </div>
    )
}

export default Tracking
