import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ExploreSection from './ExploreSection';

import MakkahPage from './pages/MakkahPage';
import MadinaPage from './pages/MadinaPage';
import HeartSoulSection from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ExploreSection />
            <HeartSoulSection />
          </>
        } />
        <Route path="/makkah" element={<MakkahPage />} />
        <Route path="/madina" element={<MadinaPage />} />
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
