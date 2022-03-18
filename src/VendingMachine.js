import React from 'react';
import {Link} from 'react-router-dom';
import vendingMachineImg from './images/VendingMachine.png';
import './VendingMachine.css';
 

const VendingMachine = () => {
    return (
        <div className='VendingMachine'
        style={{backgroundImage:`url(${vendingMachineImg})` }}
        >
            
            <h1>HELLO I AM VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
            <h1><Link to='/soda'>SODA</Link></h1>
            <h1><Link to='/chips'>CHIPS</Link></h1>
            <h1><Link to='/sardines'>FRESH SARDINES</Link></h1>
        </div>
    );
}


export default VendingMachine;