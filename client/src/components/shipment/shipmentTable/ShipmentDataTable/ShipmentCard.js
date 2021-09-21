import React from 'react'
import ShipmentTableHeader from './ShipmentTableHeader'
import ShipmentTableContent from './ShipmentTableContent'
// import "../../shipment.css"
import "./shipmentdatatable.css"
// import StorageTableHeader from '../StorageTable/StorageTableHeader'

const ShipmentCard = ({result, filtered}) => {

	

	let filter = filtered

	console.log("the filter items are",filter)

	return (
		<div className="shipment-card"> 
			<div className="shipment-card-content">
			{
				filtered ? (
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
						{
							result? <ShipmentTableHeader headers = {result}/> : (
								<p className="terniary-condition-p">
									Track your shipment
								</p>
							)
						}
						{/* {
							// console.log("This is the results in jsx",results)
							results ? results.map((mappedResults) => (
								<ShipmentTableContent array = {results} data = {mappedResults} />
							)):  null
						} */}
						{/* {
							// console.log("This is the results in jsx",results)
							results ? results.map((filteredObj) => (
								<ShipmentTableContent array = {filteredObj}  />
							)):  null
						} */}
						{
							filter ? filter.map(filterResults => (<ShipmentTableContent array = {filterResults}  /> )) : null
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
