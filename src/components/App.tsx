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
import { Button } from '&components/Button';
import {
  SectionAbout,
  SectionFeatures,
} from '&components/sections';

library.add(faGlobe, faCompass, faHeart, faMap, faKey);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Button className="btn btn--sticky" href="#">
        To Top
      </Button>
      <main>
        <SectionAbout />
        <SectionFeatures />
      </main>
    </BrowserRouter>
  );
};

export default App;
