import React from 'react'
import "../../shipment.css"

const ShipmentTableContent = ({data, array}) => {
	const content = data
	console.log("this is the tablecontent data", content)

	return (
		<div key = {content ? content._id : null} className="storage-content-table">
			<div className="storage-content-table-content">
				<div className="storage-content-table-content-topic">
					<p className="storage-content-table-content-topic">
						{content ? content.date : null}
					</p>
					<p className="storage-content-table-content-topic">
						Location
					</p>
					<p className="storage-content-table-content-topic">
						Time
					</p>
					<p className="storage-content-table-content-topic">
						Pieces
					</p>
				</div>
				
			   { [array].map(() => (
						<>
							<div className="shipment-content-table-content-info">
								<p className="storage-content-table-content-topic">
									{array? array.length: null} 
								</p>
								<p className="storage-content-table-content-topic">
									{content ? content.notes : null}
								</p>
								<p className="storage-content-table-content-topic">
									{content ? content.city : null} - {content ? content.country : null}
								</p>
								<p className="storage-content-table-content-topic">
									{content ? content.timeevents : null}
								</p>
								<p className="storage-content-table-content-topic">
									{content ? content.pieces : null} pieces
								</p>
							</div>
						</>
					))}

			</div>
		</div>
	)
}

export default ShipmentTableContent
