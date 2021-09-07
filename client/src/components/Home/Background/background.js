import React from 'react'
import { Link } from 'react-router-dom'
import "./background.css"
import gold from "../../../assets/naturalgold1.jpg"
import diamond from "../../../assets/naturaldiamond.png"
import silver from "../../../assets/naturalsilver.jpg"
import copper from "../../../assets/coppercathode.jfif"
// import gold from "../../../assets/naturalgold1.jpg"
// import gold from "../../../assets/naturalgold1.jpg"

const Background = () => {

    const images = [gold, diamond, silver, copper]
    
    // const looping = () => {
    //     for(let i, i++)
    // }

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
