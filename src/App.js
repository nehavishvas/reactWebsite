import React from 'react';
import Home from './Home';
import { Route, Routes } from "react-router";
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Error from "./pages/Error";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
