import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import golden from "../../../../assets/gold1.jpg"
import "./addShipmentForm.css"

const AddShipmentForm = () => {
    return (
        <div className="add-shipment-form">
            <div className="add-shipment-form-content">
                <div className="add-shipment-left">
                    <img className="add-shipment-form-image" src={golden} alt="Rhino jon gold shippment"/>
                </div>

                <form className="the-add-shipment-form">

                    <div className="add-shipment-small-inputs">
                        <div className="add-shipment-small-input-group">
                            <label>Quantity</label>
                            <input type="number" placeholder="Track number here..." name="track-number" required/>
                        </div>
                        <div className="add-shipment-small-input-group">
                            <label>Goods Title</label>
                            <input type="text" placeholder="Goods title here..." name="goods-title" required/>
                        </div>
                    </div>

                    <div className="add-shipment-small-inputs">
                        <div className="add-shipment-small-input-group">
                            <label>Destination</label>
                            <input type="text" placeholder="Goods Destination" name="destination" required/>
                        </div>
                        <div className="add-shipment-small-input-group">
                            <label>Departure Date</label>
                            <input type="date" placeholder="Departure date here..." name="destination date" required/>
                        </div>
                    </div>

                    <div className="add-shipment-small-inputs">
                        <div className="add-shipment-small-input-group">
                            <label>Arrival</label>
                            <input type="text" placeholder="Arrival city here..." name="track-number" required/>
                        </div>
                        <div className="add-shipment-small-input-group">
                            <label>Arrival Date</label>
                            <input type="date" placeholder="Arrival date here..." name="goods-title" required/>
                        </div>
                    </div>

                    <div className="add-shipment-small-inputs">
                        <div className="add-shipment-small-input-group">
                            <label>Current Location</label>
                            <input type="number" placeholder="Track number here..." name="track-number" required/>
                        </div>
                        <div className="add-shipment-small-input-group">
                            <label>Estimated Arrival date</label>
                            <input type="date" placeholder="Estimated Arrival date here..." name="goods-title" required/>
                        </div>
                    </div>

                    <div className="contact-textarea">
                        <label>Description</label>
                        <textarea type="text" name="descrption" placeholder="Little descriptions eg weight, size, color, etc"/>
                    </div>

                    <br/>
                    <button>
                        Submit <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddShipmentForm
