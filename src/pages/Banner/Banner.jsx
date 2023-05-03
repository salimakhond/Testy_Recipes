import React from 'react';
import bannerImg from '../../assets/banner.jpg';
import { Button, Image } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImg})`, height: '400px' }} className=' position-relative '>
            
            <div className='text-center pt-5 mx-md-5 px-lg-5'>
                <h2 className='text-white fw-bolder pt-md-5 mx-md-5 px-lg-5' style={{ fontSize: '42px' }}>No Matter How You Cook, Testy Recipe Has Many The Recipes.</h2>
                <Button className='mt-3 fw-semibold fs-4' variant="primary">Explore Recipes</Button>
            </div>
        </div>
    );
};

export default Banner;