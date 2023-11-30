import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Books from "./components/Books/Books";
import Other from "./components/Other/Other";
import Footer from "./components/Footer/Footer";
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Container maxWidth='lg'>
        <Header/>
        <Navbar/>
        <main>
          <Books/>
          <Other/>
        </main>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
