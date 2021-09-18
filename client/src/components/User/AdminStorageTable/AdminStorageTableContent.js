import React from 'react'
import "./adminstoragetable.css"

const AdminStorageTableContent = ({content, length}) => {

	const detail = content
	console.log("this is the result from table detail", detail)
	console.log("this is the result from table length", length)

	return (
		<div className="admin-storage-table-content">
			<div className="admin-storage-unifier">

			
					<div className="admin-storage-table-content-content">
						<div className="admin-storage-table-content-upper">
							<p className="admin-storage-table-content-number">
								{length + 1}
							</p>
							<p className="admin-storage-table-content-tracking">
								{ detail ? detail.trackno : null }
							</p>
							<p className="admin-storage-table-content-client">
								{ detail ? detail.fullnames : null }
							</p>
							<p className="admin-storage-table-content-id">
								{ detail ? detail.idno : null }
							</p>
							<p className="admin-storage-table-content-address">
								{ detail ? detail.storagecity : null }
							</p>
							<p className="admin-storage-table-content-product">
								{ detail ? detail.product : null }
							</p>
							<p className="admin-storage-table-content-quality">
								{ detail ? detail.quality : null }
							</p>
							<p className="admin-storage-table-content-unit">
								{ detail ? detail.unit : null}
							</p>
							<p className="admin-storage-table-content-packaging">
								bag
							</p>
							<p className="admin-storage-table-content-weight">
								{ detail ? detail.weight : null } { detail ? detail.weightunit : null }
							</p>
							<p className="admin-storage-table-content-date">
								{ detail ? detail.datein : null }
							</p>
							<p className="admin-storage-table-content-date">
								{ detail ? detail.dateout : null }
							</p>
						</div>
						<div className="admin-storage-table-content-lower">
							<div className="admin-storage-table-content-observation-upper">
							<p className="admin-storage-table-content-observation">
									Observation : { detail ? detail.notes : null }
								</p>
							</div>
						</div>
					</div>
				
			</div>

		</div>
	)
}

export default AdminStorageTableContent
