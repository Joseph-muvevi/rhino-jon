import React from 'react'
import StorageTableContent from './StorageTableContent'
import StorageTableHeader from './StorageTableHeader'
import "../../shipment"

const StorageCard = ({result}) => {

    let results = result

    console.log("this is from storage card",results)

    return (
        <div className="shipment-card"> 
            <div className="shipment-card-content">
                {
                    result ? (
                        <>
                            <StorageTableHeader headers = {results}/>
                            <StorageTableContent content = {results}/> 
                        </>
                        ): <p className="terniary-condition-p">Track storage</p>
                }
            </div>
        </div>
    )
}

export default StorageCard
