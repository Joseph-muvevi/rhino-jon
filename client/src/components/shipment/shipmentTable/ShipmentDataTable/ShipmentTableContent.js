import React, {useState, useEffect} from 'react'
import "../../shipment.css"
import moment from "moment"

const ShipmentTableContent = ({data, array}) => {
	const content = data
	console.log("this is the tablecontent data", content)

	const [date, setDate] = useState({})



	// console.log("i am date", new Date())

	useEffect(() => {
		if (content) {
			setDate(content.date)
		}
	}, [])

	const dateString = moment(date).format('dddd MMMM Do YYYY') 
	console.log(dateString, "the date string")


	return (
		<div key = {content ? content._id : null} className="shipment-content-table">
			<div className="shipment-content-table-content">
				<div className="shipment-content-table-content-topic">
					<p className="shipment-content-table-content-topic-hash">
						#
					</p>
					<p className="shipment-content-table-content-topic-date">
						{content ? dateString.toString() : null}
					</p>
					<p className="shipment-content-table-content-topic-location">
						Location
					</p>
					<p className="shipment-content-table-content-topic-time">
						Time
					</p>
					<p className="shipment-content-table-content-topic-pieces">
						Pieces
					</p>
				</div>
				
			   { [array].map(() => (
						<>
							<div className="shipment-content-table-content-info">
								<p className="shipment-content-table-content-topic-hash">
									{array? array.length: null} 
								</p>
								<p className="shipment-content-table-content-topic-date">
									{content ? content.notes : null}
								</p>
								<p className="shipment-content-table-content-topic-location">
									{content ? content.currentlocation : null}
								</p>
								<p className="shipment-content-table-content-topic-time">
									{content ? content.timeevents : null}
								</p>
								<p className="shipment-content-table-content-topic-pieces">
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
