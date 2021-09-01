import React from 'react'
import MetalsBanner from './MetalsBanner/MetalsBanner'
import MetalsContent from './MetalsContent/MetalsContent'
import MetalsFooter from './MetalsFooter/MetalsFooter'

const Metals = () => {
    return (
        <div className="Metals">
            <MetalsBanner/>
            <MetalsContent/>
            <MetalsFooter/>
        </div>
    )
}

export default Metals
