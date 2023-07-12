import React from 'react';
import aboutImg from '../../../assets/about.jpg'
import { Image } from 'react-bootstrap';
const About = () => {
    return (
        <div className='row align-items-lg-center pt-5 pt-lg-5 mt-lg-5'>
            <div className='col-lg-6'>
                <Image style={{ borderRadius: '8px', width: '100%'}} className='' src={aboutImg} fluid />
            </div>
            <div className='col-lg-6'>
                <div className='mt-4 mt-lg-0 ms-lg-3'>
                    <h5 style={{ color: 'rgb(73, 160, 173)', marginBottom: '20px' }}>WHO WE ARE</h5>
                    <h2 className='mb-4 fs-1 fw-bolder'>One thousand flavors <br /> in one place.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio incidunt officiis dignissimos aut accusantium vel animi, aliquam quisquam voluptatem aperiam cumque possimus consequatur, omnis, explicabo ratione dicta eum repellendus iusto reprehenderit illum minus eos! Odio illo aut sunt voluptatem ea.</p>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dicta expedita illum iusto, esse dolorem consectetur quo officia molestias, alias corrupti repellendus recusandae saepe velit minima.</p>
                </div>
            </div>
        </div>
    );
};

export default About;