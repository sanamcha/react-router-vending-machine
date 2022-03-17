import React from 'react';
import {Link} from 'react-router-dom';
import vendingMachineImg from './images/VendingMachine.png';

 

const VendingMachine = () => {
    return (
        <div className='VendingMachine'>
            <img src={vendingMachineImg} alt="vending machine"/>
            <h1>Hello I am vending Machine. What would you like to eat?</h1>
            <h1><Link to='/soda'>Soda</Link></h1>
            <h1><Link to='/chips'>Chips</Link></h1>
        </div>
    );
}


export default VendingMachine;