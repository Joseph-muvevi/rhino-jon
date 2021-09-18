import React from 'react'
import ShipmentTableHeader from './ShipmentTableHeader'
import ShipmentTableContent from './ShipmentTableContent'
import "../../shipment.css"
// import StorageTableHeader from '../StorageTable/StorageTableHeader'

const ShipmentCard = ({result}) => {

	let results = []
	results.push(result)

	// console.log("these are the results from shipment card", results)

	return (
		<div className="shipment-card"> 
			<div className="shipment-card-content">
			{
				results ? (
					<>
						<div className="track-shipment-top-info">
							<h2 className="track-shipment-top-h2">
								Track Shipments
							</h2>
							<p className="track-shipment-top-p">
								Our online results give you real time, dtailed progress 
								as your shipment speeds through our logistics network.
							</p>
						</div>
						<ShipmentTableHeader headers = {result}/>
						{
							// console.log("This is the results in jsx",results)
							results ? results.map((mappedResults) => (
								<ShipmentTableContent array = {results} data = {mappedResults} />
							)):  null
						}
					</>
				) : <p className="terniary-condition-p">
						Track your shipment
					</p>
			}
			</div>
		</div>
	)
}

export default ShipmentCard
