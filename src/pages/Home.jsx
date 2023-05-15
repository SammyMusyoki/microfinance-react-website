/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import Business from '../images/Business.jpg'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <FeaturedSection/>
      
    </React.Fragment>
  );
}

export default Home
