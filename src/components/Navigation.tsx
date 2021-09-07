const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <input
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
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              <span>01</span>
              About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              <span>02</span>
              Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              <span>03</span>
              Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              <span>04</span>
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              <span>05</span>
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
