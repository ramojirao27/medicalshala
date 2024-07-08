import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar  =()=>{
    return(
        <div className='navBar'>
            <h1>Medicalshala</h1>
        <div className='desktopMenu'>
            <Link className='desktopmenuItem'>Home</Link>
            <Link className='desktopmenuItem'>About</Link>
            <Link className='desktopmenuItem'>Contact</Link>
        </div>
        
        <button className='downloadBtn'>Download App</button>
        </div>
        

    )
}
export default Navbar;