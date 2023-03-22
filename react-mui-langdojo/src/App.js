import React from 'react';
import NavbarWithDrawer from './components/navbarWithDrawer';
import Hero from './components/hero';
import FeaturedCourses from './components/featured';
import Benefits from './components/benefits';
import Instructor from './components/instructor';
import Subscribe from './components/subscribe';
import Footer from './components/footer';
import StickyFooter from './components/stickyFooter';

function App() {
  return (
    <div>
      <NavbarWithDrawer />
      <Hero />
      <FeaturedCourses />
      <Benefits />
      <Instructor />
      <Subscribe />
      <Footer />
      <StickyFooter />
    </div>
  );
}

export default App;
