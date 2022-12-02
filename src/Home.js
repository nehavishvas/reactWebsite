import React from 'react';
import Header from "./Header";
import HowItWork from "./HowItWork";
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Footer from "./Footer";
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
  <Header/>
  <HowItWork/>
  <Aboutus/>
  <Services/>
  <Contact/>
  <Footer/>
    </>
  );
};

export default Home;