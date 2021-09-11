import React from 'react'
import EnquiriesTable from './EnquiriesTable/EnquiriesTable'
import LogisticsTable from './LogisticsTable/LogisticsTable'
import { StorageTable } from './StorageTable/StorageTable'

const DashTable = () => {
    return (
        <div className="dash-table">
            <StorageTable/>
            <LogisticsTable/>
            <EnquiriesTable/>
        </div>
    )
}

export default DashTable
