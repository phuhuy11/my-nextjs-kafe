import React from 'react';
import logo from './logo.gif';
import './App.css';
import Header from './functions/Header';
import ImageSection from './functions/ImageSection';
import AboutSection from './functions/AboutSection';
import OpeningHours from './functions/OpeningHours';
import ImageCarousel from './functions/ImageCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSection />
      <AboutSection />
      <OpeningHours />
      <ImageCarousel />
    </div>
  );
}

export default App;
