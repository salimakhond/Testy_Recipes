import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <div className='md:min-h-[calc(100vh-341px)] w-full'>
                    <Outlet></Outlet>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;