import React from 'react'

const AdminStorageTableContent = ({content}) => {

	const detail = content
	console.log("this is the result from table detail", detail)

	return (
		<div className="admin-storage-table-content">
			<div className="admin-storage-unifier">

			
					<div className="admin-storage-table-content-content">
						<div className="admin-storage-table-content-upper">
							<p className="admin-storage-table-content-p">
								1
							</p>
							<p className="admin-storage-table-content-p">
								{ detail ? detail.trackno : null }
							</p>
							<p className="admin-storage-table-content-p">
								{ detail ? detail.fullnames : null }
							</p>
							<p className="admin-storage-table-content-p">
								{ detail ? detail.idno : null }
							</p>
							<p className="admin-storage-table-content-p">
								{ detail ? detail.storagecity : null }
							</p>
							<p className="admin-storage-table-content-p">
								Product
							</p>
							<p className="admin-storage-table-content-p">
								{ detail ? detail.quality : null }
							</p>
							<p className="admin-storage-table-content-p">
								2
							</p>
							<p className="admin-storage-table-content-p">
								bag
							</p>
							<p className="admin-storage-table-content-p">
								{ detail ? detail.weight : null } { detail ? detail.weightunit : null }
							</p>
							<p className="admin-storage-table-content-p">
								{ detail ? detail.datein : null }
							</p>
							<p className="admin-storage-table-content-p">
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
