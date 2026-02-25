import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set document title and direction
    document.title = 'تاتش فرنيتشر | Touch Furniture';
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Cairo']">
      <Navbar />
      <main>
        <Hero />
        <ProductList />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
