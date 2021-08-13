import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMap,
  faKey,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Header } from '&components/Header';
import { Button } from '&components/Button';
import {
  SectionAbout,
  SectionFeatures,
} from '&components/sections';

library.add(faHeart, faMap, faKey);

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
