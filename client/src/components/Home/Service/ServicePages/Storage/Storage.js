import React from 'react'
import StorageBanner from './StorageBanner/StorageBanner'
import StorageContent from './StorageContent/StorageContent'
import StorageFooter from './StorageFooter/StorageFooter'

const Storage = () => {
    return (
        <div className="Storage">
            <StorageBanner/>
            <StorageContent/>
            <StorageFooter/>
        </div>
    )
}

export default Storage
