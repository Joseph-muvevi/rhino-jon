import React from 'react'
import StorageTableContent from './StorageTableContent'
import StorageTableHeader from './StorageTableHeader'

const StorageCard = ({result}) => {

    let results = result

    console.log("this is from storage card",results)

    return (
        <div className="shipment-card"> 
            <div className="shipment-card-content">
                <StorageTableHeader headers = {results}/>
                <StorageTableContent content = {results}/>
            </div>
        </div>
    )
}

export default StorageCard
