import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <BrowserRouter>
          
          <Navbar/>
          
          <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;