import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Team from './sections/Team';
import Services from './sections/Services';
import Products from './sections/Products';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;