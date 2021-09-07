import React, {useState, useEffect} from 'react'
import axios from "axios"

const LogisticsTable = () => {
    const [logistics, setLogistics] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/logisticsrecords`)
            .then(data => console.log(data))
    }, [logistics])

    return (
        <div>
            
        </div>
    )
}

export default LogisticsTable
