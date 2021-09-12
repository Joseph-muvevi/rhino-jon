import React, {useState, useEffect, useMemo} from 'react'
import axios from "axios"
import { Line } from "react-chartjs-2"

const AnaliticsBannerLineChart = () => {

    const [logisticsQuotation, setLogisticsQuotation] = useState([])
    const [objKeys, setObjKeys] = useState([])
    const logQuotation = useMemo(() => logisticsQuotation, [logisticsQuotation])

    useEffect(() => {
        axios.get("http://localhost:8080/api/logisticsrecords")
            .then((res) => setLogisticsQuotation(res.data))
            .catch(err => console.log(err))
    })

    // const getKeys = () => {
    //     logQuotation.map(obj => setObjKeys(Object.keys(obj)))
        
    //     // const 
    //     console.log(objKeys)
    // }
    
    // getKeys()

    const data = {
        labels: [],
        datasets: [
            {
                label: "Logistics records",
                data: logQuotation
            }
        ]
    }

    return (
        
        <Line data={data} />
    )
}

export default AnaliticsBannerLineChart
