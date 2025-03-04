import React from 'react';
import './App.css';
import Header from './functions/Header.tsx';
import ImageSection from './functions/ImageSection.tsx';
import AboutSection from './functions/AboutSection.tsx';
import OpeningHours from './functions/OpeningHours.tsx';
import ImageCarousel from './functions/ImageCarousel.tsx';

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
