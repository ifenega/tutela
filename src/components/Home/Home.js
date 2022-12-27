import './Home.css'
import React from 'react'
import Coverage from './Coverage';
import Footer from '../Footer';
import Hero from './Hero';
import SpecialDesign from './SpecialDesign';

const Home = () => {
  return (
    <>
      <Hero />
      <Coverage />
      <SpecialDesign />
      <Footer />
    </>
  );
}

export default Home