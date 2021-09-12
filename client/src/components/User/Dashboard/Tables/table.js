import React from 'react'
import EnquiriesTable from './EnquiriesTable/EnquiriesTable'
import LogisticsTable from './LogisticsTable/LogisticsTable'
import { StorageTable } from './StorageTable/StorageTable'
import UsersTable from './UsersTable/UsersTable'

const DashTable = () => {
    return (
        <div className="dash-table">
            <StorageTable/>
            <LogisticsTable/>
            <EnquiriesTable/>
            <UsersTable/>
        </div>
    )
}

export default DashTable
