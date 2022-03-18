import React, {useState} from "react";
import { Link } from "react-router-dom";
import chipsImage from "./images/Chips.png";
import './Chips.css'


const Chips = () => {
    const [packets, setPackets] = useState([]);
    
    function handleClick() {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setPackets(p => [...p, {x, y}]);
    }

    const bags = packets.map((packet, i) => (
        <img 
            key={i}
            src = {chipsImage}
            className ="packet"
            style = {{top: `${packet.y}px`, left: `${packet.x}px`}}
            alt="packets of lay's chips"/>
    ));
    return (
        <div className="Chips">
            <h1>Chips packets eaten: {packets.length}</h1> 
            <button onClick={handleClick}>NOM NOM NOM</button> 
            <h1>
                <Link to='/'>Go Back</Link>
            </h1>
              
            {bags}
        </div>
      
    );
}

export default Chips;