import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Other from "./components/Other";
import Footer from "./components/Footer";
import Container from '@mui/material/Container';

function App() {
    return (
        <>
            <Container>{/*#TODO: Add material ui*/}
                <Header/>
                <Navbar/>
                <Books/>
                <Other/>
                <Footer/>
            </Container>
        </>
    );
}

export default App;
