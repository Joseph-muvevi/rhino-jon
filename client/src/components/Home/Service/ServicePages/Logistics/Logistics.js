import React from 'react'
import LogisticsBanner from './LogisticsBanner/LogisticsBanner'
import LogisticsContent from './LogisticsContent/LogisticsContent'
import LogisticsFooter from './LogisticsFooter/LogisticsFooter'

const Logistics = () => {
    return (
        <div className="storage">
            <LogisticsBanner/>
            <LogisticsContent/>
            <LogisticsFooter/>
        </div>
    )
}

export default Logistics
