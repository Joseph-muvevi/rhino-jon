import React from 'react'

const AdminStorageTableContent = () => {


    return (
        <div className="admin-storage-table-content">
            <div className="admin-storage-unifier">

            {
                [1, 2, 3].map(() => (
                    <div className="admin-storage-table-content-content">
                    <div className="admin-storage-table-content-upper">
                        <p className="admin-storage-table-content-p">
                            1
                        </p>
                        <p className="admin-storage-table-content-p">
                            strorage 0001
                        </p>
                        <p className="admin-storage-table-content-p">
                            Brian
                        </p>
                        <p className="admin-storage-table-content-p">
                            120123
                        </p>
                        <p className="admin-storage-table-content-p">
                            Nairobi
                        </p>
                        <p className="admin-storage-table-content-p">
                            Maize
                        </p>
                        <p className="admin-storage-table-content-p">
                            2% Moisture
                        </p>
                        <p className="admin-storage-table-content-p">
                            2
                        </p>
                        <p className="admin-storage-table-content-p">
                            bag
                        </p>
                        <p className="admin-storage-table-content-p">
                            300kg
                        </p>
                        <p className="admin-storage-table-content-p">
                            date in
                        </p>
                        <p className="admin-storage-table-content-p">
                            date out
                        </p>
                    </div>
                    <div className="admin-storage-table-content-lower">
                        <div className="admin-storage-table-content-observation-upper">
                           <p className="admin-storage-table-content-observation">
                                Observation
                            </p>
                            <p>
                                Lower
                            </p>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>

        </div>
    )
}

export default AdminStorageTableContent
