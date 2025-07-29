import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            {/* <Testimonials /> */}
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;