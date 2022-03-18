import React from "react";
import { Link } from "react-router-dom";
import './Sardines.css'


const Sardines = () => {
    return (
        <div 
        className = "Sardines"
        style = {{backgroundImage:"url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"}}> 
        <h1>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU.</h1>  
       <h1><Link to="/">Go Back</Link></h1>
            
        </div>
    );
}

export default Sardines;