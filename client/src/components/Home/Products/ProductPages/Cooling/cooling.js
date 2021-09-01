import React from 'react'
import CoolingBanner from './CoolingBanner/CoolingBanner'
import CoolingContent from './CoolingContent/CoolingContent'
import CoolingFooter from './CoolingFooter/CoolingFooter'

const Cooling = () => {
    return (
        <div className="cooling">
            <CoolingBanner/>
            <CoolingContent/>
            <CoolingFooter/>
        </div>
    )
}

export default Cooling
