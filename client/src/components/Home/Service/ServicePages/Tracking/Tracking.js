import React from 'react'
import TrackingBanner from './TrackingBanner/TrackingBanner'
import TrackingContent from './TrackingContent/TrackingContent'
import TrackingFooter from './TrackingFooter/TrackingFooter'

const Tracking = () => {
    return (
        <div className="Tracking">
            <TrackingBanner/>
            <TrackingContent/>
            <TrackingFooter/>
        </div>
    )
}

export default Tracking
