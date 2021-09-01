import React from 'react'
import MilitaryBanner from './MilitaryBanner/MilitaryBanner'
import MilitaryContent from './MilitaryContent/MilitaryContent'
import MilitaryFooter from './MilitaryFooter/MilitaryFooter'

const Military = () => {
    return (
        <div className="Military">
            <MilitaryBanner/>
            <MilitaryContent/>
            <MilitaryFooter/>
        </div>
    )
}

export default Military
