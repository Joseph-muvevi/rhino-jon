import React from 'react'
import ShipmentTableHeader from './ShipmentTableHeader'
import ShipmentTableContent from './ShipmentTableContent'
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
