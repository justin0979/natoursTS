import { useRef } from 'react';
import NavItem from './NavItem';

const Navigation: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="navigation">
      <input
        ref={inputRef}
        id="navi-toggle"
        className="navigation__checkbox"
        type="checkbox"
      />
      <label
        className="navigation__button"
        htmlFor="navi-toggle"
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <NavItem inputRef={inputRef} id="01" href="#about">
            About Natours
          </NavItem>
          <NavItem inputRef={inputRef} id="02" href="#features">
            You benefits
          </NavItem>
          <NavItem inputRef={inputRef} id="03" href="#tours">
            Popular tours
          </NavItem>
          <NavItem inputRef={inputRef} id="04" href="#stories">
            Stories
          </NavItem>
          <NavItem
            inputRef={inputRef}
            id="05"
            href="#section-book"
          >
            Book Now
          </NavItem>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
