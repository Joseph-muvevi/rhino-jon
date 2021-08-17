import React from 'react'
import { Link } from 'react-router-dom'
import "./background.css"

const Background = () => {
    return (
        <div className="background">
            <div className="background-content">
                <h3 className="background-h3">Our Coverage</h3>
                <p className="background-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <Link to="/quotation"><button>Request quote</button></Link>
            </div>
        </div>
    )
}

export default Background
