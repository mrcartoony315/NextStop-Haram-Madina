import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ExploreSection from './ExploreSection';
import Makkahplaces from './pages/rp';

import MakkahPage from './pages/MakkahPage';
import MadinaPage from './pages/MadinaPage';
import HeartSoulSection from './pages/HomePage';
import HajjPage  from './pages/Hajj'
import Umrah from './pages/Umrah';
import Aboutus  from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ExploreSection  />
            <HeartSoulSection />
            
          </>
        } />
        <Route path="/makkah" element={<MakkahPage />} />
        <Route path="/expandableplaces" element={<Makkahplaces/>}/>
        <Route path="/madina" element={<MadinaPage />} />
        <Route path="/hajj" element={<HajjPage />} />
        <Route path="/umrah" element={<Umrah />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
