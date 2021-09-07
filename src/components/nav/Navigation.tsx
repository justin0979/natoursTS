import { useState, useEffect } from 'react';

import NavItem from './NavItem';

const Navigation: React.FC = () => {
  const [inputChecked, setInputChecked] =
    useState<boolean>(false);

  const nobg = () => {
    if (inputChecked === false) {
      return 'navigation__background--gone';
    }
    return 'navigation__background';
  };

  const nonav = () => {
    if (inputChecked === false) {
      return 'navigation__nav--gone';
    }
    return 'navigation__nav';
  };

  return (
    <div className="navigation">
      <input
        onChange={(e) => setInputChecked(e.target.checked)}
        id="navi-toggle"
        className="navigation__checkbox"
        type="checkbox"
      />
      <label
        className="navigation__button"
        htmlFor="navi-toggle"
      >
        MENU
      </label>
      <div className={`${nobg()}`}>&nbsp;</div>
      <nav className={`${nonav()}`}>
        <ul className="navigation__list">
          <NavItem
            onClick={setInputChecked}
            id="01"
            href="#about"
          >
            About Natours
          </NavItem>
          <NavItem
            onClick={setInputChecked}
            id="02"
            href="#features"
          >
            You benefits
          </NavItem>
          <NavItem
            onClick={setInputChecked}
            id="03"
            href="#tours"
          >
            Popular tours
          </NavItem>
          <NavItem
            onClick={setInputChecked}
            id="04"
            href="#stories"
          >
            Stories
          </NavItem>
          <NavItem
            onClick={setInputChecked}
            id="05"
            href="#booking"
          >
            Book Now
          </NavItem>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
