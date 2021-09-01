import React from 'react'
import AirBanner from './AirBanner/AirBanner'
import AirContent from './AirContent/AirContent'
import AirFooter from './AirFooter/AirFooter'

const Air = () => {
    return (
        <div className="storage">
            <AirBanner/>
            <AirContent/>
            <AirFooter/>
        </div>
    )
}

export default Air
