import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import Menu from './sections/Menu';

export default function Home() {
  return (
    <>
    <Hero/>
    <main id="main">
      <About />
      <WhyUs/>
      <Menu />
    </main>
    </>
  );
}
