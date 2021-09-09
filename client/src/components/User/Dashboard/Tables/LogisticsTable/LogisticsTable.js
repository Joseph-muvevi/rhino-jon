import React, {useState, useEffect, useMemo} from 'react'
import {useTable, useSortBy, useGlobalFilter } from "react-table"
import {GROUPED_LOGISTICS_COLUMNS} from "./LogisticsTableColumns"
import {LogisticsGlobalFilter} from "./LogisticsGlobalFilter"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const LogisticsTable = () => {
    const [logistics, setLogistics] = useState([])
    const columns = useMemo(() => GROUPED_LOGISTICS_COLUMNS, [])
    const tableData = useMemo(() => logistics, [logistics])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/logisticsrecords`)
            .then(res => setLogistics(res.data))
            .catch(err => console.log(err))
    }, [])

    const logisticsTableInstance = useTable({
        columns: columns,
        data: tableData
    }, useGlobalFilter, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = logisticsTableInstance

    const { globalFilter } = state

    return (
        <>
            <LogisticsGlobalFilter filter = {globalFilter} setFilter={setGlobalFilter}/>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render("Header")}
                                                <span>
                                                    {column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon={faSortDown}/>: <FontAwesomeIcon icon={faSortUp}/> ) : "" }
                                                </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {
                                                        cell.render("Cell")
                                                    }
                                                </td>)
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default LogisticsTable
