import React from 'react';
import Contact from './components/contact';
import Experience from './components/experience';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Solutions from './components/solutions';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Solutions />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
