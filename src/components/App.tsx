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
import { Header } from '&components/Header';
import { Footer } from '&components/Footer';
import { Button } from '&components/Button';
import {
  SectionAbout,
  SectionFeatures,
  SectionTours,
} from '&components/sections';

library.add(faGlobe, faCompass, faHeart, faMap, faKey);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="jumper">
        <Button className="btn btn--top btn--shadow" href="#">
          <p>Top</p>
        </Button>
        <Button
          className="btn btn--bottom  btn--shadow"
          href="#footer"
        >
          <p>Bottom</p>
        </Button>
      </div>
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
