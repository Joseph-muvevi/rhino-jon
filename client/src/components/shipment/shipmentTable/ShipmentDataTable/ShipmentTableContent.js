import React, {useState, useEffect} from 'react'
import "../../shipment.css"
import moment from "moment"

const ShipmentTableContent = ({ array, dates}) => {
	const content = array
	console.log(content, "this is the tablecontent data")

	const [date, setDate] = useState({})

	const datelists = []

	// console.log(typeof(content.createdAt), "i am the content date")

	// let mydate = content.createdAt.split("T")

	// let theDate = mydate[0]

	// let momentDate = moment(theDate).format("dddd MMMM Do YYYY")
	// // console.log(momentDate, "This is split date only")

	// const currentDateNow = array.currentdate
	// const formated = moment(currentDateNow).format("dddd MMMM Do YYYY")
	// console.log("i am the input date", formated)
	// console.log("i am the created at date", momentDate)

	useEffect(() => {
		if (content) {
			setDate(content.currentdate)
		}
	}, [])

	const dateString = moment(date).format('dddd MMMM Do YYYY') 
	// console.log(dateString, "the date string")


	return (
		<div key = {content ? content._id : null} className="shipment-content-table">
			<div className="shipment-content-table-content">
		{/* {
			content.createdAt !== content.date ? (
				): <p>There is nothin here</p>
			} */}

		{
			content ? (
				<>
					{
						content? (
				<>
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
				</>
							
						): <p>dont print me</p>
					}
				</>
			) : (<p>content doesnt exist</p>)
		}
				
			   { [content].map(() => (
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
