import React from 'react';

import './App.css';

import Header from './components/Header';
import Details from './components/Details';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Details/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
