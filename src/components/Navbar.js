import React from "react";
import Cart from '../images/cart.png'
import Button from './Button';
import Logo from '../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='NavbarContainer'>
            <img className="foodielogo" src={Logo} />
            <ul>
                <li><a href="" className="home">Home</a></li>
                <li><a href="">Restaurants</a></li>
                <li><a href="">Food</a></li>
                <li><a href="">Food</a></li >
                <li><a href="">Offer</a></li >
                <li><a href="">Services</a></li >
            </ul>
            <div className="cartlogo" >
                <img src={Cart} />
            </div>
            <Button className='btn1' btnText='Register Now' />
        </div>
    )

}

export default Navbar;