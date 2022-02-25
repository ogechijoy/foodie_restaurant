import React from 'react';
import Location from '../images/location.png';
import Button from './Button';
import Man from '../images/man.png';
import './Home.css';

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='firstDiv'>
                <div className='paragraph'>
                    <p className='p1'>OUR FAST FOOD</p>
                    <p className='p2'><div className='delivery'>Delivery</div>Service</p>
                    <p className='p3'>Enter your location to get your nearest restaurants</p>
                    <p className='p4'>or get delivered foods and enjoy. Happy Foodie life</p>
                </div>
                <div>
                    <img src={Location} className='imgLocation' />
                    <input className='inputLocation' placeholder='Portharcourt, Nigeria' />
                    <Button className='btn2' btnText='Find Food' />
                </div>
            </div>
            <div className='manDiv'>
                <img src={Man} />
            </div>
        </div>
    )
}

export default Home;