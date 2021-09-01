import React from 'react'
import BrokerageBanner from './BrokerageBanner/BrokerageBanner'
import BrokerageContent from './BrokerageContent/BrokerageContent'
import BrokerageFooter from './BrokerageFooter/BrokerageFooter'

const Brokerage = () => {
    return (
        <div className="storage">
            <BrokerageBanner/>
            <BrokerageContent/>
            <BrokerageFooter/>
        </div>
    )
}

export default Brokerage
