import React from 'react'
import AdvisoryBanner from './AdvisoryBanner/AdvisoryBanner'
import AdvisoryContent from './AdvisoryContent/AdvisoryContent'
import AdvisoryFooter from './AdvisoryFooter/AdvisoryFooter'

const Advisory = () => {
    return (
        <div className="storage">
            <AdvisoryBanner/>
            <AdvisoryContent/>
            <AdvisoryFooter/>
        </div>
    )
}

export default Advisory
