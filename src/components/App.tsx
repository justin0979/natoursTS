import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGlobe,
  faMap,
  faKey,
  faHeart,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';
import Header from '&components/Header';
import Jumper from '&components/Jumper';
import Footer from '&components/Footer';
import {
  SectionAbout,
  SectionFeatures,
  SectionStories,
  SectionTours,
  SectionBooking,
} from '&components/sections';
import { Navigation } from './nav';

// Globally adding Font Awesome icons
library.add(faGlobe, faCompass, faHeart, faMap, faKey);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
        <SectionBooking />
      </main>
      <Footer />
      <Jumper />
    </BrowserRouter>
  );
};

export default App;
