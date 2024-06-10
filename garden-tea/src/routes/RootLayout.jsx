import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';



function RootLayout() {
    return (
        <>
            <Container>
                <Header />
                <Outlet />
            </Container>


        </>
    )
}

export default RootLayout;
