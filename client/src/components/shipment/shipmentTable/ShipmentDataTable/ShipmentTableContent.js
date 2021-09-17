import React from 'react'
import "../../shipment.css"

const ShipmentTableContent = () => {
	return (
		<div className="storage-content-table">
			<div className="storage-content-table-content">
				<div className="storage-content-table-content-topic">
					<p className="storage-content-table-content-topic">
						Wednesday, Tuesday 30 2018
					</p>
					<p className="storage-content-table-content-topic">
						Location
					</p>
					<p className="storage-content-table-content-topic">
						Time
					</p>
					<p className="storage-content-table-content-topic">
						Piece
					</p>
				</div>
			   { [1, 2, 3].map(() => (
						<>
							<div className="shipment-content-table-content-info">
								<p className="storage-content-table-content-topic">
									5
								</p>
								<p className="storage-content-table-content-topic">
									Some activity from 
								</p>
								<p className="storage-content-table-content-topic">
									Nairobi
								</p>
								<p className="storage-content-table-content-topic">
									12:30
								</p>
								<p className="storage-content-table-content-topic">
									Piece
								</p>
							</div>
						</>
					))}

			</div>
		</div>
	)
}

export default ShipmentTableContent
