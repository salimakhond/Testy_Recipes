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
                <Outlet></Outlet>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;