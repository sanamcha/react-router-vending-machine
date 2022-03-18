import React from "react";
import { Link } from "react-router-dom";
import sodaImage from "./images/Soda.png";
import './Soda.css'

const Soda = () => {
    return (
        <div className="Soda">
            <img src={sodaImage} alt="cane coke soda"/>
            <h1>OMG SUGARRRR</h1> 
            <h1><Link to='/'>Go Back</Link></h1>
            <img src ={sodaImage} />
    
        </div>
    )
}

export default Soda;