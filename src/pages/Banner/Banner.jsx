import React from 'react';
import bannerImg from '../../assets/banner.jpg';
import { Image } from 'react-bootstrap';


const Banner = () => {
    return (
        <div className='position-relative'>
            <Image src={bannerImg} fluid />
            <h2 className='position-absolute top-50 text-white fw-bolder text-center' style={{margin: '0px 100px', fontSize: '42px'}}>Easily add-in a short description about your recipe! This can be of any length. Remember, you are trying to sell your recipe!</h2>
        </div>
    );
};

export default Banner;