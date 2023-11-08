import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Other from "./components/Other";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Books/>
            <Other/>
            <Footer/>
        </>
    );
}

export default App;
