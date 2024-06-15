import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Footer from '../Components/Footer';



function RootLayout() {
    return (
        <>
            <Container>
                <Header />
                <Outlet />
            </Container>
            <Footer />

        </>
    )
}

export default RootLayout;
