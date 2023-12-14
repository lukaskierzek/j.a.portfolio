import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Container from '@mui/material/Container';
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Container maxWidth='lg'>
        <Header/>
        <Navbar/>
        <Main/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
