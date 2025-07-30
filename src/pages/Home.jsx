import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import About from '../components/Home/About';
import HowItWorks from '../components/Home/HowItWorks';
import CallToAction from '../components/Home/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <HowItWorks />
      <CallToAction />
    </>
  );
}
