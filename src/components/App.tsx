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
} from '&components/sections';

// Globally adding Font Awesome icons
library.add(faGlobe, faCompass, faHeart, faMap, faKey);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStories />
      </main>
      <Footer />
      <Jumper />
    </BrowserRouter>
  );
};

export default App;
