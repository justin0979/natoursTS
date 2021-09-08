import { useRef } from 'react';
import NavItem from './NavItem';

const Navigation: React.FC = () => {
  const checkRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="navigation">
      <input
        ref={checkRef}
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
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <NavItem inputRef={checkRef} id="01" href="#about">
            About Natours
          </NavItem>
          <NavItem inputRef={checkRef} id="02" href="#features">
            You benefits
          </NavItem>
          <NavItem inputRef={checkRef} id="03" href="#tours">
            Popular tours
          </NavItem>
          <NavItem inputRef={checkRef} id="04" href="#stories">
            Stories
          </NavItem>
          <NavItem inputRef={checkRef} id="05" href="#booking">
            Book Now
          </NavItem>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
