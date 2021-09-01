import React from 'react'
import LinkagesBanner from './LinkagesBanner/LinkagesBanner'
import LinkagesContent from './LinkagesContent/LinkagesContent'
import LinkagesFooter from './LinkagesFooter/LinkagesFooter'

const Linkages = () => {
    return (
        <div className="storage">
            <LinkagesBanner/>
            <LinkagesContent/>
            <LinkagesFooter/>
        </div>
    )
}

export default Linkages
