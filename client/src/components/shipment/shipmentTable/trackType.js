import React from 'react'
import {Link} from "react-router-dom"

const TrackType = () => {
    return (
        <div claaaName="tracktype">
            <div className="tracktype-content">
                <h3 className="tracktype-h3">
                    Choose your tracking information
                </h3>
            </div>
            <Link to="/track-shipment" className="tracktype-link">
                <button>
                    Track your shipment
                </button>
            </Link>
            <Link to="/track-storage" className="tracktype-link">
                <button>
                    Track your storage
                </button>
            </Link>
        </div>
    )
}

export default TrackType
